import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { buttonStyles } from '../../styles/componentStyles'
import { resolveNounURI } from '../../utils/resolveNounURI'

@customElement('cyan-fab')
export class CyanFab extends LitElement {

  static styles = css`
    ${buttonStyles}
    :host {
      display: block;
    }
    :host button {
      display: block;
      height: 56px;
      min-width: 56px;
      box-sizing: border-box;
      margin: 0;
      border-radius: 16px;
      line-height: 56px;
      padding: 0;
      position: relative;
      color: var(--cyan-fab-color);
      background: var(--cyan-background-fab);
      text-decoration: none;
      transition: all 0.2s ease-in-out;
    }
    :host([secondary]) button {
      color: var(--cyan-fab-color-secondary);
      background-color: var(--cyan-fab-background-color-secondary);
    }
    :host([small]) button {
      height: 40px;
      min-width: 40px;
      border-radius: 12px;
      line-height: 40px;
    }
    :host button:hover {
      background-color: var(--cyan-fab-background-color-hover);
    }
    :host([secondary]) button:hover {
      background-color: var(--cyan-fab-background-color-secondary-hover);
    }
    :host button:active {
      background-color: var(--cyan-fab-background-color-active);
    }
    :host([secondary]) button:active {
      background-color: var(--cyan-fab-background-color-secondary-active);
    }
    :host([small]) img.noun {
      margin-left: 10px
    }
    :host button span {
      margin: 0 16px;
    }
    :host([small]) button span {
      margin: 0 12px;
    }
    :host button img + span {
      margin-left: 0px;
    }
    :host([small]) button img + span {
      margin-left: 0px;
    }
    img.noun {
      height: 24px;
      width: 24px;
      vertical-align: middle;
      display: inline-block;
      margin-left: 16px;
    }
    @media screen and (max-width: 600px) {
      :host button span.hideOnMobile {
        display: none;
      }
      img.noun, :host([small]) img.noun {
        margin-left: 0px;
      }
    }
  `
  @property({ type: String, reflect: true })
    label = ''

  @property({ type: String, reflect: true })
    noun = ''

  @property({ type: Boolean, reflect: true })
    secondary = false

  @property({ type: Boolean, reflect: true })
    tertiary = false

  @property({ type: Boolean, reflect: true })
    small = false


  renderIcon () {
    if (!this.noun) return html``
    const path = resolveNounURI(this.noun, this.secondary)
    return html`<img class="noun" src="${path}" alt="${this.noun}">`
  }

  render () {
    const icon = this.renderIcon()
    const buttonText = this.label ? html`${this.label}` : html`<slot></slot>`

    return html`
      <button>
        ${icon}
        ${this.noun ? html`<span class="hideOnMobile">${buttonText}</span>` : html`<span>${buttonText}</span>`}
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-fab': CyanFab
  }
}
