<script setup lang="ts">
useMeta('Nachricht gesendet', 'Ihre Nachricht wurde erfolgreich gesendet. Vielen Dank!');
</script>

<template>
  <div class="u-max-page-width">
    <h1 class="heading heading--xxl heading--xxl-paragraph u-margin-top-l">Vielen Dank!</h1>

    <p class="u-font-m">Ihre Nachricht wurde gesendet.</p>
    <p class="u-font-m u-font-m--paragraph">Ich werde mich schnellstmöglich bei Ihnen melden.</p>

    <NuxtLink to="/">Zurück zur Startseite</NuxtLink>
  </div>
</template>
