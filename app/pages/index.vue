<script setup lang="ts">
const items = [
  {
    name: 'Verlust der Gesundheit',
    id: 'verlust-der-gesundheit',
    image: 'allee.jpg',
    imageAltText: 'Baumallee im Sonnenuntergang',
    sections: [
      'Eine ernsthafte Erkrankung, <strong>körperlich oder psychisch</strong>, bricht manchmal in unser Leben ein, wie ein Dieb in der Nacht. Betroffene und ihre Familien fühlen sich in ihren Lebensentwürfen ausgebremst, vom Alltag abgehängt, von Menschen alleingelassen, vom Tod bedroht.',
      'Krankheit ist oft schwer zu tragen und in das eigene Leben einzuordnen. Diesen Weg als kranker Mensch und Familie alleine zu gehen, das kann immer wieder neu ein fast nicht zu leistender Kraftakt sein. Ich biete Ihnen hierbei Begleitung an. Zusammen können wir vielleicht die neue Situation besser einordnen und persönliche Ressourcen finden.',
    ],
  },
  {
    name: 'Trauer nach Tod',
    id: 'trauer-nach-tod',
    sections: [
      'Stirbt ein naher, vertrauter Mensch, dann geht eine einzigartige, persönliche Welt unter. Der Tod durch Krankheit, Unfall oder Suizid macht Angehörige und Zugehörige traurig, bereitet ihnen Schmerzen und Orientierungslosigkeit. Sie fühlen sich hinausgestoßen aus Vertrautem, um Zukunft betrogen. Nichts mehr scheint selbstverständlich.',
      'Ich biete Trauernden Raum, zu erzählen, was war und was ist. Und eine Ahnung davon zu bekommen, wie eine vergangene Geschichte durch Neues überschrieben werden kann.',
    ],
  },
  {
    name: 'Erkrankung eines Kindes',
    id: 'erkrankung-eines-kindes',
    image: 'rapsfeld.jpg',
    imageAltText: 'Gelb blühendes Rapsfeld',
    sections: [
      'Als Vater habe ich die lebensbedrohliche Erkrankung eines Kindes durchlebt. Die Sorgen, Nöte, Ängste und Fragen, die Eltern erleben, wenn ihr Kind schwer oder lebensbedrohlich erkrankt ist, sind mir als Vater und als Seelsorger in der Kinder- und Jugendmedizin vertraut.',
      'Ich möchte mein Wissen mit Ihnen teilen.',
    ],
  },
  {
    name: 'Verwaiste Eltern',
    id: 'verwaiste-eltern',
    sections: [
      'Wenn ein Kind stirbt, bereitet der Verlust des Kindes großen Schmerz;<br>sterben Träume und Hoffnungen;<br>gehen Welten unter;<br>ist nichts mehr, wie es war.',
      'Wenn ein Kind gestorben ist, biete ich Eltern verlässlichen Trauerraum, um zu erzählen, was war und was ist. Hier ist es möglich, Fragen, Nöte, Ängste, Sorgen, Konflikte anzusprechen; eigene Fähigkeiten und Fertigkeiten zu erkennen; persönliche Wege durch die Trauer zu entdecken und... eine Idee davon zu bekommen, was wieder werden kann.',
      'Ein <strong>Gruppenangebot</strong> biete ich in Zusammenarbeit mit dem Verein „<a class="link" href="https://www.verwaiste-eltern-aachen.de/" target="_blank" rel="nofollow noopener">Verwaiste Eltern Aachen e.V.</a>“ an. Wir treffen uns in regelmäßigen Abständen zum Gespräch.',
    ],
  },
  {
    name: 'Psychische Erkrankung und Angehörige',
    id: 'psychische-erkrankung-und-angehoerige',
    image: 'winterwanderweg.jpg',
    imageAltText: 'Schneebedeckter Winterwanderweg',
    sections: [
      'Niemand ist nur alleine krank. Die psychische Erkrankung von Angehörigen ist ein ungebetener Gast in der Familie. Alle leiden mit. Der familiäre Alltag ist geprägt von Angst, Ratlosigkeit, Überforderung, Vereinsamung und Schuldgefühlen. Diese Reaktionen sind nicht peinlich, kein Grund zur Scham, sondern schlichtweg normal.',
      'Ich biete Angehörigen an, ihnen zuzuhören, unterstütze die Einordnung und ermutige, eigene Handlungsmöglichkeiten zu entwickeln.',
    ],
  },
  {
    name: 'Angehörige und Zugehörige nach Suizid',
    id: 'angehoerige-und-zugehoerige-nach-suizid',
    sections: [
      'Mit jedem Suizidversuch oder Suizid sind mindestens sechs Angehörige Betroffen. Dazu Freund*innen.',
      'Ich biete eine wertschätzende Atmosphäre, in der  krisengeschüttelte Angehörige oder Zugehörige erzählen können von dem, was war und was ist. Mit der Zeit kann eine Ahnung davon wachsen, wie das Leben weitergehen kann.',
    ],
  },
  {
    name: 'Selbstbestimmtes Sterben',
    id: 'selbstbestimmtes-sterben',
    sections: [
      'Das Verfassungsgericht hat 2020 den Wunsch anerkannt, das eigene Leben durch assistierten Suizid zu beenden. Ich respektiere den Wunsch nach selbstbestimmtem Sterben.',
      'Jenseits medizinischer und juristischer Aspekte können sich auch ethische und spirituelle/geistliche Fragen stellen, Sorgen, Ängste und Zweifel auftreten. Ich biete Hilfe bei der Einordnung und Orientierung. Bei Unsicherheit suche ich mit nach Alternativen und helfe Ressourcen zu aktivieren.',
      'Vom Wunsch nach selbstbestimmten Sterben sind auch immer Angehörige betroffen. Ihren Gefühlen und Gedanken biete ich Zeit und Raum.',
      '<strong>Ich gehöre keiner Sterbehilfeorganisation an.<br>Ich biete keine Hilfe bei der Ausführung des Suizides.</strong>',
    ],
  },
];
</script>

<template>
  <div>
    <heading />

    <section class="section u-margin-top-l">
      <div class="u-max-page-width u-max-page-width--small">
        <div class="u-margin-bottom-xl">
          <NuxtImg
            class="u-portrait u-margin-auto"
            src="/portrait.jpg"
            alt="Portrait von Ulrich Roth"
            width="300"
          />
        </div>
        <h1 class="u-font-l u-margin-bottom-s">Herzlich willkommen auf meiner Homepage!</h1>
        <p class="u-font-m u-font-m--paragraph">
          Krankheit, Tod und Trauer waren die Themen der Menschen, die ich während meiner
          beruflichen Tätigkeit als Krankenhausseelsorger begleitet habe. Während dieser Zeit habe
          ich immer wieder gespürt, dass ich ein Herz für diese Menschen habe. Das ist weiterhin so.
        </p>
        <p class="u-font-m u-font-m--paragraph">
          Von Krankheit, Tod und Trauer betroffene Menschen brauchen einen Raum und die Zeit, von
          ihren Gefühlen zu erzählen, ihre Verletzungen auszusprechen und einen persönlichen Umgang
          mit ihrer Lebenssituation zu entwickeln. Dazu lade ich ein.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="u-max-page-width u-max-page-width--small">
        <h2 class="u-font-xl u-margin-bottom-s">Angebote</h2>

        <ul>
          <li v-for="item in items" :key="item.id">
            <NuxtLink :to="`#${item.id}`" external>{{ item.name }}</NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <section
      v-for="(item, index) in items"
      :id="item.id"
      :key="`#${item.id}`"
      class="section"
      :class="{ 'u-background-color-alternate': index % 2 === 0 }"
    >
      <div class="u-max-page-width u-max-page-width--small">
        <h2 class="u-font-l u-margin-bottom-s" v-html="item.name"></h2>
        <p
          v-for="section in item.sections"
          :key="section"
          class="u-font-m u-font-m--paragraph"
          v-html="section"
        />

        <NuxtLink class="button button--primary" to="/kontakt">Kontakt</NuxtLink>
        <div v-if="item.image" class="u-margin-top-xl">
          <NuxtImg class="image" :src="`${item.image}`" :alt="item.imageAltText" width="512" />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="u-max-page-width u-max-page-width--small">
        <p class="u-font-m">
          Für die Landschaftsfotos aus dem Drei-Länder-Eck danke ich
          <NuxtLink to="https://www.instagram.com/vivian_beks/" target="_blank" external
            >Vivian Beks</NuxtLink
          >.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.section {
  padding-top: var(--space-xl);
  padding-bottom: var(--space-xl);
}

.image {
  display: block;
  margin: 0 auto;
  border-radius: var(--border-radius-default);
}

@media (max-width: 567.98px) {
  .image {
    width: 90%;
  }
}
</style>
