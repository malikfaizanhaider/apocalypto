/* Copyright 2021 i2c Inc. All rights reserved. */

import { TriggerInteractions, OverlayOptions } from './overlay-types';

export const openOverlay = async (
    target: HTMLElement,
    interaction: TriggerInteractions,
    content: HTMLElement,
    options: OverlayOptions
): Promise<() => void> => {
    const { Overlay } = await import('./overlay.js');
    return await Overlay.open(target, interaction, content, options);
};
