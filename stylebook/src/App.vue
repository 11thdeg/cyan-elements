<script setup lang="ts">
import Iconography from './stories/Iconography.vue';
import Intro from './Intro.vue';
import Inputs from './stories/Inputs.vue';
import Interactions from './stories/Interactions.vue';
import Menu from './stories/Menu.vue';
import Chroma from './stories/Chroma.vue';
import Atomics from './stories/Atomics.vue';
import Typography from './stories/Typography.vue';
import Button from './stories/Button.vue';
import { onMounted, ref } from 'vue';
import Toolbars from './stories/Toolbars.vue';
import AssetSelect from './stories/AssetSelect.vue';
import Markdown from './stories/Markdown.vue';
import Theming from './stories/Theming.vue';
import Editor from './stories/Editor.vue';
import Fabs from './stories/Fabs.vue';
import NavButton from './stories/NavButton.vue';
import Hamburger from './stories/Hamburger.vue';
import Headings from './stories/Headings.vue';
import AppBar from './components/AppBar.vue';
import { logDebug } from '../../src/utils/loghelpers'
import Textfield from './stories/Textfield.vue';
import Textarea from './stories/Textarea.vue';
import Select from './stories/Select.vue';
import Bubble from './stories/Bubble.vue';

const layout = ref('bookLayout')

const layouts = [
  { label: 'singleColumnLayout', value: 'singleColumnLayout' },
  { label: 'bookLayout', value: 'bookLayout' },
  { label: 'dashboardLayout', value: 'dashboardLayout' },
]

const keyboard = ref(false)

onMounted(() => {
  document.addEventListener('cyan-field-focus', () => {
    keyboard.value = true
  })
  document.addEventListener('cyan-field-blur', () => {
    keyboard.value = false
  })
  document.addEventListener('cyan-mode-dark', () => {
    logDebug('cyan-mode-dark')
  })
  document.addEventListener('cyan-mode-light', () => {
    logDebug('cyan-mode-light')
  })
})
</script>

<template>
  <div class="cyan--app" style="margin: 0; padding: 0">
    <AppBar :keyboard="keyboard"/>
    <div style="text-align:center; padding:12px 0; border-bottom: solid 1px var(--chroma-primary-d); padding-top: 72px">
      <h1><cyan-icon noun="fox" large></cyan-icon>Cyan elements stylebook</h1>
      <div style="max-width: 300px;margin: 0 auto">
        <cyan-select label="Layout mode" :options="layouts" :value="layout" @change="layout = $event.target.value"/>
      </div>
    </div>
    <main id="layout" :class="layout"> 
      <Intro />
      <Button />
      <NavButton />
      <Textarea />
      <Bubble />
      <Select />
      <Textfield />
      <Atomics />
      <Headings />
      <Hamburger />
      <Typography />
      <Editor />
      <Inputs /> 
      
      <Iconography />
      
      <Fabs />
      <Interactions />      
      <Theming />
      <AssetSelect />
      <Toolbars /> 
      <Chroma />
      <Menu />
      <Markdown />
    </main>
  </div>
</template>
