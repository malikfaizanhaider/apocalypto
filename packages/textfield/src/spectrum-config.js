const config = {
    spectrum: 'textfield',
    components: [
        {
            name: 'textfield',
            host: {
                selector: '.spectrum-Textfield',
            },
            classes: [
                {
                    selector: '.spectrum-Textfield-input',
                    name: 'input',
                },
                {
                    selector: '.spectrum-Textfield-validationIcon',
                    name: 'icon',
                },
                {
                    selector: '.spectrum-Textfield-icon',
                    name: 'icon-workflow',
                },
            ],
            attributes: [
                {
                    type: 'boolean',
                    selector: '.spectrum-Textfield--multiline',
                    name: 'multiline',
                },
                {
                    type: 'boolean',
                    selector: '.spectrum-Textfield--quiet',
                    name: 'quiet',
                },
                {
                    type: 'boolean',
                    selector: '.is-focused',
                    name: 'focused',
                },
                {
                    type: 'boolean',
                    selector: '.is-keyboardFocused',
                    name: 'focused',
                },
                {
                    type: 'boolean',
                    selector: '.is-valid',
                    name: 'valid',
                },
                {
                    type: 'boolean',
                    selector: '.is-invalid',
                    name: 'invalid',
                },
                {
                    type: 'boolean',
                    selector: '.spectrum-Textfield--quiet',
                    name: 'quiet',
                },
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
