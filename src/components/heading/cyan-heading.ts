import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('cyan-heading')
export class CyanHeading extends LitElement {

  static styles = css`
    :host {
      display: block;
      max-height: 48px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    :host h1, :host h2, :host h3, :host h4 {
      font-family: var(--cyan-heading-font-family);
      text-overflow: ellipsis;
      color: var(--cyan-heading-color-a);
    }
    :host([zoomlevel="1"]) h1, :host([zoomlevel="1"]) h2, :host([zoomlevel="1"]) h3, :host([zoomlevel="1"]) h4 {
      font-size: 20px;
      letter-spacing: 0.15px;
      line-height: 24px;
      margin: 0;
      margin-bottom: 12px;
      padding: 0;
      font-weight: 200;
    }
    :host([zoomlevel="2"]) h1, :host([zoomlevel="2"]) h2, :host([zoomlevel="2"]) h3, :host([zoomlevel="2"]) h4 {
      font-size: 25px;
      letter-spacing: 0px;
      line-height: 36px;
      margin: 0;
      margin-top: 8px;
      padding: 0;
      margin-bottom: 12px;
      font-weight: 200;
    }
    :host([zoomlevel="3"]) h1, :host([zoomlevel="3"]) h2, :host([zoomlevel="3"]) h3, :host([zoomlevel="3"]) h4 {
      font-size: 34px;
      letter-spacing: 0.25px;
      line-height: 48px;
      margin: 0;
      padding: 0;
      margin-bottom: 24px;
      font-weight: 200;
    }
    :host([zoomlevel="4"]) h1, :host([zoomlevel="4"]) h2, :host([zoomlevel="4"]) h3, :host([zoomlevel="4"]) h4 {
      font-family: var(--cyan-heading-font-family);
      font-size: 48px;
      font-weight: 200;
      letter-spacing: 0px;
      line-height: 48px;
      margin: 0;
      padding: 0;
    }
    `

  @property({ type: Number, reflect: true })
    zoomLevel = 1

  @property({ type: String, reflect: true })
    label =''

  protected _level = 1 
  @property({ type: Number, reflect: true })
  get level() {
    return this._level
  }
  set level(value: number) {
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

  protected _resizeObserver:ResizeObserver|undefined

  connectedCallback() {
    super.connectedCallback();
    this._resizeObserver = new ResizeObserver((entries) => {
      const targetSize = this.label.length * (3 * this.zoomLevel + 4)
      // logDebug('cyan-heading', 'resizeObserver', entries[0].contentRect.width, targetSize, this.zoomLevel)
      if (targetSize > entries[0].contentRect.width) {
        if (this.zoomLevel > 1) {
          this.zoomLevel -= 1
        }
      }
      else if (targetSize + 20 < entries[0].contentRect.width) {
        if (this.zoomLevel < 6) {
          this.zoomLevel += 1
        }
      }
    });
    this._resizeObserver.observe(this)
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._resizeObserver) {
      this._resizeObserver.disconnect()
    }
  }

  render () {
    switch (this.level) {
    case 2:
      return html`<h2>${this.label}</h2>`
    case 3:
      return html`<h3>${this.label}</h3>`
    case 4:
      return html`<h4>${this.label}</h4>`   
    }
    // case 1:
    return html`<h1>${this.label}</h1>`
  }
}