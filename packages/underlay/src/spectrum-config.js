/* Copyright 2021 i2c Inc. All rights reserved. */

const config = {
    spectrum: 'underlay',
    components: [
        {
            name: 'underlay',
            host: {
                selector: '.spectrum-Underlay',
            },
            attributes: [
                {
                    type: 'boolean',
                    selector: '.is-open',
                    name: 'open',
                },
            ],
        },
    ],
};

export default config;
