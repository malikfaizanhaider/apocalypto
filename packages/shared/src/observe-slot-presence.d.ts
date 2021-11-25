import { UpdatingElement } from '@spectrum-web-components/base';
declare type Constructor<T = Record<string, unknown>> = {
    new (...args: any[]): T;
    prototype: T;
};
export interface SlotPresenceObservingInterface {
    slotContentIsPresent: boolean;
    getSlotContentPresence(selector: string): boolean;
    managePresenceObservedSlot(): void;
}
export declare function ObserveSlotPresence<T extends Constructor<UpdatingElement>>(constructor: T, lightDomSelector: string | string[]): T & Constructor<SlotPresenceObservingInterface>;
export {};