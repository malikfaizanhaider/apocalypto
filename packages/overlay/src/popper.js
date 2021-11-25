import arrow from '@popperjs/core/dist/esm/modifiers/arrow.js';
import flip from '@popperjs/core/dist/esm/modifiers/flip.js';
import offset from '@popperjs/core/dist/esm/modifiers/offset.js';
import preventOverflow from '@popperjs/core/dist/esm/modifiers/preventOverflow.js';
import { defaultModifiers, popperGenerator, } from '@popperjs/core/dist/esm/popper-lite.js';
import maxSize from 'popper-max-size-modifier';
import { applyMaxSize } from './apply-max-size.js';
export const createPopper = popperGenerator({
    defaultModifiers: [
        ...defaultModifiers,
        flip,
        preventOverflow,
        arrow,
        offset,
    ],
});
export { maxSize, applyMaxSize };
//# sourceMappingURL=popper.js.map