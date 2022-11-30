export * from './theme.sass'
import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { fieldStyles } from '../cyan-textarea/fieldStyles'

@customElement('cyan-select')
export class CyanSelect extends LitElement {
  
  static styles = css`
    ${ fieldStyles }
    :host {
      position: relative;
      display: block;
      height: auto;
      border-radius: 0 12px 0 0;
      height: 36px;
    }
    :host span.cyan-field-label {
      position: absolute;
      top: 0;
      left: 0;
      padding: 0px 8px;
      font-family: var(--cyan-font-family-ui, sans-serif);
      font-size: var(--cyan-font-size-caption, 11px);
      color: var(--cyan-border-color-field, blue);
    }
    select {
      width: calc(100% - 8px);
      margin:0;
      margin-right: 8px;
      height: 100%;
      background: none;
      border: none;
      color: var(--cyan-color-field, black);
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
  