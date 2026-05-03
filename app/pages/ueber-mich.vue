<script setup lang="ts"></script>

<template>
  <div>
    <heading></heading>

    <section class="u-margin-top-xl u-max-page-width u-max-page-width--small">
      <h1 class="u-margin-bottom-m u-text-align-center">Über mich</h1>

      <div class="u-margin-bottom-xl">
        <NuxtImg
          class="u-portrait u-margin-auto"
          src="/portrait.jpg"
          alt="Portrait von Ulrich Roth"
          width="300"
        />
      </div>

      <p class="u-font-m u-font-m--paragraph">
        Geboren 1955, bin ich
        <strong>aufgewachsen in einer Zeit des Umbruchs, des Protestes, des Aufbruchs</strong>.
        Gesellschaftlich („Wir wollen mehr Demokratie wagen.“ W. Brandt, Bundeskanzler 1969-1974)
        und kirchlich (2. Vatikanisches Konzil). Aufgrund meiner Überzeugung, dass die christliche
        Botschaft befreien und heilen kann und der Lust, zementierte Strukturen in Gesellschaft und
        Kirche aufzubrechen und umzukrempeln,
        <strong>studierte ich Theologie, Philosophie und Pädagogik</strong> in Paderborn, Tübingen
        Köln und Bonn. Bis heute ist mir wichtig, über den eigenen Tellerrand hinauszuschauen. Ich
        stehe für Demokratie, Gleichberechtigung, Emanzipation und Vielfalt.
      </p>

      <p class="u-font-m u-font-m--paragraph">
        Am Ende der Ausbildung begann, neben der Familiengründung, meine berufliche Tätigkeit im
        kirchlichen Dienst. 26 Jahre war ich als
        <strong
          >Klinikseelsorger am Universitätsklinikum Aachen mit den Schwerpunkten Kinder- und
          Jugendmedizin sowie Psychiatrie, Psychotherapie und Psychosomatik</strong
        >
        tätig. Es waren meine besten beruflichen Jahre.
      </p>

      <p class="u-font-m u-font-m--paragraph">
        Heute gehören vier erwachsene Kinder mit Partner*in und acht Enkelkinder zu meiner Familie.
      </p>

      <p class="u-font-m u-font-m--paragraph">
        Meine Kompetenzen und Erfahrungen, die ich über die Jahre erworben habe, möchte ich
        weiterhin Menschen zur Verfügung stellen. Das kann in einmaligen Kontakten, kürzeren
        Gesprächszyklen oder in längeren Begleitungen geschehen.<br />
        <strong>Ich bin kein medizinischer Psychotherapeut.</strong><br />
        <strong>Ich bin im besten Sinne Seelsorger.</strong>
      </p>

      <p class="u-font-m u-font-m--paragraph">
        Darüber hinaus engagiere ich mich <strong>beim BRF/Eupen</strong> (Radio und Fernsehen in
        Ostbelgien) in den Formaten „Wort in den Tag“ und „Glaube Kirche Leben“.
      </p>

      <p class="u-font-m u-font-m--paragraph">
        In meinen Berufsjahren habe ich diese Zusatzqualifikationen erworben:
      </p>

      <ul>
        <li>Klinische – Seelsorge – Ausbildung (DGfP)</li>
        <li>Seelsorge mit psychisch Kranken (Träger: Die Diözesen in NRW)</li>
        <li>Kommunikationstrainer (EPL)</li>
        <li>Bibliodramaleiter</li>
        <li>Traumapädagogik (DeGPT)</li>
      </ul>

      <p class="u-font-m u-font-m--paragraph">
        Lust, meine Erfahrungen zu reflektieren, niederzuschreiben und weiterzugeben, hatte ich
        auch. Aber nicht alleine.
      </p>

      <p class="u-font-m u-font-m--paragraph">
        Die Reaktionen auf diese Veröffentlichungen zeigten, dass wir damit eine Lücke getroffen
        haben. Viele schätzen den offenen und ehrlichen Umgang mit dem, was schwer ist und sehen
        auch den Trost durch eine aktive, wertschätzende Erinnerungsarbeit.
      </p>
    </section>

    <section class="books u-max-page-width u-margin-bottom-xl">
      <book imageUrl="/buecher/wuerde-als-mass.jpg" title="Würde als Maß" />
      <book
        imageUrl="/buecher/da-spricht-man-nicht-drueber.jpg"
        title="Da spricht man nicht drüber"
      />
      <book imageUrl="/buecher/unterm-schatten-die-farben.jpg" title="Unterm Schatten die Farben" />
    </section>
  </div>
</template>

<style scoped lang="scss">
.books {
  display: flex;
  align-items: stretch;
  gap: var(--space-m);
}

.book-image {
  margin: 0;
}

@media (max-width: 1199.98px) {
  .books {
    flex-direction: column;
    align-items: center;
  }
}
</style>
