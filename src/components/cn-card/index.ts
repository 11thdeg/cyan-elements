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
      flex-grow: 1;
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
      aspect-ratio: 16/9;
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
    :host div.tint {
      position: absolute;
      bottom: 0;
      left: 0;
      height: min(95cqw, 96px);
      width: 100cqw;
      background: darkorchid;
      z-index: 1;
      background: linear-gradient(
        0deg,
        hsla(var(--chroma-tint-1-hsl), 0.11), 
        hsla(var(--chroma-tint-1-hsl), 0)
      );
      pointer-events: none;
      border-radius: 0 0 16px 16px;
    }
    :host h4 {
      margin: 12px 16px;
      padding: 0;
      font-family: var(--cn-font-family-headings);
      font-weight: var(--cn-font-weight-headline-card);
      font-size: var(--cyan-font-size-headline-card);
      line-height: var(--cyan-line-height-headline-card);
      letter-spacing: var(--cyan-letter-spacing-headline-card);
      color: var(--cn-color-heading-card, cyan);

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;  
      overflow: hidden;
      text-overflow: ellipsis;
    }
    :host h4 a {
      color: var(--cn-color-headings-link, yellow);
      text-decoration: none;
    }
    :host h4 a:hover {
      text-decoration: underline;
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
      color: var(--cn-color-link, yellow);
    }
    :host([elevation="1"]) {
      background: var(--chroma-elevation-1, cyan);
    }
    :host([elevation="2"]) {
      background-color: var(--chroma-elevation-2, cyan);
    }
    :host([elevation="3"]) {
      background-color: var(--chroma-elevation-3, cyan);
    }
    :host([elevation="4"]) {
      background-color: var(--chroma-elevation-4, cyan);
    }
    nav {
      box-sizing: border-box;
      padding: 12px 16px;
      width: 100cqw;
    }
    cyan-toolbar {
      margin: 12px;
    }
    .slottedContent {
      margin: 12px 16px;
    }
  `

  @property({ type: Number, reflect: true }) elevation = 1

  @property({ type: String, reflect: true }) noun = ''

  @property({ type: String, reflect: true }) title = ''

  @property({ type: String, reflect: true }) snippet = undefined

  @property({ type: String, reflect: true }) cover = undefined

  @property({ type: String, reflect: true }) link = undefined

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'card')
  }

  get coverSlot () {
    if (!this.cover) return undefined

    const coverUrl:string = this.cover || ''

    if (!this.link) return html`<div class="cardContent" aria-hidden="true">
        <img src=${coverUrl} alt="" />
        <div class="tint"></div>
      </div>`

    const linkUrl:string = this.link || ''

    return html`<div class="cardContent" aria-hidden="true">
      <a href=${linkUrl} class="cardContent">
        <img src=${coverUrl} alt="" />
        <div class="tint"></div>
      </a>
    </div>`
  }

  get titleSlot () {
    if (!this.title) return html``

    if (!this.link) return html`<h4>${this.title}</h4>`

    const linkUrl:string = this.link || ''

    return html`<h4><a href=${linkUrl}>${this.title}</a></h4>`
  }

  render () {
    const snp = document.createElement('div');
    if (this.snippet) {
      snp.insertAdjacentHTML('beforeend', marked(this.snippet));
      snp.classList.add('snippet');
    }

    const coverSlot = this.coverSlot
    const titleSlot = this.titleSlot

    const showSlot = !!coverSlot || !!this.title || !!this.snippet || !!this.noun

    return html`
      ${showSlot ? coverSlot : html`<div class="slottedContent"><slot></slot></div>`}

      <div class="cardHeader">   
        ${this.noun ? html`<cyan-icon noun=${this.noun} class="cardNoun" ?large=${!!this.cover} ?dark=${!!this.cover}></cyan-icon>` : ''}
        ${titleSlot}
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