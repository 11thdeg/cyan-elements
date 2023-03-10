export * from './theme.sass'
import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CyanThemedElement } from '../../cyan-themed-element'

@customElement('cn-card')
export class CyanCard extends CyanThemedElement {
  static styles = css`
    :host {
      display: block;
      border-radius: var(--cn-border-radius-card, 16px);
    }
    :host .cardHeader nav {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: left;
      gap: 8px;
      position: relative;
    }
    :host .cardContent {
      padding: var(--cn-padding-block, 16px);
    }
    :host .cover {
      display: block;
      width: 100%;
      object-fit: cover;
      border-radius: 16px;
      position: relative;
    }
    :host .cover::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 10;
      background: linear-gradient(hsla(var(--chroma-primary-i-hsl), 0) 0%, hsla(var(--chroma-primary-i-hsl), 0.5) 50%, hsla(var(--chroma-primary-i-hsl), 0) 100%);
    }
    :host([cover]) .cardHeader nav {
      position: absolute;
      bottom: 0;
      right: 0;
      max-height: 24px;
    }
    :host([elevation="1"]) {
      background-color: var(--cn-background-level-1, cyan);
    }
    :host([elevation="2"]) {
      background-color: var(--cn-background-level-1, cyan);
    }
    :host([elevation="3"]) {
      background-color: var(--cn-background-level-1, cyan);
    }
    :host([elevation="4"]) {
      background-color: var(--cn-background-level-1, cyan);
    }
  `

  @property({ type: Number, reflect: true }) elevation = 1

  @property({ type: String, reflect: true }) cover = undefined

  // this is needed for type safety for html`<img src="${this.coverImageURL}" alt="" class="cover" />`
  get coverImageURL () {
    return this.cover || ''
  }

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'card')
  }

  render () {
    return html`
      <div class="cardHeader">
        ${this.cover ? html`<img src="${this.coverImageURL}" alt="" class="cover" />` : ''}
        <nav>
          <slot name="noun"></slot>
          <slot name="title"></slot>
        </nav>
      </div>
      <div class="cardContent">
        <slot></slot>
      </div>
      <nav>
        <slot name="actions"></slot>
      </nav>
    `
  }

}
declare global {
  interface HTMLElementTagNameMap {
    'cn-card': CyanCard
  }
}