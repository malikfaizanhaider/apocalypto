/* Copyright 2021 i2c Inc. All rights reserved. */
function restoreChildren(placeholderItems, srcElements, cleanupCallbacks = []) {
    for (let index = 0; index < srcElements.length; ++index) {
        const srcElement = srcElements[index];
        const placeholderItem = placeholderItems[index];
        const parentElement = placeholderItem.parentElement || placeholderItem.getRootNode();
        if (cleanupCallbacks[index]) {
            cleanupCallbacks[index](srcElement);
        }
        parentElement.replaceChild(srcElement, placeholderItem);
        delete placeholderItems[index];
    }
    return srcElements;
}
export const reparentChildren = (srcElements, newParent, prepareCallback) => {
    const placeholderItems = [];
    const cleanupCallbacks = [];
    for (let index = 0; index < srcElements.length; ++index) {
        const placeholderItem = document.createComment('placeholder for reparented element');
        placeholderItems.push(placeholderItem);
        const srcElement = srcElements[index];
        if (prepareCallback) {
            cleanupCallbacks.push(prepareCallback(srcElement) ||
                (() => {
                    return;
                }));
        }
        const parentElement = srcElement.parentElement || srcElement.getRootNode();
        parentElement.replaceChild(placeholderItem, srcElement);
        newParent.append(srcElement);
    }
    return function () {
        return restoreChildren(placeholderItems, srcElements, cleanupCallbacks);
    };
};
//# sourceMappingURL=reparent-children.js.map