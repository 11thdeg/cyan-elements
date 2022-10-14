import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { CyanThemedElement } from "../../cyan-themed-element";
import { cyanUIComponentStyles } from "../../styles/cyan-component-style";

@customElement('cyan-nav-button')
export class CyanNavButton extends CyanThemedElement {
  static styles = css`
    ${cyanUIComponentStyles}
    :host {
      display: flex;
      align-items: center;  
      gap: 8px;
      height: 48px;
      padding-left: 8px;
      border-radius: 0 16px 16px 0;
      transition: all 0.3s ease;
      color: var(--cyan-ui-color)
    }
    :host([compact]) {
      height: 32px;
      border-radius: 0 12px 12px 0;
    }
    :host(:hover) {
        color: var(--cyan-ui-color-hover);
      background-color: var(--cyan-nav-button-hover-background-color);
    }
    :host(:active) {
      color: var(--cyan-ui-color-active);
      background-color: var(--cyan-nav-button-active-background-color);
    }
    :host div.oneLiner {
      pointer-events: none;
    }`


  @property ({ type: Boolean, reflect: true })
    compact = false
  @property({ type: String, reflect: true })
    noun = ''

  render () {
    return html`${this.noun ? html`<cyan-icon small noun="${this.noun}"></cyan-icon>` : html``}
      <div class="oneLiner"><slot></slot></div>`
  }
}
declare global {
    interface HTMLElementTagNameMap {
      'cyan-nav-button': CyanNavButton
    }
  }