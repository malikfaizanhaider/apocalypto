/* Copyright 2021 i2c Inc. All rights reserved. */
import { css } from '../../base/src/index';

const styles = css`
    :host {
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
        height: -webkit-fill-available;
        height: fill-available;
        visibility: hidden;
        pointer-events: none;
        z-index: 2;
        transition: visibility 0ms linear var(--cm-global-animation-duration-100, .13s)
    }

    :host([open]) {
        visibility: visible
    }

    @media only screen and (max-device-height: 350px), only screen and (max-device-width: 400px) {
        :host([responsive]) {
            width: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 100%;
            border-radius: 0;
            margin-top: 0
        }
    }
`;
export default styles;