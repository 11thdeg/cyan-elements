<template>
  <cyan-toolbar id="AppBar" class="rise-a">
    <cyan-hamburger-button />
    <cyan-icon noun="fox" />
    <cyan-toolbar-heading>Cyan Elements Stylebook</cyan-toolbar-heading>
    <cyan-spacer/>
    <cyan-lightmode-toggle />
    <cyan-menu />
  </cyan-toolbar>
</template>

<style>
#AppBar {
  position: fixed;
  width: 100vw;
  z-index: 90000;
}
</style>