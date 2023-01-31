export * from './theme.sass'
import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CyanThemedElement } from '../../cyan-themed-element'

@customElement('cn-reaction-button')
export class CyanReactionButton extends CyanThemedElement {
  static styles = css`
    :host {
      display: flex;
      height: 48px;
      width: auto;
      position: relative;
      color: var(--cn-color-reaction-button);
      line-height: 48px;
      overflow: hidden;
      flex-shrink: 0;
    }
    :host button {
      position: relative;
      display: block;
      height: 44px; /* 44px is the minimum _clickable_ height for a wgag AA compliant button. */
      width: 44px;  /* 44px is the minimum _clickable_ width for a wgag AA compliant button. */
      margin: 2px;
      border-radius: 22px;
      background: var(--cn-bacground-reaction-button);
      border: none;
      transition: background 0.2s ease-in-out;
    }
    :host(:hover) button {
      background: var(--cn-bacground-reaction-button-hover);
    }
    :host(:active) button {
        background: var(--cn-bacground-reaction-button-active);
    }
    :host([disabled]) button {
      background: none;
      border: 1px solid var(--cn-bacground-reaction-button);
    }
    :host cyan-icon {
      position: absolute;
      top: 10px;
      left: 10px;
      opacity: 0.11;
      pointer-events: none;
      transition: opacity 0.2s ease-in-out;
    }
    :host([disabled]) cyan-icon {
      top: 9px;
      left: 9px;
      opacity: 0.22;
    }
    :host([aria-pressed="true"]) cyan-icon {
      opacity: 1;
    }
    :host .count {
      line-height: 48px;
      font-size: 16px;
      text-align: center;
      pointer-events: none;
      font-family: var(--cyan-text-font-family);
      font-size: var(--cyan-font-size-caption);
      font-weight: 600;
      letter-spacing: var(--cyan-letter-spacing-caption);
      margin: 0;
      padding: 0 8px;
    }
  `
  @property({ type: String, reflect: true })
    ariaPressed = 'false'

  @property({ type: Boolean, reflect: true })
    disabled = false

  @property({ type: Boolean, reflect: true })
    on = false

  @property({ type: Number, reflect: true })
    count = -1

  @property({ type: String, reflect: true })
    noun = 'loves'

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'button')
    this.setAttribute('tabindex', '0')
    this.addEventListener('click', this.handleCommand)
    this.addEventListener('keydown', this.handleCommand)
    this.setAttribute('aria-pressed', this.on ? 'true' : 'false')
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    this.removeEventListener('click', this.handleCommand)
    this.removeEventListener('keydown', this.handleCommand)
  }

  handleCommand(event: Event) {
    if (this.disabled) return
    // Handles both mouse clicks and keyboard
    // activate with Enter or Space
  
    // Keypresses other then Enter and Space should not trigger a command
    if (
      event instanceof KeyboardEvent &&
      event.key !== "Enter" &&
      event.key !== " "
    ) {
      return;
    }

    if (this.getAttribute('aria-pressed') === 'true') {
      this.setAttribute('aria-pressed', 'false')
      if (this.count > -1) this.count--
      this.on = false
    }
    else {
      this.setAttribute('aria-pressed', 'true')
      if (this.count > -1) this.count++
      this.on = true
    }
    this.dispatchEvent(new Event('change'))
  }

  render () {
    return html`<button>
      <cyan-icon small noun="${this.noun}"></cyan-icon>
    </button>
    ${this.count > -1 ? html`<span class="count">${this.count}</span>` : html``}`
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cn-reaction-button': CyanReactionButton
  }
}