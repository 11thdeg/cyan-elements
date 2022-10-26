<template>
  <article class="Column dontBreakOut" id="introduction">
    <h2>Intro</h2>
    <p>This is a light-weight stylebook for <cyan-code>cyan-elements</cyan-code>.</p>
    <section>
      <h3>[Dark] Light Mode</h3>

      <p class="TypeBody2">Cyan elements support dark / light mode natively, and with user selectable theming. 
        We expect that the document body has a class <cyan-code>cyan--themed</cyan-code> and will inject the
        rest of the styling and theme classes.</p>

      <cyan-lightmode-toggle label="Toggle Dark/Light mode"></cyan-lightmode-toggle>

      <cyan-toolbar class="rise-b" style="padding: 0 8px; border-radius: 4px; margin-top: 12px">
        <h4>In a toolbar</h4>
        <cyan-spacer />
        <cyan-lightmode-toggle></cyan-lightmode-toggle>
      </cyan-toolbar>
    </section>

    <section class="card rise-a" style="margin-top: var(--cyan-row-gap)">
      <h3>Layout Modes</h3>
      <p class="TypeBody2">We provide few layout modes for the "main" part of the app. These modes are responsive, and support mobile, desktop, and wide viewports</p>
    </section>
  </article>
</template>
