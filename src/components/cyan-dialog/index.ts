export * from './theme.sass'
import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CyanThemedElement } from '../../cyan-themed-element'

@customElement('cyan-dialog')
export class CyanDialog extends CyanThemedElement {
  static styles = css`
    :host {
      display: none;
    }
    :host([open]) {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: var(--cyan-background-dialog-backdrop, rgba(0, 0, 0, 0.1));
      // backdrop-filter: blur(3px);
      z-index: var(--cyan-z-index-dialog, 10000)
    }
    .dialog {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 8px;
      background: var(--cyan-background-dialog, black);
      border-radius: 12px;
      box-sizing: border-box;
      max-width: calc(100vw - 16px);
    }
    @media screen and (max-width: 600px) {
      .dialog {
        width: calc(100vw - 16px);
        max-width: calc(100vw - 16px);
        height: auto;
        max-height: calc(100vh - 16px);
        top: 8px;
        left: 8px;
        transform: none;
      }
    }
    .titlebar {
      display: flex;
      align-items: center;
      justify-content: left;
      gap: 8px;
    }
    .titlebar h2, .titlebar h3, .titlebar h4 {
      font-family: var(--cyan-font-family-headline-4);
      font-weight: var(--cyan-font-weight-headline-4);
      font-size: var(--cyan-font-size-headline-4);
      line-height: var(--cyan-line-height-headline-4);
      letter-spacing: var(--cyan-letter-spacing-headline-4);
      color: var(--cyan-color-dialog-title, white);
      margin: 0;
      padding: 0;
      flex-grow: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .content {
      padding: 8px;
    }`

  @property({ type: Boolean, reflect: true }) open = false
  @property({ type: String,  reflect: true }) title = ''

  onClose () {
    this.dispatchEvent(new CustomEvent('close'))
    this.open = false
  }

  handleKeydown (e: KeyboardEvent) {
    if (e.key === 'Escape') {
      this.onClose()
    }
    else if (e.key === 'Enter') {
      this.onClose()
    }
  }

  render () {
    return html`
      <article class="dialog">
        <section class="titlebar">
          <cyan-button
            dark
            tabindex="0"
            noun="close"
            text
            @keydown=${this.handleKeydown}
            @click=${this.onClose}></cyan-button>
          <h3>${this.title}</h3>  
          <slot name="title"></slot>
        </section>
        <section class="content">
          <slot></slot>
        </section>
      </article>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-dialog': CyanDialog
  }
}
