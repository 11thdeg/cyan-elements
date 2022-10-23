<template>
  <article class="Column">
    <h1>Atomic CSS classes</h1>
    <p><cyan-code>hideOnMobile</cyan-code> hidden when the screen width is less than 600px.</p>
    <p><cyan-code>dontBreakOut</cyan-code> text does not break the container.</p>
    <p class="oneLiner">
      <cyan-code>oneLiner</cyan-code> forces the text to fit a single (24px, or 48px) line. --> And thus, here is
      a lot of text, that should be cut by an ellipsis.
    </p>
    <section>
      <h2>Chroma-box</h2>
      <div class="chroma-box-a card rise-a">
        <h3>Chroma-box-a</h3>
        <p><cyan-code>chroma-box-a</cyan-code> is a <cyan-code>block</cyan-code> element with a background color.</p>
      </div>
      <div class="chroma-box-b card rise-b">
        <h3>Chroma-box-b</h3>
        <p><cyan-code>chroma-box-b</cyan-code> is a <cyan-code>block</cyan-code> element with a background color.</p>
      </div>
      <div class="chroma-box-c card rise-c">
        <h3>Chroma-box-c</h3>
        <p><cyan-code>chroma-box-c</cyan-code> is a <cyan-code>block</cyan-code> element with a background color.</p>
      </div>

      <h3>Complex example of box use</h3>
      <div id="emailLoginForm" class="card chroma-box-a rise-a">
        <h3>Kirjaudu sähköpostilla</h3>
        <p class="TypeBody2">Voit kirjautua pelkän sähköpostiosoitteen avulla. Syötä osoitteesi allaolevaan kenttään ja paina kirjaudu. Lähetämme sähköpostiisi maagisen linkin, jonka avulla voit kirjautua Pelilaudalle.</p>
        <cyan-textfield label="Osoite"></cyan-textfield>
        <cyan-toolbar>
          <cyan-spacer></cyan-spacer>
          <cyan-button disabled label="Lähetä linkki"></cyan-button>
        </cyan-toolbar>
      </div>
    </section>
  </article>
</template>