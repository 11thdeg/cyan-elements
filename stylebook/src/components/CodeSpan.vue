<script lang="ts" setup>
const props = defineProps<{
  code: string;
}>();
</script>

<template>
  <cyan-code>{{ code }}</cyan-code>
</template>