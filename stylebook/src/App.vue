<script setup lang="ts">
import Iconography from './stories/Iconography.vue';
import Intro from './Intro.vue';
import Inputs from './stories/Inputs.vue';
</script>

<template>
  <div class="cyan--app">
    <div style="text-align:center; padding-top:12px">
      <cyan-icon noun="fox" xlarge></cyan-icon>
    </div>
    <div> 
      <Intro />
      <div class="cyan-view">
        <Iconography />
        <Inputs />
      </div>  
    </div>
  </div>
</template>
