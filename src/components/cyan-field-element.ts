import { CyanThemedElement } from "../cyan-themed-element"

export class CyanFieldElement extends CyanThemedElement {
  connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute("role", "input")
    this.onfocus = () => this.dispatchEvent(new Event("cyan-field-focus", { bubbles: true }));
    this.onblur = () => this.dispatchEvent(new Event("cyan-field-blur", { bubbles: true }));
  }
}