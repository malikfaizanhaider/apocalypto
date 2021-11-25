const config = {
    spectrum: 'fieldlabel',
    components: [
        {
            name: 'field-label',
            host: {
                selector: '.spectrum-FieldLabel',
            },
            attributes: [
                {
                    type: 'boolean',
                    selector: '.is-disabled',
                    name: 'disabled',
                },
                {
                    type: 'enum',
                    name: 'side-aligned',
                    values: [
                        {
                            name: 'start',
                            selector: '.spectrum-FieldLabel--left',
                        },
                        {
                            name: 'end',
                            selector: '.spectrum-FieldLabel--right',
                        },
                    ],
                },
                {
                    type: 'enum',
                    name: 'size',
                    forceOntoHost: true,
                    values: [
                        {
                            name: 's',
                            selector: '.spectrum-FieldLabel--sizeS',
                        },
                        {
                            name: 'm',
                            selector: '.spectrum-FieldLabel--sizeM',
                        },
                        {
                            name: 'l',
                            selector: '.spectrum-FieldLabel--sizeL',
                        },
                        {
                            name: 'xl',
                            selector: '.spectrum-FieldLabel--sizeXL',
                        },
                    ],
                },
            ],
            classes: [
                {
                    selector: '.spectrum-FieldLabel-requiredIcon',
                    name: 'requiredIcon',
                },
            ],
        },
    ],
};

export default config;
