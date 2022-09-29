import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { getCyanLightmode } from '../../utils/lightMode'

@customElement('cyan-loader')
export class CyanLoader extends LitElement {
  
  static styles = css`
    :host {
      display: block;
    }
    :host img {
      width: calc(3 * 12px);
      height: calc(3 * 12px);
    }
    :host([large]) {
      width: 100%;
      display: block;
      margin: 0 auto;
      width: calc(6 * 12px);
      height: calc(6 * 12px);
      border-radius: 50%;
      background: linear-gradient(-42deg,var(--chroma-secondary-g),var(--chroma-primary-i));
    }
    :host([large]) img {
      display: block;
      margin: 0;
      width: calc(6 * 12px);
      height: calc(6 * 12px);
      opacity: 0.5;
    }
    :host([inline]) {
      display: inline-block;
      margin: 0;
      line-height: 24px;
      height: 24px;
    }
    :host([inline]) img {
      height: 24px;
      margin: 0;
      padding: 0;
    }
  `
  @property({ type: Boolean, reflect: true })
    large = false

  @property({ type: Boolean, reflect: true })
    inline = false


  render () {
    const lightmode = getCyanLightmode()
    const animation = this.inline ? "loader-small" : "loader"
    return html`
      <img src="/proprietary/animated/${lightmode}/${animation}.svg" alt="Loading...">`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-loader': CyanLoader
  }
}
