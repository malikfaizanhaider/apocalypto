/* Copyright 2021 i2c Inc. All rights reserved. */

import { ThemeData } from '../../theme/src';
import { Placement as PopperPlacement } from './popper';

export type TriggerInteractions =
    | 'click'
    | 'longpress'
    | 'hover'
    | 'custom'
    | 'replace'
    | 'inline'
    | 'modal';

export interface OverlayOpenDetail {
    content: HTMLElement;
    contentTip?: HTMLElement;
    delayed: boolean;
    offset: number;
    placement?: Placement;
    receivesFocus?: 'auto';
    trigger: HTMLElement;
    interaction: TriggerInteractions;
    theme: ThemeData;
    notImmediatelyClosable?: boolean;
    abortPromise?: Promise<boolean>;
}

export interface OverlayOpenCloseDetail {
    interaction: TriggerInteractions;
}

/**
 * Used, via an event, to query details about how an element should be shown in
 * an overlay
 */
export interface OverlayDisplayQueryDetail {
    overlayRootName?: string;
    overlayRootElement?: HTMLElement;
    overlayContentTipElement?: HTMLElement;
}

export type Placement = PopperPlacement | 'none';

export type OverlayOptions = {
    delayed?: boolean;
    placement?: Placement;
    offset?: number;
    receivesFocus?: 'auto';
    notImmediatelyClosable?: boolean;
    abortPromise?: Promise<boolean>;
};

declare global {
    interface GlobalEventHandlersEventMap {
        'sp-overlay-query': CustomEvent<OverlayDisplayQueryDetail>;
        'sp-open': CustomEvent<OverlayOpenCloseDetail>;
        'sp-close': CustomEvent<OverlayOpenCloseDetail>;
    }
}