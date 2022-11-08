export * from './theme.sass'
import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CyanThemedElement } from '../../cyan-themed-element'


@customElement('cyan-bubble')
export class CyanBubble extends CyanThemedElement {

  static styles = css`
    :host {
      display: block;
      background: var(--cyan-background-bubble);
      border-radius: 0 8px 8px 8px;
      padding: 8px;
      margin: 0;
      position: relative;
    }
    :host(:not([reply])) {
      margin-left: 16px;
    }
    :host(:not([reply])):after {
      content: "";
      position: absolute;
      top: 0;
      border-style: solid;
      border-color: transparent var(--cyan-background-bubble);
      left: -16px;
      border-width: 0 16px 16px 0;
      bottom: auto;
    }
    :host([reply]){
      background: var(--cyan-background-bubble-reply);
      border-radius: 8px 0px 8px 8px;
      margin-right: 16px;
    }
    :host([reply]):after {
      content: "";
      position: absolute;
      top: 0;
      border-style: solid;
      border-color: transparent var(--cyan-background-bubble-reply);
      right: -16px;
      border-width: 0px 0px 16px 16px;
      bottom: auto;
    }`

  @property({ type: Boolean, reflect: true })
    reply = false 

  render () {
    return html`<slot></slot>`
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cyan-bubble': CyanBubble
  }
}
