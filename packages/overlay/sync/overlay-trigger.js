import { OverlayTrigger } from '../src/OverlayTrigger.js';
import { Overlay } from '../src/index.js';
import '../overlay-trigger.js';
OverlayTrigger.openOverlay = async (target, interaction, content, options) => {
    return await Overlay.open(target, interaction, content, options);
};
//# sourceMappingURL=overlay-trigger.js.map