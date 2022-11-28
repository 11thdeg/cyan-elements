export * from './theme.sass'
import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CyanThemedElement } from '../../cyan-themed-element'
import { logError } from '../../utils/loghelpers'

@customElement('cyan-card')
export class CyanCard extends CyanThemedElement {

  static styles = css`
    :host {
      box-sizing: border-box;
      margin: 0;
      padding: 12px;
      display: block;
      border-radius: 16px;
    }
    :host([elevation="0"]) {
      padding: 11px;
      border: var(--cyan-border-card-elevation-0);
    }
    :host([elevation="1"]) {
      background: var(--cyan-background-card-elevation-1);
      box-shadow: var(--cyan-box-shadow-card-elevation-1);
    }
    :host .cardHeader {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: left;
      gap: 8px;
    }`

  @property({ type: Number, reflect: true }) elevation = 0

  _cover = ''
  @property({ type: String, reflect: true })
  get cover () {
    return this._cover
  }
  set cover (value: string) {
    try {
      const url = new URL(value)
      this._cover = url.href
    } catch (e) {
      logError('cyan-card cover image with an invalid url', value, e)
    }
  }

  render () {
    return html`
      <div class="cardHeader">
        <slot name="avatar"></slot>
        <slot name="title"></div>
      </slot>
      <div class="cardContent">
        <slot></slot>
      </div>`
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cyan-card': CyanCard
  }
}
