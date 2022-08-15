import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import nounsFile from './assets/proprietary/icons/nouns.json'
import { logError } from './utils/loghelpers'
import { onClassChange } from './utils/onClassChange'

@customElement('cyan-icon')
export class CyanIcon extends LitElement {
  @property({ type: String })
    noun: string

  @property({ type: Boolean })
    xsmall = false

  @property({ type: Boolean })
    small = false

  @property({ type: Boolean })
    xlarge = false

  @property({ type: Boolean })
    large = false

  static styles = css`
    img {
      height: 36px;
      width: 36px;
    }
    img.xsmall {
      height: 16px;
      width: 16px;
    }
    img.small {
      height: 24px;
      width: 24px;
    }
    img.xlarge {
      height: 128px;
      width: 128px;
    }
    img.large {
      height: 72px;
      width: 72px;
    }
  `

  constructor () {
    super()
    this.noun = 'missing'
  }


  connectedCallback(): void {
    super.connectedCallback()
    this.lightModeDisconnect = onClassChange(document.body, (el:Element) => {
      this.lightmode = el.classList.contains('cyan--mode--dark') ? 'dark' : 'light'
      this.requestUpdate()
      // logDebug('lightmode:', this.lightmode, el.classList)
    })
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    if (this.lightModeDisconnect) this.lightModeDisconnect()
  }

  lightModeDisconnect:CallableFunction|null = null
  lightmode = document.body.classList.contains('cyan--mode--dark') ? 'dark' : 'light'

  render () {
    const nouns = nounsFile as Record<string, string>
    const iconFileName = nouns[this.noun] || nouns.missing
    if (!iconFileName) logError(`Icon '${this.noun}' not found`) // log error if no icon found
    const iconpath = '/proprietary/icons/' + this.lightmode + '/' + iconFileName
    const classes = this.xsmall ? 'xsmall' : this.small ? 'small' : this.xlarge ? 'xlarge' : this.large ? 'large' : ''
    return html`<img src="${iconpath}" alt="${this.noun}" class="${classes}"/>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-icon': CyanIcon
  }
}
