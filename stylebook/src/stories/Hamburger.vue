<template>
  <article class="Column">
    <h1>Hamburger</h1>
    <cyan-toolbar class="rise-a">
      <cyan-hamburger-button :active="false"/>
      <cyan-spacer />
      <cyan-hamburger-button :active="true" />
    </cyan-toolbar>
  </article>
</template>