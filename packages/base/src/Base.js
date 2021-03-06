import { __decorate } from "tslib";
import { LitElement, property } from 'lit-element';
const observedForElements = new Set();
const updateRTL = () => {
    const dir = document.documentElement.dir === 'rtl'
        ? document.documentElement.dir
        : 'ltr';
    observedForElements.forEach((el) => {
        el.setAttribute('dir', dir);
    });
};
const rtlObserver = new MutationObserver(updateRTL);
rtlObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['dir']
});
const canManageContentDirection = (el) => typeof el.startManagingContentDirection !== 'undefined' ||
    el.tagName === 'CM-THEME';
export function SpectrumMixin(constructor) {
    class SlotTextObservingElement extends constructor {
        constructor() {
            super(...arguments);
            /**
             * @private
             */
            this.dir = 'ltr';
        }
        /**
         * @private
         */
        get isLTR() {
            return this.dir === 'ltr';
        }
        connectedCallback() {
            if (!this.hasAttribute('dir')) {
                let dirParent = (this.assignedSlot ||
                    this.parentNode);
                while (dirParent !== document.documentElement &&
                    !canManageContentDirection(dirParent)) {
                    dirParent = (dirParent.assignedSlot || // step into the shadow DOM of the parent of a slotted node
                        dirParent.parentNode || // DOM Element detected
                        dirParent
                            .host);
                }
                this.dir =
                    dirParent.dir === 'rtl' ? dirParent.dir : this.dir || 'ltr';
                if (dirParent === document.documentElement) {
                    observedForElements.add(this);
                }
                else {
                    const { localName } = dirParent;
                    if (localName.search('-') > -1 &&
                        !customElements.get(localName)) {
                        customElements.whenDefined(localName).then(() => {
                            dirParent.startManagingContentDirection(this);
                        });
                    }
                    else {
                        dirParent.startManagingContentDirection(this);
                    }
                }
                this._dirParent = dirParent;
            }
            super.connectedCallback();
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            if (this._dirParent) {
                if (this._dirParent === document.documentElement) {
                    observedForElements.delete(this);
                }
                else {
                    this._dirParent.stopManagingContentDirection(this);
                }
                this.removeAttribute('dir');
            }
        }
    }
    __decorate([
        property({ reflect: true })
    ], SlotTextObservingElement.prototype, "dir", void 0);
    return SlotTextObservingElement;
}
export class SpectrumElement extends SpectrumMixin(LitElement) {
}
//# sourceMappingURL=Base.js.map