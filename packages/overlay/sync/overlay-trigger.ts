import { OverlayTrigger } from '../src/OverlayTrigger.js';
import { Overlay, OverlayOptions, TriggerInteractions } from '../src/index.js';
import '../overlay-trigger.js';

OverlayTrigger.openOverlay = async (
    target: HTMLElement,
    interaction: TriggerInteractions,
    content: HTMLElement,
    options: OverlayOptions
): Promise<() => void> => {
    return await Overlay.open(target, interaction, content, options);
};
