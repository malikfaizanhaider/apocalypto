import {
    html,
    SpectrumElement,
    property,
    CSSResultArray,
    TemplateResult,
    ifDefined,
} from '../../base/src/index';

import avatarStyles from './avatar.css.js';

/**
 * Avatar component
 */
export class Avatar extends SpectrumElement {
    public static get styles(): CSSResultArray {
        return [avatarStyles];
    }

    @property()
    public label = '';

    @property()
    public title = '';

    @property()
    public subtitle = '';

    @property()
    public src = '';

    protected render(): TemplateResult {
        return html`
            <div>
                <img
                    alt=${ifDefined(this.label || undefined)}
                    src=${this.src}
                />
            </div>
            <div>
                ${this.title ? html`<div>something</div>` : html``}
                ${this.subtitle ? html`<div>something</div>` : html``}
            </div>
        `;
    }
}
