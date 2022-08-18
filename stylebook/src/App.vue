<script setup lang="ts">
import Iconography from './stories/Iconography.vue';
import Intro from './Intro.vue';
</script>

<template>
  <div class="cyan--app">
    <div style="text-align:center; padding-top:12px">
      <cyan-icon noun="fox" xlarge></cyan-icon>
    </div>
    <div class="cyan-page"> 
      <Intro />
      <div class="bookLayout">
        <Iconography />
      </div>  
    </div>
  </div>
</template>
