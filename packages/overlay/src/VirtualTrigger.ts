import type { VirtualElement } from './popper.js';
import { Overlay } from './overlay.js';

export class VirtualTrigger implements VirtualElement {
    private x = 0;
    private y = 0;

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public updateBoundingClientRect(x: number, y: number): void {
        this.x = x;
        this.y = y;
        Overlay.update();
    }

    public getBoundingClientRect(): DOMRect {
        return {
            width: 0,
            height: 0,
            top: this.y,
            right: this.x,
            y: this.y,
            x: this.x,
            bottom: this.y,
            left: this.x,
            toJSON() {
                return;
            },
        };
    }
}
