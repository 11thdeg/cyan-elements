<script lang="ts" setup>
import { ref } from 'vue';

const active = ref(false)
</script>

<template>
  <article class="Column">
    <h1>Hamburger</h1>
    <section>
      <h4>In a Toolbar</h4>
      <cyan-toolbar class="rise-a">
        <cyan-hamburger-button :active="false"/>
        <cyan-spacer />
        <cyan-hamburger-button :active="true" />
      </cyan-toolbar>
    </section>
    <section id="floaterContainer">
      <h4>Absolute</h4>
      <cyan-hamburger-button id="floater" :active="active" @active="active = $event.detail" :class="{ derail: active }"/>
    </section>
  </article>
</template>

<style scoped>
#floaterContainer {
  position: relative;
}
#floater {
  position: absolute;
  top: 34px;
  right: 8px;
  transition: all 0.3s ease-in-out;
}
#floater.derail {
  left: 8px;
}

</style>