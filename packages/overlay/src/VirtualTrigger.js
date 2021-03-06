import { Overlay } from './overlay.js';
export class VirtualTrigger {
    constructor(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    updateBoundingClientRect(x, y) {
        this.x = x;
        this.y = y;
        Overlay.update();
    }
    getBoundingClientRect() {
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
//# sourceMappingURL=VirtualTrigger.js.map