<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  hex: string,
  var: string
}>()

const dark = computed(() => {
  const codes = [
    parseInt(props.hex.substring(1, 3), 16),
    parseInt(props.hex.substring(3, 5), 16),
    parseInt(props.hex.substring(5, 7), 16) 
  ]
  const hsp = Math.sqrt(
    0.299 * codes[0] * codes[0] +
    0.587 * codes[1] * codes[1] +
    0.114 * codes[2] * codes[2]
  )
  return hsp < 127.5
})
</script>

<template>
  <div class="ColorDemo" :class="{ onDark: dark }" :style="`background-color: ${hex}`">
    <span class="ColorDemo__hex">{{ hex }}</span>
    <span class="ColorDemo__var">{{ var }}</span>
  </div>
</template>

<style lang="sass" scoped>
.ColorDemo
  margin: 2px
  padding: 2px
  line-height: 18px
  font-size: 14px
  color: black
  display: flex
  gap: 22px
  border-radius: 6px
  height: 20px
  .ColorDemo__hex
    width: 80px
    padding-left: 20px
  &.onDark
    color: white
</style>