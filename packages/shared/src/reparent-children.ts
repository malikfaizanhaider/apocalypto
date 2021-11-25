/* Copyright 2021 i2c Inc. All rights reserved. */
function restoreChildren<T extends Element>(
    placeholderItems: Comment[],
    srcElements: T[],
    cleanupCallbacks: ((el: T) => void)[] = []
): T[] {
    for (let index = 0; index < srcElements.length; ++index) {
        const srcElement = srcElements[index];
        const placeholderItem = placeholderItems[index];
        const parentElement =
            placeholderItem.parentElement || placeholderItem.getRootNode();
        if (cleanupCallbacks[index]) {
            cleanupCallbacks[index](srcElement);
        }
        parentElement.replaceChild(srcElement, placeholderItem);
        delete placeholderItems[index];
    }
    return srcElements;
}

export const reparentChildren = <T extends Element>(
    srcElements: T[],
    newParent: Element,
    prepareCallback?: (el: T) => ((el: T) => void) | void
): (() => Element[]) => {
    const placeholderItems: Comment[] = [];
    const cleanupCallbacks: ((el: T) => void)[] = [];

    for (let index = 0; index < srcElements.length; ++index) {
        const placeholderItem: Comment = document.createComment(
            'placeholder for reparented element'
        );
        placeholderItems.push(placeholderItem);

        const srcElement = srcElements[index];
        if (prepareCallback) {
            cleanupCallbacks.push(
                prepareCallback(srcElement) ||
                    (() => {
                        return;
                    })
            );
        }
        const parentElement =
            srcElement.parentElement || srcElement.getRootNode();
        parentElement.replaceChild(placeholderItem, srcElement);
        newParent.append(srcElement);
    }

    return function (): Element[] {
        return restoreChildren<T>(
            placeholderItems,
            srcElements,
            cleanupCallbacks
        );
    };
};
