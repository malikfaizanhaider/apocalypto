/* Copyright 2021 i2c Inc. All rights reserved. */
import {
    PropertyValues,
    UpdatingElement,
    queryAssignedNodes,
    property,
} from '../../base/src/index';

const slotElementObserver = Symbol('slotElementObserver');
const assignedNodesList = Symbol('assignedNodes');
const startObserving = Symbol('startObserving');

type Constructor<T = Record<string, unknown>> = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new (...args: any[]): T;
    prototype: T;
};

export interface SlotTextObservingInterface {
    slotHasContent: boolean;
    manageTextObservedSlot(): void;
}

export function ObserveSlotText<T extends Constructor<UpdatingElement>>(
    constructor: T,
    slotSelector?: string
): T & Constructor<SlotTextObservingInterface> {
    class SlotTextObservingElement extends constructor
        implements SlotTextObservingInterface {
        private [slotElementObserver]: MutationObserver;

        @property({ type: Boolean, attribute: false })
        public slotHasContent = false;

        @queryAssignedNodes(slotSelector, true)
        private [assignedNodesList]!: NodeListOf<HTMLElement>;

        public manageTextObservedSlot(): void {
            if (!this[assignedNodesList]) return;
            const assignedNodes = [...this[assignedNodesList]].filter(
                (node) => {
                    if ((node as HTMLElement).tagName) {
                        return true;
                    }
                    return node.textContent ? node.textContent.trim() : false;
                }
            );
            this.slotHasContent = assignedNodes.length > 0;
        }

        protected firstUpdated(changedProperties: PropertyValues): void {
            super.firstUpdated(changedProperties);
            this.manageTextObservedSlot();
        }

        private [startObserving](): void {
            const config = { characterData: true, subtree: true };
            if (!this[slotElementObserver]) {
                const callback = (
                    mutationsList: Array<MutationRecord>
                ): void => {
                    for (const mutation of mutationsList) {
                        if (mutation.type === 'characterData') {
                            this.manageTextObservedSlot();
                        }
                    }
                };
                this[slotElementObserver] = new MutationObserver(callback);
            }
            this[slotElementObserver].observe(this, config);
        }

        public connectedCallback(): void {
            super.connectedCallback();
            this[startObserving]();
        }

        public disconnectedCallback(): void {
            if (this[slotElementObserver]) {
                this[slotElementObserver].disconnect();
            }
            super.disconnectedCallback();
        }
    }
    return SlotTextObservingElement;
}
