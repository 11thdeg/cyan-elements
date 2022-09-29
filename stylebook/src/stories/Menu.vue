<script setup lang="ts">
import { ref } from 'vue';

const open = ref(false)
</script>
<template>
  <article class="Column" id="Menu">
    <h1>Menu</h1>
    <section class="toolbar">
      <div style="text-align: right">
      <cyan-menu 
        :open="!open"
        @close="open = false"
        noun="mekanismi">
        <cyan-menu-item>aaa!</cyan-menu-item>
        <cyan-menu-item route="#menu">bbb!</cyan-menu-item>
        <cyan-menu-item noun="admin">ccc!</cyan-menu-item>
        <cyan-menu-item route="http://google.com" noun="google">ddd!</cyan-menu-item>
      </cyan-menu>
      </div>
    </section>
  </article>
</template>