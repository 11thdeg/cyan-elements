<template>
  <article class="Column">
    <h2>Buttons</h2>

    <h3>Basic</h3>
    <cyan-button label="Label"></cyan-button>
    <cyan-button label="Icon" noun="discussion"></cyan-button>
    <cyan-button label="Not Working yet" noun="facebook" working="false"></cyan-button>
    <cyan-button label="Working" noun="monsters" working="true"></cyan-button>
    <cyan-button label="Disabled" noun="google" disabled="true"></cyan-button>

    <h3>Text</h3>
    <cyan-button text label="Label"></cyan-button>
    <cyan-button text label="Icon" noun="discussion"></cyan-button>
    <cyan-button text label="Not Working yet" noun="stylebook" working="false"></cyan-button>
    <cyan-button text label="Working" noun="monsters" working="true"></cyan-button>
    <cyan-button text label="Disabled" noun="discussion" disabled="true"></cyan-button>

    <section>
      <h3>Tags</h3>
      <cyan-tag label="Label"></cyan-tag>
      <cyan-tag label="Icon" noun="stylebook"></cyan-tag>
      <cyan-tag label="Disabled" noun="delete" disabled="true"></cyan-tag>
      <cyan-tag label="Action" action="delete"></cyan-tag> 
    </section>
  </article>
</template>