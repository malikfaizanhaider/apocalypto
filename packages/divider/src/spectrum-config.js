/* Copyright 2021 i2c Inc. All rights reserved. */

const config = {
    spectrum: 'divider',
    components: [
        {
            name: 'divider',
            host: {
                selector: '.spectrum-Divider',
            },
            attributes: [
                {
                    selector: '.spectrum-Divider--vertical',
                    type: 'boolean',
                    name: 'vertical',
                },
                {
                    type: 'enum',
                    name: 'size',
                    forceOntoHost: true,
                    values: [
                        {
                            name: 's',
                            selector: '.spectrum-Divider--sizeS',
                        },
                        {
                            name: 'm',
                            selector: '.spectrum-Divider--sizeM',
                        },
                        {
                            name: 'l',
                            selector: '.spectrum-Divider--sizeL',
                        },
                    ],
                },
            ],
        },
    ],
};

export default config;
