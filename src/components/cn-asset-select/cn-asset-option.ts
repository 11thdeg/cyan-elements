export * from './theme.sass'
import { html, LitElement, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { logDebug, logError } from '../../utils/loghelpers'

@customElement('cn-asset-option')
export class CyanAssetOption extends LitElement {

  static styles = css`
    :host {
      display: block;
      width: 100px;
      text-align: center;
      padding: 4px;
      border-radius: 12px;
      transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, opacity 0.3s ease-in-out;
    }
    :host(:hover) {
      background: var(--cyan-background-field-hover, #005599);
    }
    :host([selected]) {
      background: var(--cyan-background-field-selected, #005599);
    }
    img.preview {
      width: 92px;
      height: 92px;
      object-fit: cover;
      border-radius: 45px;
    }`

  _selected = false

  @property({ type: Boolean, reflect: true })
  get selected () {
    return this._selected
  }
  set selected (value: boolean) {
    this._selected = value
  }

  @property({ type: String, reflect: true })
  get ariaSelected () {
    return this._selected ? 'true' : 'false'
  }
  set ariaSelected (value: string) {
    logError('trying to set ariaSelected to', value, 'please use [selected] instead')
  }

  @property({ type: String, reflect: true })
    preview = '' // the preview image url goes here

  @property({ type: String, reflect: true })
    value = '' // the value of this option goes here

  connectedCallback () {
    super.connectedCallback()
    this.role = 'option'
    this.onclick = () => {
      logDebug('selecting', this.value)
      this.dispatchEvent(new CustomEvent('select', { detail: this.value, bubbles: true, composed: true }))
    }
  }

  render () {
    return html`
      ${this.preview ? html`
        <img
          src="${this.preview}"
          alt=""
          class="preview" />` : '' }
      <slot></slot>
    `
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cn-asset-option': CyanAssetOption
  }
}