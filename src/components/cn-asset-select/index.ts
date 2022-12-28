export * from './theme.sass'
import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { logDebug } from '../../utils/loghelpers'
import { CyanAssetOption } from './cn-asset-option'

@customElement('cn-asset-select')
export class CyanAssetSelect extends LitElement {

  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, opacity 0.3s ease-in-out;
      background: var(--cyan-background-field, red);
      border-bottom: 1px solid var(--cyan-border-color-field, blue);
      box-sizing: border-box;
      padding: 8px;
      gap: 8px;
      border-radius: 0 12px 0 0;
    }`

  _selected = '' // the selected items value goes here

  @property({ type: String, reflect: true })
  get selected () { return this._selected }
  set selected (value: string) {
    logDebug('setting selected to', value)
    this._selected = value 

    // deselect all options
    const options = this.querySelectorAll('cn-asset-option')
    options.forEach(option => {
      logDebug('deselecting', option.value)
      option.removeAttribute('selected')
    })

    // select the option with the given value
    const selectedOption = this.querySelector(`cn-asset-option[value="${value}"]`) as CyanAssetOption
    if (selectedOption) {
      logDebug('selecting', selectedOption.value)
      selectedOption.setAttribute('selected', '')
    }
  }

  _handleSelection (e: Event) {
    logDebug('selecting', (e.target as CyanAssetOption).value)
    this.selected = (e.target as CyanAssetOption).value
    this.dispatchEvent(new Event('change'))
  }

  connectedCallback () {
    super.connectedCallback()
    this.setAttribute('role', 'listbox')
    this.setAttribute('aria-multiselectable', 'false')
    this.setAttribute('tabindex', '0')
    this.addEventListener('select', this._handleSelection)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.removeEventListener('select', this._handleSelection)
  }

  render () {
    return html`
      <slot></slot>
    `
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cn-asset-select': CyanAssetSelect
  }
}