import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators';
let I2cLit = class I2cLit extends LitElement {
    constructor() {
        super(...arguments);
        // Define reactive properties--updating a reactive property causes
        // the component to update.
        this.greeting = "Hello";
        this.planet = "World";
    }
    // The render() method is called any time reactive properties change.
    // Return HTML in a string template literal tagged with the `html`
    // tag function to describe the component's internal DOM.
    // Expressions can set attribute values, proeprty values, event handlers,
    // and child nodes/text.
    render() {
        return html `
      <button role='button' @click=${this.togglePlanet}
        >${this.greeting}
        <span class="planet">${this.planet}</span>
      </button>
    `;
    }
    // Event handlers can update the state of @properties on the element
    // instance, causing it to re-render
    togglePlanet() {
        this.planet = this.planet === "World" ? "Mars" : "World";
    }
};
I2cLit.styles = css `
    :host {
      display: inline-block;
      padding: 10px;
      background: lightgray;
    }
    .planet {
      color: var(--planet-color, blue);
    }
  `;
__decorate([
    property()
], I2cLit.prototype, "greeting", void 0);
__decorate([
    property()
], I2cLit.prototype, "planet", void 0);
I2cLit = __decorate([
    customElement('i2c-lit')
], I2cLit);
export { I2cLit };
//# sourceMappingURL=file.js.map