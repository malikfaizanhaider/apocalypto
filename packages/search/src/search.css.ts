import { css } from '../../base/src/index';

const styles = css`
    :host {
        --cm-search-quiet-button-offset: calc(
            var(
                    --cm-actionbutton-m-min-width,
                    var(--cm-global-dimension-size-400)
                ) / 2 -
                var(
                    --cm-icon-cross-small-width,
                    var(--cm-global-dimension-size-100)
                ) / 2
        );
        display: inline-block;
        position: relative;
    }

    :host([dir='ltr']) #button {
        right: 0;
    }

    :host([dir='rtl']) #button {
        left: 0;
    }

    :host > .icon.search {
        font-size: var(--i2c-icon-size-xs);
        position: relative !important;
        width: var(--i2c-icon-size-xs);
        height: var(--i2c-icon-size-xs);
        color: red;
    }

    #button {
        position: absolute;
        top: 0;
    }

    #input {
        -webkit-appearance: none;
        outline-offset: -2px;
    }

    #input::-webkit-search-cancel-button,
    #input::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    .spectrum-Search--quiet #button {
        transform: translateX(var(--cm-search-quiet-button-offset));
    }

    .icon.search {
        color: var(--cm-global-color-gray-1500);
    }

    #input:hover ~ .icon {
        color: var(
            --cm-search-m-icon-color-hover,
            var(--cm-global-color-gray-1500)
        );
    }

    #input:active ~ .icon {
        color: var(
            --cm-search-m-icon-color-down,
            var(--cm-global-color-gray-1500)
        );
    }

    #input.focus-visible ~ .icon,
    #input.focus-visible ~ .icon {
        color: var(
            --cm-search-m-icon-color-key-focus,
            var(--cm-global-color-gray-1500)
        );
    }

    #input.focus-visible ~ .icon,
    #input:focus-visible ~ .icon {
        color: var(
            --cm-search-m-icon-color-key-focus,
            var(--cm-global-color-gray-1500)
        );
    }

    #input:disabled ~ .icon {
        color: var(
            --cm-textfield-m-text-color-disabled,
            var(--cm-alias-text-color-disabled)
        );
    }
`;
export default styles;
