export * from './theme.sass'
import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { buttonStyles } from '../../styles/componentStyles'

@customElement('cyan-button')
export class CyanButton extends LitElement {

  static styles = css`
    ${buttonStyles}
    :host {
      display: block;
    }
    :host button {
      position: relative;
      height: 38px;
      min-width: 38px;
      margin: 5px 0;
      padding: 0;
      border-radius: 19px;
      display: block;
      overflow: hidden;
      max-width: 100%;
      line-height: 38px;
      transition: all 0.2s ease-in-out;
    }
    :host(:first-child) button{
      margin-left: 0;
    }
    :host(:last-child) button{
      margin-right: 0;
    }
    :host([disabled]) cyan-icon {
      opacity: 0.48;
    }
    :host([secondary]) button {
      color: var(--cyan-color-button-secondary);
      background: var(--cyan-background-button-secondary);
    }
    :host([secondary]) button:hover {
      background: var(--cyan-background-button-secondary-hover);
    }
    :host([secondary]) button:active {
      background: var(--cyan-background-button-secondary-active);
    }
    :host button cyan-icon {
      position: absolute;
      top: 5px;
      left: 7px;
    }
    :host button span {
      padding: 0px 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
    }
    :host button cyan-icon + span {
      padding-left: 38px;
    }
    :host button cyan-icon + span slot:empty {
      display: none;
      padding-left: 38px;
    }
  `
  @property({ type: String, reflect: true })
    label = ''

  @property({ type: String, reflect: true })
    noun = ''

  @property({ type: String, reflect: true })
    working = ''

  @property({ type: Boolean, reflect: true })
    secondary = false

  @property({ type: Boolean, reflect: true })
    text = false

  @property({ type: Boolean, reflect: true })
    disabled = false

  @property({ type: Boolean, reflect: true })
    dark = false

  render () {
    const darkIcon = this.dark ||
      !this.text && !this.disabled
    const icon = this.noun ? html`<cyan-icon small noun=${this.noun} ?dark="${darkIcon}"></cyan-icon>` : ''
    const label = this.noun ? 
      this.label ? html`<span>${this.label}</span>` : '' :
      this.label ? html`<span>${this.label}</span>` : ''
    // if (!this.label) label = html`<span><slot></slot></span>`
  
    return html`
        <button ?disabled=${this.disabled}>
          ${icon}
          ${label}
        </button>
      `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-button': CyanButton
  }
}
