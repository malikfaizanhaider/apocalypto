import { UpdatingElement } from '@spectrum-web-components/base';
declare type Constructor<T = Record<string, unknown>> = {
    new (...args: any[]): T;
    prototype: T;
};
export interface SlotTextObservingInterface {
    slotHasContent: boolean;
    manageTextObservedSlot(): void;
}
export declare function ObserveSlotText<T extends Constructor<UpdatingElement>>(constructor: T, slotSelector?: string): T & Constructor<SlotTextObservingInterface>;
export {};