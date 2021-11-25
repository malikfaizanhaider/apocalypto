/* Copyright 2021 i2c Inc. All rights reserved. */

const config = {
    spectrum: 'avatar',
    components: [
        {
            name: 'avatar',
            host: {
                selector: '.spectrum-Avatar',
            },
            attributes: [
                {
                    type: 'boolean',
                    selector: '.is-disabled',
                    name: 'disabled',
                },
            ],
        },
    ],
};

export default config;
