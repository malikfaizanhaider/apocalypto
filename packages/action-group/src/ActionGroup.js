import { __decorate } from "tslib";
import { html, SpectrumElement, property, } from '../../base/src/index';
import styles from './action-group.css.js';
const EMPTY_SELECTION = [];
/**
 * @element cm-action-group
 */
export class ActionGroup extends SpectrumElement {
    constructor() {
        super(...arguments);
        this.buttons = [];
        this._buttonSelector = 'cm-action-button';
        this.compact = false;
        this.emphasized = false;
        this.justified = false;
        this.label = '';
        this.quiet = false;
        this.vertical = false;
        this._selected = EMPTY_SELECTION;
        this.handleFocusin = () => {
            this.addEventListener('focusout', this.handleFocusout);
            this.addEventListener('keydown', this.handleKeydown);
        };
        this.handleKeydown = (event) => {
            const { code } = event;
            if (![
                'ArrowUp',
                'ArrowLeft',
                'ArrowRight',
                'ArrowDown',
                'End',
                'Home',
                'PageUp',
                'PageDown',
            ].includes(code)) {
                return;
            }
            const activeElement = this.getRootNode()
                .activeElement;
            /* c8 ignore next 3 */
            if (!activeElement) {
                return;
            }
            let nextIndex = this.buttons.indexOf(activeElement);
            /* c8 ignore next 3 */
            if (nextIndex === -1) {
                return;
            }
            const circularIndexedElement = (list, index) => list[(list.length + index) % list.length];
            const buttonFromDelta = (delta) => {
                nextIndex += delta;
                while (circularIndexedElement(this.buttons, nextIndex).disabled) {
                    nextIndex += delta;
                }
            };
            switch (code) {
                case 'ArrowUp':
                    buttonFromDelta(-1);
                    break;
                case 'ArrowLeft':
                    buttonFromDelta(this.isLTR ? -1 : 1);
                    break;
                case 'ArrowRight':
                    buttonFromDelta(this.isLTR ? 1 : -1);
                    break;
                case 'ArrowDown':
                    buttonFromDelta(1);
                    break;
                case 'End':
                    nextIndex = this.buttons.length;
                    buttonFromDelta(-1);
                    break;
                case 'Home':
                    nextIndex = -1;
                    buttonFromDelta(1);
                    break;
                case 'PageUp':
                case 'PageDown':
                default:
                    const tagsSiblings = [
                        ...this.getRootNode().querySelectorAll('cm-action-group'),
                    ];
                    if (tagsSiblings.length < 2) {
                        return;
                    }
                    event.preventDefault();
                    const currentIndex = tagsSiblings.indexOf(this);
                    const offset = code === 'PageUp' ? -1 : 1;
                    let nextRadioGroupIndex = currentIndex + offset;
                    let nextRadioGroup = circularIndexedElement(tagsSiblings, nextRadioGroupIndex);
                    while (!nextRadioGroup.buttons.length) {
                        nextRadioGroupIndex += offset;
                        nextRadioGroup = circularIndexedElement(tagsSiblings, nextRadioGroupIndex);
                    }
                    nextRadioGroup.focus();
                    return;
            }
            event.preventDefault();
            const nextRadio = circularIndexedElement(this.buttons, nextIndex);
            activeElement.tabIndex = -1;
            nextRadio.tabIndex = 0;
            nextRadio.focus();
        };
        this.handleFocusout = (event) => {
            const { relatedTarget } = event;
            if (!relatedTarget || !this.contains(relatedTarget)) {
                const firstButtonNonDisabled = this.buttons.find(button => {
                    if (this.selected.length) {
                        return button.selected;
                    }
                    return !button.disabled;
                });
                if (firstButtonNonDisabled) {
                    firstButtonNonDisabled.tabIndex = 0;
                }
            }
            this.removeEventListener('keydown', this.handleKeydown);
            this.removeEventListener('focusout', this.handleFocusout);
        };
    }
    static get styles() {
        return [styles];
    }
    get selected() {
        return this._selected;
    }
    set selected(selected) {
        if (selected === this.selected)
            return;
        const old = this.selected;
        this._selected = selected;
        const applyDefault = this.dispatchEvent(new Event('change', {
            bubbles: true,
            composed: true,
            cancelable: true,
        }));
        if (!applyDefault) {
            this._selected = old;
            this.buttons.map(button => {
                button.selected = this.selected.includes(button.value);
            });
        }
    }
    handleClick(event) {
        const target = event.target;
        if (typeof target.value === 'undefined') {
            return;
        }
        switch (this.selects) {
            case 'single': {
                const selected = [
                    ...this.querySelectorAll('[selected]'),
                ];
                selected.forEach(el => {
                    el.selected = false;
                    el.tabIndex = -1;
                    el.setAttribute('aria-checked', 'false');
                });
                target.selected = true;
                target.tabIndex = 0;
                target.setAttribute('aria-checked', 'true');
                this.selected = [target.value];
                target.focus();
                break;
            }
            case 'multiple': {
                const selected = [...this.selected];
                target.selected = !target.selected;
                target.setAttribute('aria-checked', target.selected ? 'true' : 'false');
                if (target.selected) {
                    selected.push(target.value);
                }
                else {
                    selected.splice(this.selected.indexOf(target.value), 1);
                }
                this.selected = selected;
                break;
            }
            default:
                this.selected = EMPTY_SELECTION;
                break;
        }
    }
    async manageSelects() {
        if (!this.buttons.length) {
            return;
        }
        switch (this.selects) {
            case 'single': {
                this.setAttribute('role', 'radiogroup');
                let selection;
                let firstEnabled;
                const options = this.buttons;
                const updates = options.map(async (option) => {
                    await option.updateComplete;
                    option.setAttribute('role', 'radio');
                    option.setAttribute('aria-checked', option.selected ? 'true' : 'false');
                    option.tabIndex = option.selected ? 0 : -1;
                    if (option.selected) {
                        selection = option;
                    }
                    if (!firstEnabled && !option.disabled) {
                        firstEnabled = option;
                    }
                });
                await Promise.all(updates);
                if (selection || firstEnabled) {
                    (selection || firstEnabled).tabIndex = 0;
                }
                this.selected = selection ? [selection.value] : EMPTY_SELECTION;
                break;
            }
            case 'multiple': {
                this.setAttribute('role', 'group');
                const selection = [];
                const options = this.buttons;
                const updates = options.map(async (option) => {
                    await option.updateComplete;
                    option.setAttribute('role', 'checkbox');
                    option.setAttribute('aria-checked', option.selected ? 'true' : 'false');
                    option.tabIndex = 0;
                    if (option.selected) {
                        selection.push(option.value);
                    }
                });
                await Promise.all(updates);
                this.selected = !!selection.length
                    ? selection
                    : EMPTY_SELECTION;
                break;
            }
            default:
                this.buttons.forEach(option => {
                    option.setAttribute('role', 'button');
                    option.tabIndex = 0;
                });
                this.removeAttribute('role');
                this.selected = EMPTY_SELECTION;
                break;
        }
    }
    render() {
        return html ` <slot role="presentation"></slot> `;
    }
    firstUpdated(changes) {
        super.firstUpdated(changes);
        this.addEventListener('click', this.handleClick);
        this.addEventListener('focusin', this.handleFocusin);
    }
    updated(changes) {
        super.updated(changes);
        if (changes.has('selects')) {
            this.manageSelects();
        }
        if ((changes.has('quiet') && this.quiet) ||
            (changes.has('emphasized') && this.emphasized)) {
            this.manageChildren();
        }
        // Update `aria-label` when `label` available or not first `updated`
        if (changes.has('label') &&
            (this.label || typeof changes.get('label') !== 'undefined')) {
            if (this.label.length) {
                this.setAttribute('aria-label', this.label);
            }
            else {
                this.removeAttribute('aria-label');
            }
        }
    }
    manageChildren() {
        this.buttons.forEach(button => {
            button.quiet = this.quiet;
            button.emphasized = this.emphasized;
        });
    }
    connectedCallback() {
        super.connectedCallback();
        if (!this.observer) {
            const findButtons = () => {
                const buttons = [
                    ...this.querySelectorAll(this._buttonSelector),
                ];
                buttons.filter(button => {
                    const buttonParent = button.parentElement;
                    return !(buttonParent === null || buttonParent === void 0 ? void 0 : buttonParent.closest(this._buttonSelector));
                });
                this.buttons = buttons;
                this.manageChildren();
                this.manageSelects();
            };
            this.observer = new MutationObserver(findButtons);
            findButtons();
        }
        this.observer.observe(this, { childList: true, subtree: true });
    }
    disconnectedCallback() {
        this.observer.disconnect();
        super.disconnectedCallback();
    }
}
__decorate([
    property({ type: Boolean, reflect: true })
], ActionGroup.prototype, "compact", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], ActionGroup.prototype, "emphasized", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], ActionGroup.prototype, "justified", void 0);
__decorate([
    property({ type: String })
], ActionGroup.prototype, "label", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], ActionGroup.prototype, "quiet", void 0);
__decorate([
    property({ type: String })
], ActionGroup.prototype, "selects", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], ActionGroup.prototype, "vertical", void 0);
__decorate([
    property({ type: Array })
], ActionGroup.prototype, "selected", null);
//# sourceMappingURL=ActionGroup.js.map