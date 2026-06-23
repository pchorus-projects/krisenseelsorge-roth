<script setup lang="ts">
import { navItems } from '~~/utils/constants';
</script>
<template>
  <div class="heading">
    <NuxtLink class="heading__text" to="/">
      <p class="heading-name u-font-xl">Ulrich Roth</p>
      <h2 class="heading-title">Krisen- und Trauerseelsorge</h2>
    </NuxtLink>
  </div>

  <nav class="nav u-background-color-alternate">
    <NuxtLink
      v-for="navItem in navItems"
      :key="navItem.to"
      class="nav__item"
      :to="navItem.to"
      external
    >
      {{ navItem.name }}
    </NuxtLink>
  </nav>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables';

.heading {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-l) var(--space-m);

  background: variables.$background-color-alternate
    linear-gradient(
      180deg,
      rgba(245, 242, 237, 1) 0%,
      rgba(245, 242, 237, 1) 35%,
      variables.$background-color-default 100%
    );
}

.heading__text {
  text-align: center;
  color: var(--font-color-default);

  &:hover {
    text-decoration: none;
  }
}

.heading-name {
  text-transform: uppercase;
}

.heading-title {
  font-size: 29px;
  font-weight: lighter;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-m);
  text-transform: uppercase;
}

.heading-divider {
  width: 120px;
  height: 2px;
  background-color: var(--font-color-default);
  border: 0;
  margin: 24px 0 24px 0;
}

/* TODO: introduce max-width-mobile variable */
@media (max-width: 567.98px) {
  .heading {
    padding-top: var(--space-xxl);
  }
}
</style>
