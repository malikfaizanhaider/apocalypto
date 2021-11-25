/* Copyright 2021 i2c Inc. All rights reserved. */
import { ModifierArguments, Modifier } from '@popperjs/core/lib/types';

const appliedSizeDefaults = new WeakMap();

export const applyMaxSize: Modifier<'applyMaxSize', Record<string, unknown>> = {
    name: 'applyMaxSize',
    enabled: true,
    phase: 'beforeWrite',
    requires: ['maxSize'],
    fn({ state }: ModifierArguments<Record<string, unknown>>): void {
        const { height: maxHeight } = state.modifiersData.maxSize;
        if (!appliedSizeDefaults.has(state.elements.popper)) {
            appliedSizeDefaults.set(
                state.elements.popper,
                state.rects.popper.height
            );
        }
        const actualHeight = appliedSizeDefaults.get(state.elements.popper);
        const constrainHeight = maxHeight < actualHeight;
        const appliedHeight = constrainHeight ? `${maxHeight}px` : '';
        state.styles.popper.maxHeight = appliedHeight;
        state.styles.popper.height = appliedHeight;
    },
};
