<script lang="ts" setup>
const props = defineProps<{
  hex: string,
  var: string
}>()
</script>

<template>
  <div class="ColorDemo" :style="`background-color: ${hex}`">
    <span class="ColorDemo__hex">{{ hex }}</span>
    <span class="ColorDemo__var">{{ var }}</span>
  </div>
</template>