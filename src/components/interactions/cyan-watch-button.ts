import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CyanThemedElement } from '../../cyan-themed-element'
import { cyanComponentStyle } from '../../styles/cyan-component-style'

@customElement('cyan-watch-button')
export class CyanWatchButton extends CyanThemedElement {
  
  static styles = css`
    ${cyanComponentStyle}
    :host {
      display: block;
      padding: 2px
    }
    :host button{
      background-color: var(--cyan-tag-background-color);
      border: none;
      box-sizing: border-box;
      display: inline-block;
      height: 20px;
      line-height: 20px;
      margin: 0;
      padding: 0 8px;
      border-radius: 10px;
      transition: background-color 0.2s ease-in-out;
      color: var(--cyan-tag-text-color);
    }
    :host button:hover {
      background-color: var(--cyan-tag-background-color-hover);
    }
    :host button:active {
      background-color: var(--cyan-tag-background-color-active);
    }
    :host([on]) button {
      background-color: var(--cyan-tag-background-color-secondary);
    }
    :host([on]) button:hover {
      background-color: var(--cyan-tag-background-color-secondary-hover);
    }
    :host([on]) button:active {
      background-color: var(--cyan-tag-background-color-secondary-active);
    }
    :host([disabled]) button {
      background-color: var(--cyan-tag-background-color-disabled);
    }
    :host cyan-icon {
      margin-top: -2px;
    }`

  @property({ type: Number, reflect: true })
    count = 0

  @property({ type: Boolean, reflect: true })
    on = false

  @property({ type: Boolean, reflect: true })
    disabled = false

  clicked () {
    if (this.disabled) return
    if (this.on) this.count--
    else this.count++
    this.on = !this.on
    this.dispatchEvent(new CustomEvent('loves', { detail: { active: this.on, count: this.count } }))
  }

  render () {
    return html`
      <button @click="${this.clicked}">
        <span class="count">
          ${this.count}
        </span>
        ${ this.on ? html`<cyan-icon xsmall noun="eye-open" style="opacity: 0.44"></cyan-icon>` : html`<cyan-icon xsmall noun="eye-closed" style="opacity: 0.44"></cyan-icon>` }
      </button>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-watch-button': CyanWatchButton
  }
}
