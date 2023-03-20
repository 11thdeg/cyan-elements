export * from './theme.sass'
import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CyanThemedElement } from '../../cyan-themed-element'
import { marked} from 'marked'

@customElement('cn-card')
export class CyanCard extends CyanThemedElement {
  static styles = css`
    :host {
      display: block;
      border-radius: var(--cn-border-radius-card, 16px);
      container-type: inline-size;
      position: relative;
    }
    :host .cardContent {
      padding: 0;
      margin: 0;
      border-radius: var(--cn-border-radius-card, 16px);
      max-height: 100cqw;
      overflow: hidden;
      position: relative;
    }
    :host .cardContent img {
      width: 100cqw;
      height: 57cqw;
      object-fit: cover;
      border-radius: 16px;
      position: relative;
      display: block;
    }
    :host .cardNoun {
      margin: 16px;
      margin-right: 0;
      padding: 0;
    }
    :host([cover]) .cardNoun {
      position: absolute;
      top: 12px;
      left: 12px;
      margin: 0;
      padding: 0;
      z-index: 2;
    }
    :host .cardHeader {
      display: flex;
    }
    :host .tint {
      position: absolute;
      bottom: 0;
      left: 0;
      height: min(95cqw, 96px);
      width: 100cqw;
      background: linear-gradient(
        0deg,
        hsla(var(--chroma-key-10-hsl), 0.73) 0%,
        hsla(var(--chroma-key-10-hsl), 0) 100%
      );
    }
    :host h4 {
      margin: 12px 16px;
      padding: 0;
      font-family: var(--cn-font-family-headings);
      font-weight: var(--cyan-font-weight-headline-card);
      font-size: var(--cyan-font-size-headline-card);
      line-height: var(--cyan-line-height-headline-card);
      letter-spacing: var(--cyan-letter-spacing-headline-card);
      color: var(--cn-color-heading-card);

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;  
      overflow: hidden;
      text-overflow: ellipsis;
    }
    :host .snippet {
      padding: 0;
      margin: 0 16px;
      font-family: var(--cyan-font-family-body-2);
      font-weight: var(--cyan-font-weight-body-2);
      font-size: var(--cyan-font-size-body-2);
      line-height: var(--cyan-line-height-body-2);
      letter-spacing: var(--cyan-letter-spacing-body-2);
      color: var(--cyan-color-medium);
    }
    :host .snippet a {
      color: var(--cn-color-link, white);
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
    nav {
      box-sizing: border-box;
      padding: 12px 16px;
      width: 100cqw;
    }
    cyan-toolbar {
      margin: 12px;
    }
  `

  @property({ type: Number, reflect: true }) elevation = 1

  @property({ type: String, reflect: true }) noun = ''

  @property({ type: String, reflect: true }) title = ''

  @property({ type: String, reflect: true }) snippet = undefined

  @property({ type: String, reflect: true }) cover = undefined

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'card')
  }

  get coverImageURL () {
    return this.cover || ''
  }

  render () {
    const snp = document.createElement('div');
    if (this.snippet) {
      snp.insertAdjacentHTML('beforeend', marked(this.snippet));
      snp.classList.add('snippet');
    }
    return html`
      ${this.cover ? html`<div class="cardContent">
        <img src=${this.coverImageURL} alt="" aria-hidden="true" />
        <div aria-hidden="true" class="tint"></div>
      </div>` : html`
      <slot></slot>
      `}
      <div class="cardHeader">   
        ${this.noun ? html`<cyan-icon noun=${this.noun} class="cardNoun" ?large=${!!this.cover}></cyan-icon>` : ''}
        ${this.title ? html`<h4 class="downscaled">${this.title}</h4>` : ''}
      </div>
      
      ${this.snippet ? html`${snp}` : ''}
      
      <nav class="cardBottomActions">
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