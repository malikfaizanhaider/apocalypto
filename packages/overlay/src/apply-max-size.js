const appliedSizeDefaults = new WeakMap();
export const applyMaxSize = {
    name: 'applyMaxSize',
    enabled: true,
    phase: 'beforeWrite',
    requires: ['maxSize'],
    fn({ state }) {
        const { height: maxHeight } = state.modifiersData.maxSize;
        if (!appliedSizeDefaults.has(state.elements.popper)) {
            appliedSizeDefaults.set(state.elements.popper, state.rects.popper.height);
        }
        const actualHeight = appliedSizeDefaults.get(state.elements.popper);
        const constrainHeight = maxHeight < actualHeight;
        const appliedHeight = constrainHeight ? `${maxHeight}px` : '';
        state.styles.popper.maxHeight = appliedHeight;
        state.styles.popper.height = appliedHeight;
    },
};
//# sourceMappingURL=apply-max-size.js.map