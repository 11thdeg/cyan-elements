import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import nounsFile from './assets/proprietary/icons/nouns.json'
import { logError } from './utils/loghelpers'

@customElement('charna-icon')
export class CharnaIcon extends LitElement {
  @property({ type: String })
    noun: string

  @property({ type: Boolean })
    small: boolean = false

  static styles = css`
    img {
      height: 64px;
      width: 64px;
    }
    img.small {
      height: 42px;
      width: 42px;
    }
  `

  constructor () {
    super()
    this.noun = 'missing'
  }

  render () {
    const nouns = nounsFile as Record<string, string>
    const iconFileName = nouns[this.noun] || nouns.missing
    if (!iconFileName) logError(`Icon '${this.noun}' not found`) // log error if no icon found
    const iconpath = '../../public/proprietary/icons/light/' + iconFileName
    const classes = this.small ? 'small' : ''
    return html`<img src="${iconpath}" alt="${this.noun}" class="${classes}"/>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'charna-icon': CharnaIcon
  }
}
