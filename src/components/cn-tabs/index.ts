export * from './theme.sass'
import { html, css } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { CyanThemedElement } from '../../cyan-themed-element'
import { logDebug } from '../../utils/loghelpers'

@customElement('cn-tabs')
export class CyanTabs extends CyanThemedElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-radius: 24px;
      background: var(--cn-background-tabs, #fff);
    }
    :host span {
      height: var(--cn-tabs-height, 48px);
      line-height: var(--cn-tabs-height, 48px);
      text-align: center;
      flex-grow: 1;
      flex-shrink: 0;
      flex-basis: 0;
      position: relative;
      border-radius: 24px;
      transition: background-color 0.3s ease-in-out;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      box-sizing: border-box;
      padding: 0 16px;
    }
    :host span:hover {
      background: var(--cn-background-tabs-hover, #eee);
    }
    :host span[active] {
      background: var(--cn-background-tabs-active, #eee);
    }
    :host span[active]::after {
      content: '';
      position: absolute;
      height: 4px;
      width: 78px;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 4px 4px 0 0;
      background-color: var(--cn-tabs-active-indicator-color, #000);
    }
  `

  _active = ''

  @property({ type: String, reflect: true })
  get active () {
    return this._active
  }
  set active (value) {
    logDebug('set active', value)
    if (this._activeTab) {
      this._activeTab.removeAttribute('active')
    }
    const tab = this.shadowRoot?.querySelector(`[tab="${value}"]`)
    if (tab) {
      tab.setAttribute('active', '')
    }
    this._active = value
  }

  @property({ type: Array, reflect: true })
    tabs = []

  @query('[active]')
    _activeTab: undefined | HTMLElement

  toTab(tab: string[]) {
    return html`<span
      tab="${tab[0]}"
      ?active="${this.active === tab[0]}"
      @click="${this._dispatchClick}"
      @keydown="${this._dispatchClick}"
    >${tab[1]}</span>`
  }

  _dispatchClick (e: Event) {
    const target = e.target as HTMLElement
    const tab = target.getAttribute('tab')
    if (tab) {
      this.active = tab
      this.dispatchEvent(new Event('change', { bubbles: true, composed: true }))
    }
  }

  render () {
    logDebug(this.tabs)
    if (this.tabs && this.tabs.length > 0) {
      return html`${this.tabs.map((tab) => this.toTab(tab))}`
    }
    return html`error`
  }
}
declare global {
    interface HTMLElementTagNameMap {
      'cn-tabs': CyanTabs
    }
  }