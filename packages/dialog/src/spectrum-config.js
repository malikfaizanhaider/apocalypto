/* Copyright 2021 i2c Inc. All rights reserved. */

const config = {
    spectrum: 'dialog',
    components: [
        {
            name: 'dialog',
            host: {
                selector: '.spectrum-Dialog',
            },
            attributes: [
                {
                    type: 'boolean',
                    selector: '.is-open',
                    name: 'open',
                },
                {
                    type: 'boolean',
                    selector: '.spectrum-Dialog--error',
                    name: 'error',
                },
                {
                    type: 'boolean',
                    selector: '.spectrum-Dialog--dismissable',
                    name: 'dismissable',
                },
                {
                    type: 'boolean',
                    selector: '.spectrum-Dialog--noDivider',
                    name: 'no-divider',
                },
                {
                    type: 'enum',
                    name: 'size',
                    values: [
                        '.spectrum-Dialog--small',
                        '.spectrum-Dialog--medium',
                        '.spectrum-Dialog--large',
                        '.spectrum-Dialog--alert',
                    ],
                },
                {
                    type: 'enum',
                    name: 'mode',
                    values: [
                        '.spectrum-Dialog--fullscreen',
                        '.spectrum-Dialog--fullscreenTakeover',
                    ],
                },
            ],
            slots: [
                {
                    selector: '.spectrum-Dialog-heading',
                    name: 'heading',
                },
                {
                    selector: '.spectrum-Dialog-hero',
                    name: 'hero',
                },
                {
                    selector: '*',
                    name: '',
                },
            ],
            classes: [
                {
                    selector: '.spectrum-Dialog-grid',
                    name: 'grid',
                },
                {
                    selector: '.spectrum-Dialog-divider',
                    name: 'divider',
                },
                {
                    selector: '.spectrum-Dialog-content',
                    name: 'content',
                },
                {
                    selector: '.spectrum-Dialog-closeButton',
                    name: 'close-button',
                },
                {
                    selector: '.spectrum-Dialog-header',
                    name: 'header',
                },
                {
                    selector: '.spectrum-Dialog-footer',
                    name: 'footer',
                },
                {
                    selector: '.spectrum-Dialog-typeIcon',
                    name: 'type-icon',
                },
                {
                    selector: '.spectrum-Button',
                    name: 'button',
                },
                {
                    selector: '.spectrum-Dialog-buttonGroup',
                    name: 'buttonGroup',
                },
                {
                    selector: '.spectrum-Dialog-buttonGroup--noFooter',
                    name: 'buttonGroup--noFooter',
                },
            ],
            complexSelectors: [
                {
                    replacement: '.no-header::slotted([slot="heading"])',
                    selector:
                        '.spectrum-Dialog-heading.spectrum-Dialog-heading--noHeader',
                },
            ],
            exclude: [/\.spectrum-Dialog-wrapper/],
        },
    ],
};

export default config;
