import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { cyanFieldComponentStyles } from '../../styles/cyan-component-style'

@customElement('cyan-textfield')
export class CyanTextfield extends LitElement {

  static styles = css`
    ${cyanFieldComponentStyles}
    :host .cyan-field-input {
      position: absolute;
      top: 0;
      left: 0;
      background: none;
      border: none;
      height: 28px;
      margin: 0;
      padding: 0 8px;
      padding-top: 12px;
      width: calc(100% - 16px);
    }
  `
  @property({ type: String })
    label = ''

  @property({ type: String })
    value = ''

  @property({ type: String })
    placeholder = ''

  render () {
    return html`
      <label class="cyan-textfield">
        <input type="text" class="cyan-field-input" value="${this.value}" placeholder="${this.placeholder}"/>
        ${ this.label ? html`<span class="cyan-field-label">${this.hasAttribute('error') ? this.getAttribute('error') : this.label}</span>` : '' }
      </label>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-textfield': CyanTextfield
  }
}
