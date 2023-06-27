export * from './theme.sass'
import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CyanThemedElement } from '../../cyan-themed-element'

@customElement('cn-app-bar')
export class CyanAppBar extends CyanThemedElement {

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0 12px;
      height: 64px;
      margin-bottom: 8px; 
      border-radius: 0 0 0 16px;
    }
    :host([sticky]),
    :host([modal]) {
      position: sticky;
      top: 0;
      transition: all 0.2s ease-in-out;
      background: var(--cyan-background-app-bar-sticky);
      z-index: var(--cyan-z-index-navigation, 9000);
    }
    :host([modal]) {
      background-color: var(--cyan-background-app-bar-modal);
    }
    :host([overlay]) {
      transition: all 0.6s ease-in-out;
      box-shadow: var(--cyan-box-shadow-app-bar-overlay);
    }
    :host nav {
      display: flex;
      flex-direction: row;
      margin: 0;
      padding: 0;
      gap: 8px;
      align-items: center;
      height: 100%;
    }
    :host > * {
      flex-grow: 0;
      flex-shrink: 0;
    }
    :host h2.viewTitle {
      display: var(--cyan-top-app-bar-title-display, block);
      font-family: var(--cyan-font-family-headline-4);
      font-weight: 300; 
      font-size: var(--cyan-font-size-headline-4);
      line-height: var(--cyan-line-height-headline-4);
      letter-spacing: var(--cyan-letter-spacing-headline-4);
      color: var(--cyan-color-top-app-bar);
      height: var(--cyan-line-height-headline-4);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--cyan-color-app-bar);
      margin: 0;
      margin-top: -4px;
      flex-grow: 1;
    }
  `

  @property({ type: String, reflect: true }) 
    title = ''

  @property({ type: Boolean, reflect: true })
    sticky = false

  @property({ type: Boolean, reflect: true })
    modal = false

  @property({ type: Boolean, reflect: true })
    overlay = false

  @property({ type: String, reflect: true })
    noun = ''

  dispatchBack () {
    this.dispatchEvent(new Event('back'))
  }

  scrollListener: EventListener = (e: Event) => {
    const top = window.scrollY || (e.target as HTMLElement).scrollTop || 0
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
   

  render () {
    // render modal back button if modal
    const modal = this.modal ? html`<cyan-button noun="back" text @click=${this.dispatchBack}></cyan-button>` : ''
    // render icon if not modal and noun is set
    const icon = !this.modal && this.noun ? html`<cyan-icon noun="${this.noun}"></cyan-icon>` : ''

    return html`<nav>
      ${modal}
      ${icon}
      <h2 class="viewTitle">
        ${this.title}
      </h2>
      <slot></slot>
  </nav>`
  }
}

declare global {
    interface HTMLElementTagNameMap {
      'cn-top-app-bar': CyanAppBar
    }
  }