/* Copyright 2021 i2c Inc. All rights reserved. */
import { OverlayStack } from './overlay-stack.js';
/**
 * This class allows access to the overlay system which allows a client to
 * position an element in the overlay positioned relative to another node.
 */
export class Overlay {
    /**
     *
     * @param owner the parent element we will use to position the overlay element
     * @param interaction the type of interaction that caused this overlay to be shown
     * @param overlayElement the item to display as an overlay
     */
    constructor(owner, interaction, overlayElement) {
        this.isOpen = false;
        this.owner = owner;
        this.overlayElement = overlayElement;
        this.interaction = interaction;
    }
    /**
     * Open an overlay
     *
     * @param owner the parent element we will use to position the overlay element
     * @param interaction the type of interaction that caused this overlay to be shown
     * @param overlayElement the item to display as an overlay
     * @param options display parameters
     * @param options.delayed if true delay opening of the overlay based on the global warmup/cooldown timer
     * @param options.offset distance to offset the overlay
     * @param options.placement side on which to position the overlay
     * @returns an Overlay object which can be used to close the overlay
     */
    static async open(owner, interaction, overlayElement, options) {
        const overlay = new Overlay(owner, interaction, overlayElement);
        await overlay.open(options);
        return () => {
            overlay.close();
        };
    }
    static update() {
        const overlayUpdateEvent = new CustomEvent('sp-update-overlays', {
            bubbles: true,
            composed: true,
            cancelable: true
        });
        document.dispatchEvent(overlayUpdateEvent);
    }
    /**
     * Open an overlay
     *
     * @param options display parameters
     * @param options.delayed delay before opening the overlay
     * @param options.offset distance to offset the overlay
     * @param options.placement side on which to position the overlay
     * @returns a Promise that resolves to true if this operation was cancelled
     */
    async open({ abortPromise, delayed, offset = 0, placement = 'top', receivesFocus, notImmediatelyClosable }) {
        /* c8 ignore next */
        if (this.isOpen)
            return true;
        if (delayed === undefined) {
            delayed = this.overlayElement.hasAttribute('delayed');
        }
        const queryThemeDetail = {
            color: undefined,
            scale: undefined
        };
        const queryThemeEvent = new CustomEvent('cm-query-theme', {
            bubbles: true,
            composed: true,
            detail: queryThemeDetail,
            cancelable: true
        });
        this.owner.dispatchEvent(queryThemeEvent);
        const overlayDetailQuery = {};
        const queryOverlayDetailEvent = new CustomEvent('sp-overlay-query', {
            bubbles: true,
            composed: true,
            detail: overlayDetailQuery,
            cancelable: true
        });
        this.overlayElement.dispatchEvent(queryOverlayDetailEvent);
        await Overlay.overlayStack.openOverlay({
            abortPromise,
            content: this.overlayElement,
            contentTip: overlayDetailQuery.overlayContentTipElement,
            delayed,
            offset: offset,
            placement: placement,
            trigger: this.owner,
            interaction: this.interaction,
            theme: queryThemeDetail,
            receivesFocus,
            notImmediatelyClosable,
            ...overlayDetailQuery
        });
        this.isOpen = true;
        return true;
    }
    /**
     * Close the overlay if it is open
     */
    close() {
        Overlay.overlayStack.closeOverlay(this.overlayElement);
    }
}
Overlay.overlayStack = new OverlayStack();
/**
 * Announces that an overlay-based UI element has opened
 * @event sp-open
 * @type {object}
 * @property {TriggerInteractions} interaction type of interaction that triggered the opening
 */
/**
 * Announces that an overlay-based UI element has opened
 * @event sp-close
 * @type {object}
 * @property {TriggerInteractions} interaction type of interaction that triggered the closing
 */
//# sourceMappingURL=overlay.js.map