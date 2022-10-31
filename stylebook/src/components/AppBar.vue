<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps<{
  keyboard: boolean
}>()
</script>

<template>
  <cyan-toolbar id="AppBar" class="rise-a">
    <cyan-hamburger-button />
    <cyan-icon noun="fox" />
    <cyan-toolbar-heading>Cyan Elements Stylebook</cyan-toolbar-heading>
    <cyan-spacer/>
    <cyan-icon noun="edit" v-if="keyboard" />
    <cyan-lightmode-toggle />
    <cyan-menu />
  </cyan-toolbar>
</template>

<style>
#AppBar {
  position: fixed;
  width: 100vw;
  z-index: 90000;
}
</style>