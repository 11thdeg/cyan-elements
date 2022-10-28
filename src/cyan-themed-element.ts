import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class CyanThemedElement extends LitElement {
  @property({ type: Boolean, reflect: true })
    dark = false;
  @property({ type: Boolean, reflect: true })
    light = false;
  @property({ type: String })
    mode = 'light'

  observer: MutationObserver|undefined

  connectedCallback() {
    super.connectedCallback();
    this.mode = document.querySelector('.cyan--app')?.classList.contains('cyan-mode-dark') ? 'dark' : 'light'
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
                mutation.attributeName === 'class'
        ) {
          this.mode = (mutation.target as HTMLElement).classList.contains('cyan--mode--dark') ? 'dark' : 'light'
        }
      });
    });
    observer.observe(document.body, { attributes: true })
    this.observer = observer
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.observer) {
      this.observer.disconnect()
    }
  }
}