import { html, css } from 'lit'
import { customElement, property } from "lit/decorators.js"
import { CyanFieldElement } from "../cyan-field-element"

@customElement('cyan-textfield')
export class CyanTextfield extends CyanFieldElement {
  static styles = css`
    :host {
      display: block;
      position: relative;
      margin: 0;
      padding: 0;
      background: var(--cn-background-field, #ccc);
      height: 35px;
      border-bottom: 1px solid var(--cn-border-color, #ddd);
      transition: all 0.3s ease;
      border-radius: 0 12px 0 0;
    }
    :host(:hover) {
      background: var(--cn-background-field-hover, red);
      border-bottom: 1px solid var(--cyan-border-color-field-hover, blue);
    }
    :host(:focus-within) {
      background: var(--cyan-background-field-active, red);
      border-bottom: 1px solid var(--cyan-border-color-field-active, blue);
    }
    :host([error]) {
      background: var(--cn-background-field-error, red);
      border-bottom: 1px solid var(--cyan-border-color-field-error, blue);
    }
    :host([error]) .cyan-field-label {
      color: var(--cyan-border-color-field-error, red);
    }
    :host([disabled]) {
      opacity: 0.5;
    }
    :host input {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0 8px;
      padding-top: 11px;
      border: none;
      background: none;
      line-height: 24px;
      font-family: var(--cyan-font-family-field, sans-serif);
      font-size: var(--cyan-font-size-field, 14px);
      color: var(--cyan-color-field, black);
    }
    :host input:focus {
      outline: none;
    }
    :host input::placeholder {
      color: var(--cn-color-placeholder, gray);
      font-style: italic;
    }
    :host .cyan-field-label {
      position: absolute;
      top: 0;
      left: 0;
      padding: 0px 8px;
      font-family: var(--cyan-font-family-ui, sans-serif);
      font-size: var(--cyan-font-size-caption, 11px);
      color: var(--cyan-border-color-field, blue);
    }`

  @property({ type: String, reflect: true })
    label = ''
  
  @property({ type: String, reflect: true })
    value = ''

  @property({ type: String, reflect: true })
    placeholder = ''

  @property({ type: Boolean, reflect: true })
    error = false

  @property({ type: Boolean, reflect: true })
    disabled = false

  /**
   * Bubbles up the change event
   * 
   * @param e HTMLInputElement.change event
   */
  onChange (e:Event) {
    this.value = (e.target as HTMLInputElement).value
    this.dispatchEvent(new Event('change'))
  }
  
  /**
   * Bubbles up the blur event
   * 
   * @param e HTMLInputElement.blur event
   */
  onBlur (e:Event) {
    this.value = (e.target as HTMLInputElement).value
    this.dispatchEvent(new Event('blur'))
  }

  render () {
    return html`
      <label>
        <input type="text"
          value="${this.value}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}" 
          @input="${this.onChange}"
          @change="${this.onChange}"
          @blur="${this.onBlur}"/>
        <span class="cyan-field-label">${this.label}</span>
      </label>`
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cyan-textfield': CyanTextfield
  }
}