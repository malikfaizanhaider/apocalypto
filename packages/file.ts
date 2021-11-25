import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators';

@customElement('i2c-lit')
export class I2cLit extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      padding: 10px;
      background: lightgray;
    }
    .planet {
      color: var(--planet-color, blue);
    }
  `;


  // Define reactive properties--updating a reactive property causes
  // the component to update.
  @property() greeting = "Hello";
  @property() planet = "World";

  // The render() method is called any time reactive properties change.
  // Return HTML in a string template literal tagged with the `html`
  // tag function to describe the component's internal DOM.
  // Expressions can set attribute values, proeprty values, event handlers,
  // and child nodes/text.
  render() {
    return html`
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

}
