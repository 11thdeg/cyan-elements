import { html, LitElement, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { logDebug } from './utils/loghelpers'

@customElement('cyan-lightmode-toggle')
export class CyanLightmodeToggle extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: 24px;
    }`

  @property({ type: Boolean })
    dark=false
  @property({ type: String })
    label = ''

  onChange () {
    this.dark = !this.dark
    this.dispatchEvent(new CustomEvent('change', { detail: this.dark }))
    logDebug('onChange:', this.dark)
    document.body.classList.toggle('cyan--mode--dark')
    document.body.classList.toggle('cyan--mode--light')
  }

  render () {
    return html`<cyan-toggle @change="${this.onChange}" ?checked="${this.dark}" label="${this.label}"></cyan-toggle>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-lightmode-toffle': CyanLightmodeToggle
  }
}
