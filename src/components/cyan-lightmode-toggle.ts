import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('cyan-lightmode-toggle')
export class CyanLightmodeToggle extends LitElement {

  @property({ type: Boolean })
    dark=false
  @property({ type: String })
    label = ''

  connectedCallback () {
    super.connectedCallback()

    // Nothing to do, if the lightmode is already set.
    if (document.body.classList.contains('cyan--mode--dark') || document.body.classList.contains('cyan--mode--light')) return
    
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // set dark mode
      document.body.classList.toggle('cyan--mode--dark')
      document.body.classList.toggle('dark')
      this.dark = true
    } else {
      // set light mode
      document.body.classList.toggle('cyan--mode--light')
      document.body.classList.toggle('light')
    }
  }

  onChange () {
    this.dark = !this.dark
    const eventName  = this.dark ? 'cyan-mode-dark' : 'cyan-mode-light'
    this.dispatchEvent(new Event(eventName, { bubbles: true }))
    document.body.classList.toggle('cyan--mode--dark')
    document.body.classList.toggle('cyan--mode--light')
    document.body.classList.toggle('dark')
    document.body.classList.toggle('light')
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
