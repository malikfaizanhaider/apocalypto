/* Copyright 2021 i2c Inc. All rights reserved. */

const config = {
    spectrum: 'modal',
    components: [
        {
            name: 'modal-wrapper',
            host: {
                selector: '.spectrum-Modal-wrapper',
            },
            attributes: [
                {
                    type: 'boolean',
                    selector: '.is-open',
                    name: 'open',
                },
                {
                    type: 'boolean',
                    selector: '.spectrum-Modal--responsive',
                    name: 'responsive',
                },
            ],
        },
        {
            name: 'modal',
            host: {
                selector: '.spectrum-Modal',
                shadowSelector: '.modal',
            },
            attributes: [
                {
                    type: 'boolean',
                    selector: '.is-open',
                    name: 'open',
                },
                {
                    type: 'boolean',
                    selector: '.spectrum-Modal--responsive',
                    name: 'responsive',
                },
            ],
            classes: [
                {
                    selector: '.spectrum-Modal',
                    name: 'dialog',
                },
                {
                    name: 'fullscreen',
                    selector: '.spectrum-Modal--fullscreen',
                },
                {
                    name: 'fullscreenTakeover',
                    selector: '.spectrum-Modal--fullscreenTakeover',
                },
            ],
            exclude: [/\.spectrum-Modal-wrapper/],
        },
    ],
};

export default config;
