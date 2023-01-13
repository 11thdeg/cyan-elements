export * from './theme.sass'
import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('cn-dialog')
export class CyanDialog extends LitElement {
  static styles = css`
    :host dialog {
      border-radius: 16px;
      padding: var(--cn-padding);
      border: none;
      background: var(--cn-background-dialog, #002337);
      color: var(--cn-color-dialog, #fff);
      width: 640px;
      box-sizing: border-box;
      max-height: calc(100vh - 16px);
      position: relative;
    }
    @media screen and (max-width: 840px) {
      :host dialog {
        width: calc(100vw - 16px);
        width: calc(100vw - 16px);
      }
    }
    :host dialog::backdrop {
      background: hsla(202, 100%, 11%, 0.55);
    }
    :host nav.header {
      display: flex;
      gap: var(--cn-gap-column);
      color: var(--cn-color-dialog, #fff);
      position: absolute;
      top: 0px;
      left: 0px;
      background-color: var(--cn-background-dialog, #002337);
      padding: var(--cn-padding);
      width: 100%;
      height: 48px;
    }
    :host nav.header h3 {
      font-family: var(--cyan-font-family-headline-4);
      font-weight: var(--cyan-font-weight-headline-4);
      font-size: var(--cyan-font-size-headline-4);
      line-height: 48px;
      letter-spacing: var(--cyan-letter-spacing-headline-4);
      color: var(--cyan-color-heading-1);
      margin: 0;
      padding: 0;
      color: var(--cn-color-dialog-header, #fff);
    }
    :host .dialog-content {
      margin-top: 48px;
      overflow-y: scroll;
    }`

  private dialogId = 'cn-dialog'

  @property({ type: Boolean, reflect: true })
    open = false

  @property({ type: String, reflect: true })
    returnValue = ''

  @property({ type: String, reflect: true })
    title = 'A Random Dialog Appears!'

  connectedCallback () {
    super.connectedCallback()
    this.dialogId = `cn-dialog-${Math.random().toString(36).substring(2, 9)}`
    this.setAttribute('role', 'dialog')
    this.setAttribute('aria-labelledby', this.dialogId )
  }

  public close (returnValue?: string) {
    this.returnValue = returnValue || ''
    this.open = false
    const d = this.shadowRoot?.querySelector('dialog')
    d?.close()
    this.dispatchEvent(new Event('close'))
  }

  public showModal () {
    this.open = true
    const d = this.shadowRoot?.querySelector('dialog')
    d?.showModal()
  }

  public show () {
    // We only support modal dialogs to keep the UX consistent
    this.showModal()
  }

  protected cancel() {
    this.dispatchEvent(new Event('cancel'))
    this.close()
  }

  render () {
    return html`
      <dialog>
        <nav class="header">
          <cyan-button noun="close" text @click=${this.cancel} dark></cyan-button>
          <h3 class="downscaled" id=${this.dialogId}>${this.title}</h3>
        </nav>
        <div class="dialog-content">
          <slot></slot>
        </div>
      </dialog>
    `
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cn-dialog': CyanDialog
  }
}