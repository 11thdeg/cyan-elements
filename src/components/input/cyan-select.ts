import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { cyanFieldComponentStyles } from '../../styles/cyan-component-style'

@customElement('cyan-select')
export class CyanSelect extends LitElement {
  
  static styles = css`
    ${cyanFieldComponentStyles}
    select {
      width: calc(100% - 8px);
      margin:0;
      margin-right: 8px;
      height: 100%;
      background: none;
      border: none;
      color: var(--chroma-ui-color);
      font-size: var(--chroma-ui-font-size);
      box-sizing: border-box;
      padding: 0 4px;
      padding-top: 10px;
    }
    select:focus {
        outline: none;
    }
  `

  @property({type: String})
    label = ''

  @property({type: String, reflect: true})
    value = ''

  @property({type: Array})
    options = new Array<Record<string, string>>()

  _handleChange (e: Event) {
    this.value = (e.target as HTMLSelectElement).value
    this.dispatchEvent(new Event('change', {bubbles: true, composed: true}))
  }

  render () {
    return html`
      <label>
      <select
        @change=${this._handleChange}
        value="${this.value}">
        ${this.options.map((option) => {
    return html`
                <option
                ?selected=${option.value === this.value}
                value="${option.value}">
                ${option.label}
                </option>
            `})}
      </select>
      ${ this.label ? html`<span class="cyan-field-label">${this.hasAttribute('error') ? this.getAttribute('error') : this.label}</span>` : '' }
      </label>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-select': CyanSelect
  }
}
  