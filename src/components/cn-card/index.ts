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
    /*:host .cardContent::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        -59deg, 
        hsla(65deg, 0%, 0%, 0.23) 40%,
        hsla(65deg, 100%, 63%, 0.23) 70%,
        hsla(202deg, 100%, 63%, 0.23) 100%
      );
      pointer-events: none;
      z-index: 1;
    }*/
    :host .cardContent + .cardNoun {
      position: absolute;
      top: 12px;
      left: 12px;
      margin: 0;
      padding: 0;
      z-index: 2;
    }
    :host h4 {
      margin: 12px 16px;
      padding: 0;
      font-family: var(--cyan-font-family-headline-4);
      font-weight: var(--cyan-font-weight-headline-4);
      font-size: var(--cyan-font-size-headline-4);
      line-height: var(--cyan-line-height-headline-4);
      letter-spacing: var(--cyan-letter-spacing-headline-4);
      color: var(--cn-color-heading-card);
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
  `

  @property({ type: Number, reflect: true }) elevation = 1

  @property({ type: String, reflect: true }) noun = ''

  @property({ type: String, reflect: true }) title = ''

  @property({ type: String, reflect: true }) snippet = ''

  @property({ type: String, reflect: true }) cover = ''

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'card')
  }

  render () {
    const snp = document.createElement('div');
    snp.insertAdjacentHTML('beforeend', marked(this.snippet));
    snp.classList.add('snippet');
    return html`
      ${this.cover ? html`<div class="cardContent">
        <img src=${this.cover} alt="" aria-hidden="true" />
      </div>` : html`
      <slot></slot>
      `}   
      ${this.noun ? html`<cyan-icon noun=${this.noun} class="cardNoun" large></cyan-icon>` : ''}

      ${this.title ? html`<h4 class="downscaled">${this.title}</h4>` : ''}
      
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