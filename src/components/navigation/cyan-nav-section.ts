import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { CyanThemedElement } from "../../cyan-themed-element";
import { cyanUIComponentStyles } from "../../styles/cyan-component-style";

@customElement('cyan-nav-section')
export class CyanNavSection extends CyanThemedElement {
  static styles = css`
    ${cyanUIComponentStyles}
  :host div.sectionHeader {
    display: flex;
    height: 48px;
    align-items: center;
    gap: 8px;
    border-bottom: 1px solid var(--cyan-divider-color);
    color: var(--cyan-nav-header-color);
  }
  :host div.sectionBody {
    transform: scaleY(1);
    transform-origin: top;
    transition: all 0.3s ease;
  }
  :host div.sectionBody[hidden] {
    transform: scaleY(0);
  }`

  @property({ type: String, reflect: true })
    label = '...'
  @property({ type: String, reflect: true })
    noun = ''
  @property({ type: Boolean, reflect: true })
    folds = false
  @property({ type: Boolean, reflect: true })
    open = true

  render () {
    return html`<section>
        <div class="sectionHeader">
          ${this.noun ? html`<cyan-icon small noun="${this.noun}"></cyan-icon>` : html``}
          <div class="oneLiner">${this.label}</div>
          ${this.folds ? html`<cyan-spacer></cyan-spacer>
            <cyan-button
              @click=${() => this.open = !this.open}
              text
              small
              noun="${this.open ? 'close' : 'chevron-down' }"></cyan-button>` : html``}
        </div>
        <div class="sectionBody" ?hidden=${!this.open}>
          <slot></slot>
        </div>
      </section>`
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cyan-nav-section': CyanNavSection
  }
}