import { html, css, LitElement } from 'lit'
import { customElement, queryAssignedElements } from 'lit/decorators.js'
import { logDebug } from '../../utils/loghelpers'

@customElement('cyan-asset-select')
export class CyanAssetSelect extends LitElement {
  
  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      background-color: var(--chroma-secondary-i);
      border-radius: var(--cyan-border-radius);
      min-height: 48px;
      min-width: 48px;
      padding: 4px;
      gap: 4px
    }
  `

  @queryAssignedElements({selector: 'cyan-asset-option'})
    _optionElements!: Array<HTMLElement>;

  _handleChange (e: Event) {
    logDebug('cyan-asset-select', '_handleChange', e)
    this._optionElements.forEach((option) => {
      option.removeAttribute('selected')
    })
    const selected = e.target as HTMLElement
    selected.setAttribute('selected', '')
  }

  constructor () {
    super()
    this.addEventListener('change', this._handleChange);
  }

  render () {
    return html`
      <slot></slot>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-asset-select': CyanAssetSelect
  }
}
