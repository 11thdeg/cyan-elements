<script setup lang="ts">
import Iconography from './stories/Iconography.vue';
</script>

<template>
  <div>
    <img src="/proprietary/icons/dark/fox.svg" alt="aa" style="height:128px; margin: 0 auto; display: block;"/>
    <cyan-icon noun="fox"></cyan-icon>
    <cyan-lightmode-toggle label="Dark/Light mode"></cyan-lightmode-toggle>
    <div class="bookLayout">
      <Iconography />
    </div>
  </div>
</template>
