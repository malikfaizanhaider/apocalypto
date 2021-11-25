/* Copyright 2021 i2c Inc. All rights reserved. */
import { css } from '../../base/src/index';
const styles = css `
    #trigger {
        display: contents
    }

    :host([disabled]) #trigger {
        pointer-events: none
    }

    #overlay-content {
        display: none
    }
`;
export default styles;
//# sourceMappingURL=overlay-trigger.css.js.map