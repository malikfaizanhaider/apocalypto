export function emit(element, name, data, opts = {}) {
    const event = new CustomEvent(name, Object.assign(Object.assign({}, opts), { detail: data }));
    element.dispatchEvent(event);
}
export function applyStyle(elm, style, previousStyles = {}) {
    for (const [key, _value] of Object.entries(previousStyles)) {
        elm.style.removeProperty(key);
    }
    for (const [key, value] of Object.entries(style)) {
        // @ts-ignore
        elm.style[key] = value;
    }
}
export function promisor() {
    let resolver, rejector;
    const promise = new Promise((resolve, reject) => {
        resolver = resolve;
        rejector = reject;
    });
    return [promise, resolver, rejector];
}
//# sourceMappingURL=util.js.map