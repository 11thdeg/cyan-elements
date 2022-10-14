<script lang="ts" setup>
function alert () {
  window.alert('Hello world!')
}
</script>
<template>
  <article class="Column card rise-a">
    <a href="http://skaldbase.web.app">
      <cyan-nav-button noun="outlink">Outlink example here</cyan-nav-button>
    </a>
    <cyan-nav-button noun="avatar" compact>Compact version</cyan-nav-button>
    <cyan-nav-button noun="outlink" @click="alert">AtClick Alert</cyan-nav-button>
  </article>
</template>