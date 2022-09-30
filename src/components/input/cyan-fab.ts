import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { buttonStyles } from '../../styles/componentStyles'

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
      padding: 12px;
      border-radius: 16px;
      line-height: 56px;
      padding: 0;
      position: relative;
      color: var(--cyan-fab-color);
      background-color: var(--cyan-fab-background-color);
    }
    :host button:hover {
      background-color: var(--cyan-fab-background-color-hover);
    }
    :host button:active {
      background-color: var(--cyan-fab-background-color-active);
    }
    :host button cyan-icon {
      margin: 0;
      padding: 0;
      position: absolute;
      top: 16px;
      left: 16px;
    }
    :host button span {
      margin: 0 16px;
    }
    :host button cyan-icon + span {
      margin-left: 48px;
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

  render () {
    const icon = this.noun ? html`<cyan-icon small noun=${this.noun} !small="this.small"></cyan-icon>` : ''
    let label = this.label ? html`<span>${this.label}</span>` : ''
    if (!this.label && !this.noun) label = html`<slot></slot>`

    return html`
      <button>
        ${icon}
        ${label}
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-fab': CyanFab
  }
}
