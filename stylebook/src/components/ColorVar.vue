<script lang="ts" setup>
import { computed } from '@vue/reactivity';

const props = defineProps<{
  var: string
}>()

const style = computed(() => {
  return `background-color: var(${props.var})`
})
</script>

<template>
  <div class="ColorVar">
    <div class="demo rise-b" :style="style"></div>
    <p>{{ var }}</p>
  </div>
</template>

<style lang="sass" scoped>
.ColorVar
  display: flex
  flex-direction: row
  gap: 8px
  margin-bottom: 8px
  align-items: center
  p 
    margin: 0
    padding: 0
    font-size: 14px
    line-height: 18px
    font-family: monospace
    color: var(--cyan-color-text)
  .demo
    width: 24px
    height: 24px
    border-radius: 8px
</style>