/* Copyright 2021 i2c Inc. All rights reserved. */

export const getActiveElement = (el: Node): Element | null => {
    return (el.getRootNode() as Document).activeElement;
};
