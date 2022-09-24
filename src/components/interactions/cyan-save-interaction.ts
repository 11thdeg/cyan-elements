import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('cyan-save-interaction')
export class CyanSaveInteraction extends LitElement {
  
  static styles = css`
    :host {
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }
    :host([active]) {
      opacity: 1;
    }
    :host img {
      opacity: 0;
      height: 24px;
      width: 24px;
      transition: all 0.5s ease-in-out;
      display: block;
      margin: 0;
      padding: 0;
    }
    :host([active]) img {
      opacity: 1;
    }
    :host([large]) img {
      height: 48px;
      width: 48px;
    }
  `

  render () {
    return html`
      <img src="/proprietary/animated/puff.svg" alt="Saving">`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-save-interaction': CyanSaveInteraction
  }
}
