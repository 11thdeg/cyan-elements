import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '../../src/index.ts'

createApp(App).mount('#app')

document.body.classList.add('cyan--themed')
