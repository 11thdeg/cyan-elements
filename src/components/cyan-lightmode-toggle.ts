import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { logDebug } from '../utils/loghelpers'

@customElement('cyan-lightmode-toggle')
export class CyanLightmodeToggle extends LitElement {

  @property({ type: Boolean })
    dark=false
  @property({ type: String })
    label = ''

  connectedCallback () {
    super.connectedCallback()
    logDebug('cyan-lightmode-toggle', 'connectedCallback')

    // Nothing to do, if the lightmode is already set.
    if (document.body.classList.contains('cyan--mode--dark') || document.body.classList.contains('cyan--mode--light')) return
    
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // set dark mode
      // document.body.classList.toggle('cyan--mode--dark')

      // Force light mode for debugging purposes.
      document.body.classList.toggle('cyan--mode--light')
    } else {
      // set light mode
      document.body.classList.toggle('cyan--mode--light')
    }
  }

  onChange () {
    this.dark = !this.dark
    this.dispatchEvent(new CustomEvent('change', { detail: this.dark }))
    // logDebug('onChange:', this.dark)
    document.body.classList.toggle('cyan--mode--dark')
    document.body.classList.toggle('cyan--mode--light')
  }

  render () {
    return html`<cyan-button text @click="${this.onChange}" noun="lightmode" 
     label="${this.label}"></cyan-button>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-lightmode-toggle': CyanLightmodeToggle
  }
}
