/* Copyright 2021 i2c Inc. All rights reserved. */
export const openOverlay = async (target, interaction, content, options) => {
    const { Overlay } = await import('./overlay.js');
    return await Overlay.open(target, interaction, content, options);
};
//# sourceMappingURL=loader.js.map