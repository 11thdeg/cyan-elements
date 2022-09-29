export function getCyanLightmode() {
  return document.body.classList.contains('cyan--mode--dark') ? 'dark' : 'light'
}