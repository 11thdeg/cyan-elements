<script setup lang="ts">
import { ref } from 'vue';

const disabled = ref(false)
</script>
<template>
  <article class="column" id="Menu">
    <h1>Menu</h1>
    <section class="toolbar">
      <div><cyan-toggle :checked="disabled" label="Loader 1" @change="disabled = !disabled"></cyan-toggle></div>
      <cyan-menu :disabled="disabled">
        <cyan-menu-item>aaa!</cyan-menu-item>
        <cyan-menu-item route="#menu">bbb!</cyan-menu-item>
        <cyan-menu-item noun="admin">ccc!</cyan-menu-item>
        <cyan-menu-item route="#menu" noun="mekanismi">ddd!</cyan-menu-item>
      </cyan-menu>
    </section>
  </article>
</template>