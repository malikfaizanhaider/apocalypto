const config = {
    spectrum: 'search',
    components: [
        {
            name: 'search',
            host: {
                selector: '.spectrum-Search',
            },
            focus: '#input',
            attributes: [
                {
                    type: 'boolean',
                    selector: '.spectrum-Textfield--quiet',
                    name: 'quiet',
                },
            ],
            ids: [
                {
                    selector: '.spectrum-Search-input',
                    name: 'input',
                },
                {
                    selector: '.spectrum-Search-clearButton',
                    name: 'button',
                },
            ],
            classes: [
                {
                    selector: '.spectrum-Icon',
                    name: 'icon',
                },
                {
                    selector: '.spectrum-Search-icon',
                    name: 'icon',
                },
            ],
        },
    ],
};

export default config;
