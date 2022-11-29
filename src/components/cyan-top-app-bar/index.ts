export * from './theme.sass'
import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CyanThemedElement } from '../../cyan-themed-element'

@customElement('cyan-top-app-bar')
export class CyanTopAppBar extends CyanThemedElement {

  static styles = css`
    :host header{
      display: flex;
      flex-direction: row;
      margin: 0;
      padding: 0 8px;
      height: 64px;
      margin-bottom: 8px; // 64+8 = 72 = 3 * 24 (grid)
      background: var(--cyan-background-top-app-bar);
      gap: 8px;
      align-items: center;
    }
    :host([sticky]) header{
      position: sticky;
      top: 0;
      transition: all 0.2s ease-in-out;
      background: var(--cyan-background-top-app-bar-sticky);
      z-index: 90000;
    }
    @media screen and (min-width: 600px) {
      :host([sticky]) header{
        border-radius: 0 0 0 16px;
      }
    }
    :host([overlay]) header{
      transition: all 0.6s ease-in-out;
      box-shadow: var(--cyan-box-shadow-top-app-bar-overlay);
    }
    ::slotted(h2) {
      display: var(--cyan-top-app-bar-title-display, block);
      font-family: var(--cyan-font-family-headline-4);
      font-weight: 300; // var(--cyan-font-weight-headline-4);
      font-size: var(--cyan-font-size-headline-4);
      line-height: var(--cyan-line-height-headline-4);
      letter-spacing: var(--cyan-letter-spacing-headline-4);
      color: var(--cyan-color-top-app-bar);
      height: var(--cyan-line-height-headline-4);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }`


  @property({ type: Boolean, reflect: true }) sticky = false

  @property({ type: Boolean, reflect: true }) modal = false

  @property({ type: Boolean, reflect: true }) overlay = false

  @property({ type: String, reflect: true }) role = 'banner'

  scrollListener: EventListener = (e: Event) => {
    const top = window.pageYOffset || (e.target as HTMLElement).scrollTop || 0
    if (this.sticky || this.modal) this.overlay = top > 2
  }

  connectedCallback () {
    super.connectedCallback()
    if (this.modal) {
      this.sticky = true
    }
    document.addEventListener('scroll', this.scrollListener)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    document.removeEventListener('scroll', this.scrollListener)
  }
  
  dispatchBack () {
    this.dispatchEvent(new CustomEvent('back'))
  }

  render () {
    return html`<header>
      ${this.modal ? html`<cyan-button noun="back" text @click=${this.dispatchBack}></cyan-button>` : ''}
      <slot></slot>
    </header>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-top-app-bar': CyanTopAppBar
  }
}