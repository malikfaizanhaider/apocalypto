const config = {
    spectrum: 'buttongroup',
    components: [
        {
            name: 'button-group',
            host: {
                selector: '.spectrum-ButtonGroup',
            },
            attributes: [
                {
                    type: 'boolean',
                    selector: '.spectrum-ButtonGroup--vertical',
                    name: 'vertical',
                },
            ],
            slots: [
                {
                    contents: '',
                    selector: '.spectrum-ButtonGroup-item',
                },
            ],
            complexSelectors: [
                {
                    replacement: '::slotted(*:not(:first-of-type))',
                    selector:
                        '.spectrum-ButtonGroup-item+.spectrum-ButtonGroup-item',
                },
            ],
            exclude: [/\.spectrum-ActionButton-label/],
        },
    ],
};

export default config;
