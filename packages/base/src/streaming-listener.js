import { EventPart, directive } from 'lit-html';
const previousValues = new WeakMap();
const stateMap = new WeakMap();
const addListener = (el, type, fn) => {
    if (Array.isArray(type)) {
        type.map((eventName) => {
            el.addEventListener(eventName, fn);
        });
    }
    else {
        el.addEventListener(type, fn);
    }
};
const removeListener = (el, type, fn) => {
    if (Array.isArray(type)) {
        type.map((eventName) => {
            el.removeEventListener(eventName, fn);
        });
    }
    else {
        el.removeEventListener(type, fn);
    }
};
const addEventListeners = (part, start, stream, end) => {
    const { element, eventContext } = part;
    const isStreaming = stateMap.get(part);
    let handledStream = false;
    const handleStream = (event) => {
        if (!handledStream) {
            handledStream = true;
            stream.fn.call(eventContext || element, event);
            requestAnimationFrame(() => {
                handledStream = false;
            });
        }
    };
    const handleEnd = (event) => {
        addListener(element, start.type, handleStart);
        removeListener(element, stream.type, handleStream);
        removeListener(element, end.type, handleEnd);
        stateMap.set(part, false);
        end.fn.call(eventContext || element, event);
    };
    const handleStart = (event) => {
        start.fn.call(eventContext || element, event);
        if (event.defaultPrevented) {
            return;
        }
        removeListener(element, start.type, handleStart);
        addListener(element, stream.type, handleStream);
        addListener(element, end.type, handleEnd);
        stateMap.set(part, true);
    };
    if (!isStreaming) {
        addListener(element, start.type, handleStart);
    }
    else {
        addListener(element, stream.type, handleStream);
        addListener(element, end.type, handleEnd);
    }
    return () => {
        removeListener(element, start.type, handleStart);
        removeListener(element, stream.type, handleStream);
        removeListener(element, end.type, handleEnd);
    };
};
/**
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */
export const streamingListener = directive((start, stream, end) => (part) => {
    if (!(part instanceof EventPart)) {
        return;
    }
    if (previousValues.has(part)) {
        const previous = previousValues.get(part);
        if (start.type === previous.start.type &&
            stream.type === previous.stream.type &&
            end.type === previous.end.type &&
            start.fn === previous.start.fn &&
            stream.fn === previous.stream.fn &&
            end.fn === previous.end.fn) {
            return;
        }
        previous.removeEventListeners();
    }
    else {
        stateMap.set(part, false);
    }
    previousValues.set(part, {
        start,
        stream,
        end,
        removeEventListeners: addEventListeners(part, start, stream, end),
    });
});
//# sourceMappingURL=streaming-listener.js.map