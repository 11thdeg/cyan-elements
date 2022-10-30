import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('cyan-toolbar-heading')
export class CyanToolbarHeading extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: 100%;
      flex-grow: 1;
      flex-shrink: 1;
      width: auto;
      overflow: hidden;
    }
    h1, h2, h3, h4 {
      margin: 0;
      padding: 0;
      font-family: var(--cyan-font-family-heading);
      font-size: var(--cyan-font-size-toolbar-heading);
      font-weight: var(--cyan-font-weight-toolbar-heading);
      letter-spacing: var(--cyan-letter-spacing-toolbar-heading);
      line-height: 48px;
      color: var(--cyan-color-toolbar-heading);
      max-height: 48px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    h3, h4 {
      color: var(--cyan-color-toolbar-heading-secondary);
    }
    /*@media screen and (max-width: 600px) {
      h1, h2, h3, h4 {
        line-height: 24px;
        white-space: pre-wrap;
      }
    }*/
  `

  protected _level = 1

  @property({ type: Number, reflect: true })
  get level () {
    return this._level
  }
  set level (value: number) {
    if (value > 4) {
      this._level = 4
    }
    else if (value < 1) {
      this._level = 1
    }
    else {
      this._level = value
    }
  }


  render () {
    let value = html``
    switch (this.level) {
    case 1: value = html`<h1><slot></slot></h1>`; break
    case 2: value = html`<h2><slot></slot></h2>`; break
    case 3: value = html`<h3><slot></slot></h3>`; break
    case 4: value = html`<h4><slot></slot></h4>`; break
    }

    return value
  }
}
    
declare global {
  interface HTMLElementTagNameMap {
    'cyan-toolbar-heading': CyanToolbarHeading
  }
}