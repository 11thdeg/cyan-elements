export * from './theme.sass'
import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CyanThemedElement } from '../../cyan-themed-element'
import { resolveNounURI } from '../../utils/resolveNounURI'

@customElement('cn-chip')
export class CyanChip extends CyanThemedElement {
  static styles = css`
    :host {
      font-family: var(--cn-font-family-ui);
      font-weight: var(--cn-font-weight-ui);
      font-size: var(--cn-font-size-ui);
      letter-spacing: var(--cn-letter-spacing-ui);
      border: solid 1px var(--cn-background-level-2, #ccc);
      height: 32px;
      line-height: 30px;
      padding: 0 16px;
      border-radius: 8px;
      color:var(--cn-border-color-outline);
    }
    :host([checked]) {
      border: solid 1px hsla(0, 0%, 0%, 0.0);
      background: var(--cn-background-level-2, #eee);
      color: var(--cn-border-color-outline);
    }
    :host([disabled]) {
      opacity: 0.5;
    }
    :host img {
      height: 18px;
      width: 18px;
      display: inline-block;
      vertical-align: middle;
      margin-right: 4px;
      margin-left: -4px;
      position: relative;
    }
    :host([input]) img {
      margin-left: 4px;
      margin-right: -4px;
      transition: background-color 0.2s ease-in-out;
    }
    :host([input]:hover) img {
      background-color: var(--cn-background-level-2, #eee);
      border-radius: 50%;
    }
    :host img.hide{
      opacity: 0.11;
      user-select: none;
    }
    :host span {
      user-select: none;
    }`

  @property({ type: String, reflect: true })
    noun = 'check'

  @property({ type: Boolean, reflect: true })
    filter = false

  @property({ type: Boolean, reflect: true })
    checked = false

  @property({ type: Boolean, reflect: true })
    disabled = false

  @property ({ type: Boolean, reflect: true })
    input = false

  handleClick (e: Event) {
    e.stopPropagation()
    if (this.disabled) return
    this.checked = !this.checked
    this.dispatchEvent(new Event('change'))
  }

  connectedCallback () {
    super.connectedCallback()
    this.setAttribute('role', 'option')
    this.addEventListener('click', this.handleClick)
  }
  disconnectedCallback(): void {
    super.disconnectedCallback()
    this.removeEventListener('click', this.handleClick)
  }

  render () {
    const iconPath = resolveNounURI(this.noun, this.mode === 'dark')

    const prepend = this.filter? html`<img src=${iconPath} alt=${this.noun} class=${this.checked ? "" : "hide"} />` : html``

    const postfix = this.input? html`<img src=${iconPath} alt=${this.noun} class="inputnoun" />` : html``

    return html`${prepend}
        <span><slot></slot></span>
        ${postfix}`
  }
}