import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import nounsFile from '../assets/proprietary/icons/nouns.json'
import { logError } from '../utils/loghelpers'
import { cyanUIComponentStyles } from '../styles/cyan-component-style'
import { CyanThemedElement } from '../cyan-themed-element'

const nouns = nounsFile as Record<string, string>

@customElement('cyan-icon')
export class CyanIcon extends CyanThemedElement {
  @property({ type: String })
    noun = 'fox'

  @property({ type: Boolean, reflect: true })
    xsmall = false

  @property({ type: Boolean, reflect: true })
    small = false

  @property({ type: Boolean, reflect: true })
    xlarge = false

  @property({ type: Boolean, reflect: true })
    large = false

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

  render () {
    if(!nouns[this.noun]) logError(`Icon '${this.noun}' not found`)
    const iconUri = nouns[this.noun] || nouns['fox']
    const path = `/proprietary/icons/${this.light ? 'light' : this.dark ? 'dark' : this.mode}/${iconUri}`
    return html`<img src="${path}" alt="${this.noun}" />`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-icon': CyanIcon
  }
}
