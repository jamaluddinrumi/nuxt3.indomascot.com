<script setup>
import "@fontsource/bangers/400.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/josefin-sans/100.css";
import "@fontsource/josefin-sans/300.css";
import "@fontsource/josefin-sans/400.css";
import "@fontsource/josefin-sans/600.css";
import "@fontsource/josefin-sans/700.css";
import { useStorage } from "@vueuse/core";
import { themeChange } from "theme-change";

const { locale } = useI18n();

watchEffect(() => {
  useHead({
    htmlAttrs: [{ lang: locale.value }],
  });
});

const colorScheme = useStorage("vueuse-color-scheme", "dark");

onMounted(() => {
  themeChange(false);

  document.documentElement.setAttribute("data-theme", colorScheme.value);
});
</script>

<template>
  <NuxtLoadingIndicator color="#29d" :height="2" :throttle="0" />
  <BaseHeader />
  <main class="container mx-auto min-h-screen lg:max-w-6xl">
    <BreadCrumbs />
    <NuxtPage />
  </main>
  <BaseFooter />
  <MainMenu />
</template>

<style lang="scss">
::-moz-selection {
  /* Code for Firefox */
  color: #fefefe;
  background: hsl(var(--p));
}

::selection {
  color: #fefefe;
  background: hsl(var(--p));
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6,
a {
  font-family: "Josefin Sans", serif;
}

.josefin-sans {
  font-family: "Josefin Sans", serif;
}

.bangers {
  font-family: "Bangers", sans-serif;
  @apply tracking-wide;
}

body {
  @apply bg-body bg-gradient;
}
</style>
