const config = {
    spectrum: 'progresscircle',
    components: [
        {
            name: 'progress-circle',
            host: {
                selector: '.spectrum-ProgressCircle',
            },
            attributes: [
                {
                    type: 'boolean',
                    selector: '.spectrum-ProgressCircle--indeterminate',
                    name: 'indeterminate',
                },
                {
                    type: 'enum',
                    name: 'size',
                    values: [
                        '.spectrum-ProgressCircle--small',
                        '.spectrum-ProgressCircle--large',
                    ],
                },
                {
                    type: 'boolean',
                    name: 'over-background',
                    selector: '.spectrum-ProgressCircle--overBackground',
                },
            ],
            classes: [
                {
                    selector: '.spectrum-ProgressCircle-track',
                    name: 'track',
                },
                {
                    selector: '.spectrum-ProgressCircle-fills',
                    name: 'fills',
                },
                {
                    selector: '.spectrum-ProgressCircle-fill',
                    name: 'fill',
                },
                {
                    selector: '.spectrum-ProgressCircle-fillMask1',
                    name: 'fillMask1',
                },
                {
                    selector: '.spectrum-ProgressCircle-fillMask2',
                    name: 'fillMask2',
                },
                {
                    selector: '.spectrum-ProgressCircle-fillSubMask1',
                    name: 'fillSubMask1',
                },
                {
                    selector: '.spectrum-ProgressCircle-fillSubMask2',
                    name: 'fillSubMask2',
                },
                {
                    selector:
                        '.spectrum-ProgressCircle--indeterminate-fill-submask-2',
                    name: 'fill-submask-2',
                },
            ],
        },
    ],
};

export default config;
