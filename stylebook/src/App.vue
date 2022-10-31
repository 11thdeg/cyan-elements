<script setup lang="ts">
import Iconography from './stories/Iconography.vue';
import Intro from './Intro.vue';
import Inputs from './stories/Inputs.vue';
import Interactions from './stories/Interactions.vue';
import Menu from './stories/Menu.vue';
import Chroma from './stories/Chroma.vue';
import Atomics from './stories/Atomics.vue';
import Typography from './stories/Typography.vue';
import Buttons from './stories/Buttons.vue';
import { ref } from 'vue';
import Toolbars from './stories/Toolbars.vue';
import AssetSelect from './stories/AssetSelect.vue';
import Markdown from './stories/Markdown.vue';
import Theming from './stories/Theming.vue';
import Editor from './stories/Editor.vue';
import Fabs from './stories/Fabs.vue';
import NavButtons from './stories/NavButtons.vue';
import Hamburger from './stories/Hamburger.vue';
import Headings from './stories/Headings.vue';
import AppBar from './components/AppBar.vue';

const layout = ref('bookLayout')

const layouts = [
  { label: 'singleColumnLayout', value: 'singleColumnLayout' },
  { label: 'bookLayout', value: 'bookLayout' },
  { label: 'dashboardLayout', value: 'dashboardLayout' },
]
</script>

<template>
  <div class="cyan--app" style="margin: 0; padding: 0">
    <AppBar />
    <div style="text-align:center; padding:12px 0; border-bottom: solid 1px var(--chroma-primary-d); padding-top: 72px">
      <h1><cyan-icon noun="fox" large></cyan-icon>Cyan elements stylebook</h1>
      <div style="max-width: 300px;margin: 0 auto">
        <cyan-select label="Layout mode" :options="layouts" :value="layout" @change="layout = $event.target.value"/>
      </div>
    </div>
    <main id="layout" :class="layout"> 
      <Intro />
      <Atomics />
      <Headings />
      <Hamburger />
      <Typography />
      <Editor />
      <Inputs /> 
      <NavButtons />
      <Iconography />
      <Buttons />
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
