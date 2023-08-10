export * from './theme.sass'
import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CyanThemedElement } from '../../cyan-themed-element'

@customElement('cn-toggle-button')
export class CyanToggleButton extends CyanThemedElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      user-select: none;
    }
    :host([disabled]) {
      pointer-events: none;
      opacity: 0.33;
    }
    :host button {
      width: 100%;
      display: block;
      border: none;
      background: none;
      box-sizing: border-box;
      font-family: var(--cn-font-family-ui);
      font-weight: var(--cn-font-weight-ui);
      font-size: var(--cn-font-size-ui);
      line-height: var(--cn-line-height-ui);
      letter-spacing: var(--cn-letter-spacing-ui);
      text-align: left;
      position: relative;
      height: calc(var(--cn-page-grid) * 2);
      border-radius: 0;
    }
    :host button::before {
      content: '';
      position: absolute;
      top: calc(var(--cn-page-grid) * 0.5);
      right: calc(var(--cn-page-grid) * 0.5);
      width: calc(var(--cn-page-grid) * 2);
      height: calc(var(--cn-page-grid) * 1);
      border-radius: calc(var(--cn-page-grid) * 0.5);
      background-color: var(--cn-background-toggle-button-off);
      transition: all 0.2s ease-in-out;
    }
    :host button::after {
      content: '';
      position: absolute;
      top: calc(var(--cn-page-grid) * 0.5);
      right: calc(var(--cn-page-grid) * 1.5);
      width: calc(var(--cn-page-grid) * 1);
      height: calc(var(--cn-page-grid) * 1);
      border-radius: calc(var(--cn-page-grid) * 0.5);
      background-color: var(--cn-background-toggle-button-knob-off);
      transition: all 0.2s ease-in-out;
    }
    :host([aria-pressed="true"]) button::before {
      background-color: var(--cn-background-toggle-button-on);
    }
    :host([aria-pressed="true"]) button::after {
      background-color: var(--cn-background-toggle-button-knob-on);
      transform: translateX(calc(1 * var(--cn-page-grid)));
    }
    :host([disabled]) button::before {
      background-color: var(--cn-background-toggle-button-off) !important;
    }
    :host([disabled]) button::after {
      background-color: var(--cn-background-toggle-button-knob-off) !important;
    }
    
  `

  @property({ type: String, reflect: true })
    ariaPressed = 'false'

  @property({ type: Boolean, reflect: true })
    disabled = false

  @property({ type: Boolean, reflect: true })
    pressed = false

  @property({ type: String, reflect: true })
    label = ''

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
      this.pressed = false
    }
    else {
      this.setAttribute('aria-pressed', 'true')
      this.pressed = true
    }
    this.dispatchEvent(new Event('change'))
  }

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'button')
    this.setAttribute('tabindex', '0')
    this.addEventListener('click', this.handleCommand)
    this.addEventListener('keydown', this.handleCommand)
    this.setAttribute('aria-pressed', this.pressed ? 'true' : 'false')
  }
    
  disconnectedCallback(): void {
    super.disconnectedCallback()
    this.removeEventListener('click', this.handleCommand)
    this.removeEventListener('keydown', this.handleCommand)
  }

  render () {
    return html`<button aria-pressed="${this.pressed}">${this.label}</button>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cn-toggle-button': CyanToggleButton
  }
  namespace JSX {
    interface IntrinsicElements {
        'cn-toggle-button': CyanToggleButton
    }
  }
}
