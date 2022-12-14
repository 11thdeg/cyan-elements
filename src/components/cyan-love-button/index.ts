export * from './theme.sass'
import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CyanThemedElement } from '../../cyan-themed-element'
import { cyanComponentStyle } from '../../styles/cyan-component-style'

@customElement('cyan-love-button')
export class CyanLoveButton extends CyanThemedElement {
  
  static styles = css`
    ${cyanComponentStyle}
    :host {
      display: block;
      height: 24px;
      width: auto;
    }
    :host button{
      background: var(--cyan-background-love-button);
      border: none;
      box-sizing: border-box;
      display: inline-block;
      height: 20px;
      line-height: 20px;
      margin: 2px 0;
      padding: 0 8px;
      border-radius: 10px;
      transition: background-color 0.2s ease-in-out;
      color: var(--cyan-tag-text-color);
    }
    :host button:hover {
      background-color: var(--cyan-background-love-button-hover);
    }
    :host button:active {
      background-color: var(--cyan-background-love-button-active);
    }
    :host([on]) button {
      background: var(--cyan-background-love-button-on);
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
    .count {
      margin-left: 4px;
      margin-right: 2px;
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
    this.dispatchEvent(new Event('change'))
  }

  render () {
    return html`
      <button @click="${this.clicked}" tabindex="0">
        ${ this.on ? html`<cyan-icon xsmall noun="loves" style="opacity: 0.44"></cyan-icon>` : html`<cyan-icon xsmall noun="love" style="opacity: 0.44"></cyan-icon>` }
        <span class="count">
          ${this.count}
        </span>
      </button>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-love-button': CyanLoveButton
  }
}
