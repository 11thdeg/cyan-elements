import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('cyan-tag')
export class CyanTag extends LitElement {
  
  static styles = css`
    :host {
      position: relative;
      display: inline-block;
      background-color: var(--cyan-tag-background-color);
      vertical-align: middle;
      height: 13px;
      padding: 5px 8px;
      padding-top: 4px;
      border-radius: 10px;
      color: var(--cyan-tag-color);
      margin: 2px 4px;
      text-decoration: none;
      font-size: 13px;
      line-height: 13px;
    }
    .action-noun{
      background-color: var(--cyan-tag-action-background-color);
      border-radius: 50%;
      height: 20px;
      width: 16px;
      padding: 0px 2px;
      margin: 0;
      position: absolute;
      right: 1px;
      top: 1px;
    }
    .TypeCaption{
      font-family: var(--cyan-text-font-family);
      font-size: 13px;
      font-weight: normal;
      letter-spacing: 0.4px;
    }
    .prepend {
      position: absolute;
      left: 3px;
      top: 1px;
    }
    .prepend + .caption {
      padding-left: 15px;
    }
    .action-noun + .caption {
      padding-right: 17px;
    }
    .prepend + .action-noun + .caption {
      padding-left: 15px;
      padding-right: 17px;
    }`

  @property({ type: String })
    label = ''
  @property({ type: String })
    noun = ''
  @property({ type: Boolean, reflect: true })
    selected = false
  @property({ type: Boolean, reflect: true })
    disabled = false
  @property({ type: String})
    action = ''

  render () {
    return html`
        ${this.noun ? html`<cyan-icon class="prepend" noun="${this.noun}" xsmall></cyan-icon>` : ''}
        ${this.action ? html`<span class="action-noun"><cyan-icon noun="${this.action}" xsmall></cyan-icon></span>` : ''}
        <span class="caption">${this.label}</span>
        
      `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-tag': CyanTag
  }
}
