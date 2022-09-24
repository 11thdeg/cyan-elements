import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import nounsFile from '../assets/proprietary/icons/nouns.json'
import { logError } from '../utils/loghelpers'
import { onClassChange } from '../utils/onClassChange'
import { cyanUIComponentStyles } from '../styles/cyan-component-style'

const nouns = nounsFile as Record<string, string>

@customElement('cyan-icon')
export class CyanIcon extends LitElement {
  @property({ type: String })
    noun: string

  @property({ type: Boolean, reflect: true })
    xsmall = false

  @property({ type: Boolean, reflect: true })
    small = false

  @property({ type: Boolean, reflect: true })
    xlarge = false

  @property({ type: Boolean, reflect: true })
    large = false

  @property({ type: Boolean, reflect: true })
    light = false

  @property({ type: Boolean, reflect: true })
    dark = false

  static styles = css`
    ${cyanUIComponentStyles}
    :host, img {
      display: inline-block;
      height: 36px;
      width: 36px;
      vertical-align: text-top;
      background: none;
    }
    :host([xsmall]), :host([xsmall]) img {
      height: 16px;
      width: 16px;
    }
    :host([small]), :host([small]) img {
      height: 24px;
      width: 24px;
    }
    :host([xlarge]), :host([xlarge]) img {
      height: 128px;
      width: 128px;
    }
    :host([large]), :host([large]) img {
      height: 72px;
      width: 72px;
    }
  `

  constructor () {
    super()
    this.noun = 'missing'
  }

  lightModeDisconnect:CallableFunction|null = null
  lightmode = document.body.classList.contains('cyan--mode--dark') ? 'dark' : 'light'

  connectedCallback(): void {
    super.connectedCallback()
    this.lightModeDisconnect = onClassChange(document.body, (el:Element) => {
      this.lightmode = el.classList.contains('cyan--mode--dark') ? 'dark' : 'light'
      this.requestUpdate()
    })
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    if (this.lightModeDisconnect) this.lightModeDisconnect()
  }

  render () {
    if(!nouns[this.noun]) logError(`Icon '${this.noun}' not found`)
    // const classes = this.xsmall ? 'xsmall' : this.small ? 'small' : this.xlarge ? 'xlarge' : this.large ? 'large' : ''
    return html`<img
      src="/proprietary/icons/${this.light ? 'light' : this.dark ? 'dark' : this.lightmode}/${nouns[this.noun]||nouns['missing']}"
      alt="${this.noun}" />`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-icon': CyanIcon
  }
}
