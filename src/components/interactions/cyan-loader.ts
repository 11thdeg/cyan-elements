import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CyanThemedElement } from '../../cyan-themed-element'

@customElement('cyan-loader')
export class CyanLoader extends CyanThemedElement {
  
  static styles = css`
    :host {
      display: block;
      position: relative;
      opacity: 0.9;
    }
    :host img {
      width: calc(6 * 12px);
      height: calc(6 * 12px);
    }
    :host([large]) {
      width: 100%;
      display: block;
      margin: 0 auto;
      width: calc(12 * 12px);
      height: calc(12 * 12px);
      border-radius: 50%;
      // background: linear-gradient(-42deg,var(--chroma-secondary-g),var(--chroma-primary-i));
      opacity: 0.5;
    }
    :host([large]) img {
      display: block;
      margin: 0;
      width: calc(12 * 12px);
      height: calc(12 * 12px);
      // opacity: 0.5;
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
    :host img.logo {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.2;
    }
  `
  @property({ type: Boolean, reflect: true })
    large = false

  @property({ type: Boolean, reflect: true })
    inline = false


  render () {
    const lightmode = this.mode
    const animation = this.inline ? 'loader-small' : 'loader'
    return html`
      <img src="/proprietary/animated/${lightmode}/${animation}.svg" alt="Loading...">
      ${ this.large ? html`<img class="logo" src="/proprietary/icons/${lightmode}/fox.svg">` : ''}`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-loader': CyanLoader
  }
}
