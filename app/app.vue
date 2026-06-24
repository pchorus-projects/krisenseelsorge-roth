<script setup lang="ts">
import { SITE_TITLE } from '~~/utils/constants';

useHead({
  titleTemplate: (titleChunk) => (titleChunk ? `${titleChunk} - ${SITE_TITLE}` : SITE_TITLE),
  htmlAttrs: {
    lang: 'de',
  },
});
</script>

<template>
  <div class="layout">
    <main class="main-container">
      <div class="content">
        <NuxtPage />
      </div>

      <footer class="footer">
        <div class="footer-content u-max-page-width">
          <a class="footer-content__link" href="tel:+492411606036">+49 241 160 60 36</a>
          <a class="footer-content__link" href="mailto:info@krisenseelsorge-roth.de">
            info@krisenseelsorge-roth.de
          </a>
          <span class="footer-content__gap"></span>
          <NuxtLink class="footer-content__link" to="/impressum">Impressum</NuxtLink>
          <NuxtLink class="footer-content__link" to="/datenschutz">Datenschutz</NuxtLink>
        </div>
      </footer>
    </main>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables';

.layout {
  display: flex;
  align-items: stretch;
  height: 100vh;
}

.main-container {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
}

.content {
  flex: 1;
}

.footer {
  background-color: variables.$background-color-dark;
  color: white;
}

.footer-content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
  padding: 40px;

  &__link {
    color: white;
  }

  &__gap {
    flex: 1 1 auto;
  }
}

@media (max-width: 767.98px) {
  .footer-content {
    flex-direction: column;
    align-items: start;
  }
}
</style>
