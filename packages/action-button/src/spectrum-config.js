const config = {
    spectrum: 'actionbutton',
    components: [
        {
            name: 'action-button',
            host: {
                selector: '.spectrum-ActionButton',
            },
            attributes: [
                {
                    type: 'boolean',
                    selector: '.spectrum-ActionButton--quiet',
                },
                {
                    type: 'boolean',
                    selector: '.is-disabled',
                    name: 'disabled',
                },
                {
                    type: 'boolean',
                    name: 'selected',
                    selector: '.is-selected',
                },
                {
                    type: 'boolean',
                    selector: ':active',
                    name: 'active',
                },
                {
                    type: 'boolean',
                    selector: '.is-active',
                    name: 'active',
                },
                {
                    type: 'boolean',
                    name: 'emphasized',
                    selector: '.spectrum-ActionButton--emphasized',
                },
                {
                    type: 'enum',
                    name: 'size',
                    values: [
                        {
                            name: 's',
                            selector: '.spectrum-ActionButton--sizeS',
                        },
                        {
                            name: 'm',
                            selector: '.spectrum-ActionButton--sizeM',
                        },
                        {
                            name: 'l',
                            selector: '.spectrum-ActionButton--sizeL',
                        },
                        {
                            name: 'xl',
                            selector: '.spectrum-ActionButton--sizeXL',
                        },
                    ],
                },
            ],
            ids: [
                '.spectrum-ActionButton-label',
                {
                    name: 'hold-affordance',
                    selector: '.spectrum-ActionButton-hold',
                },
            ],
            slots: [
                {
                    name: 'icon',
                    selector: '.spectrum-Icon',
                },
            ],
            complexSelectors: [
                {
                    replacement:
                        ":host([dir]) slot[icon-only]::slotted([slot='icon']), :host([dir]) slot[icon-only] sp-icon",
                    selector:
                        '.spectrum-ActionButton .spectrum-Icon:only-child',
                },
                {
                    replacement:
                        ":host([dir=ltr]) slot:not([icon-only])::slotted([slot='icon']), :host([dir=ltr]) slot:not([icon-only]) sp-icon",
                    selector: /\:host\(\[dir=ltr\]\) \.spectrum-Icon$/,
                },
                {
                    replacement:
                        ":host([dir=rtl]) slot:not([icon-only])::slotted([slot='icon']), :host([dir=rtl]) slot:not([icon-only]) sp-icon",
                    selector: /\:host\(\[dir=rtl\]\) \.spectrum-Icon$/,
                },
            ],
        },
    ],
};

export default config;
