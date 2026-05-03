<script setup lang="ts">
useMeta('Kontakt', 'Kontakt');
const onSubmit = (event: SubmitEvent) => {
  const submitter = event.submitter;
  if (submitter instanceof HTMLButtonElement) {
    const isValid = submitter.form?.checkValidity() ?? false;
    submitter.form?.classList.add('submitted');

    if (!isValid) {
      event.preventDefault();
    }
  }
};
</script>

<template>
  <div>
    <heading />
    <div class="u-max-page-width">
      <h1 class="u-font-xl u-margin-top-xl u-margin-bottom-l">Kontakt</h1>

      <div class="address u-margin-bottom-xl">
        <div>
          <h2 class="u-font-l u-margin-bottom-m">Anschrift</h2>
          <p class="u-font-m">
            Ulrich Roth<br />
            Bismarckstraße 87<br />
            52066 Aachen<br /><br />

            Tel.: <a href="tel:+492411606036">+49 241 160 60 36</a><br />
            E-Mail: <a href="mailto:info@krisenseelsorge-roth.de">info@krisenseelsorge-roth.de</a>
          </p>
        </div>
        <NuxtImg
          class="address__image"
          src="/wiese.jpg"
          alt="Baum auf einer grünen Wiese"
          width="320"
        ></NuxtImg>
      </div>
      <h2 class="u-font-l u-margin-bottom-m">Kontaktformular</h2>

      <p class="u-font-m u-margin-bottom-s">
        Wenn Sie einen Kontakt wünschen, dann schreiben Sie mir bitte eine Nachricht. Ich melde mich
        zeitnah zurück.
      </p>

      <p class="u-font-m u-margin-bottom-xl">Honorar nach Vereinbarung</p>
      <p class="u-font-m u-margin-bottom-xl"><strong>Sie sind willkommen!</strong></p>

      <form
        name="kontakt"
        method="POST"
        action="/nachricht-gesendet/"
        @submit="onSubmit"
        novalidate
        data-netlify
        data-netlify-honeypot="bot-field"
      >
        <input name="bot-field" hidden readonly />
        <input name="form-name" value="kontakt" hidden readonly />

        <div class="form-element">
          <label for="email" class="form-element__label">Ihre Email-Adresse</label>
          <input id="email" name="email" class="form-element__input" required />
          <p class="form-element__error">Bitte geben Sie Ihre Email-Adresse ein.</p>
        </div>

        <div class="form-element">
          <label for="message" class="form-element__label">Ihre Nachricht</label>
          <textarea
            id="message"
            name="message"
            class="form-element__input"
            rows="8"
            required
          ></textarea>
          <p class="form-element__error">Bitte geben Sie eine Nachricht ein.</p>
        </div>

        <button class="button button--primary u-margin-bottom-xl" type="submit">Senden</button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'sass:color';
@use '@/assets/styles/variables';

.form-element {
  margin-bottom: var(--space-m);

  &__label {
    font-size: var(--font-size-m);
    display: block;
    color: var(--font-color-secondary);
    margin-bottom: var(--space-xs);
  }

  &__input {
    font-family: var(--font-family-default), serif;
    font-size: var(--font-size-m);
    outline: none;
    border: 1px solid transparent;
    background-color: color.adjust(variables.$base-color, $lightness: -6%);
    width: 100%;
    padding: var(--space-xs);
    border-radius: var(--border-radius-default);
    appearance: none;
    box-sizing: border-box;

    .submitted &:invalid {
      border: 1px solid var(--danger-color);
    }

    .submitted &:invalid + p.form-element__error {
      display: block;
      font-size: var(--font-size-m);
    }
  }

  &__error {
    color: var(--danger-color);
    display: none;
    margin: var(--space-xs) 0;
  }
}

.address {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__image {
    display: block;
    border-radius: var(--border-radius-default);
  }
}

@media (max-width: 767.98px) {
  .address {
    &__image {
      display: none;
    }
  }
}
</style>
