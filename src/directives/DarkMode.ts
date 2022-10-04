import { Directive, directive, PartInfo } from "lit/directive.js";
import { logDebug } from "../utils/loghelpers";

export function getCyanLightmode() {
  return document.body.classList.contains('cyan--mode--dark') ? 'dark' : 'light'
}

export class DarkMode extends Directive {
  mode = getCyanLightmode()
  constructor(partInfo: PartInfo) {
    super(partInfo);
    logDebug('DarkMode created');
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
  }

  render() {
    logDebug('DarkMode render', this.mode);
    return this.mode
  }
}
export const darkmode = directive(DarkMode)