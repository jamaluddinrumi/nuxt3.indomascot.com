<script setup lang="ts">
const { isDesktop } = useDevice();
const { t } = useI18n({ useScope: "global" });

const props = defineProps({
  content: {
    type: Object,
    default: new Object(),
  },
});
</script>

<template>
  <div id="portfolio-homepage" class="mt-16">
    <div class="relative mx-auto w-fit">
      <div
        id="bg-blur"
        class="absolute h-10 w-60 blur-lg"
        :class="[isDesktop ? 'h-[40px] w-[240px]' : 'h-[24px] w-[145px]']"
      ></div>
      <h2 id="portfolio-title" class="relative mb-4 lg:mb-12">
        <span
          id="title-text"
          class="text-[1.5rem] font-semibold uppercase leading-8 lg:text-[2.5rem] lg:leading-[3rem]"
        >
          {{ t("portfolio") }}
        </span>
      </h2>
    </div>
    <StoryblokComponent v-if="content" :blok="content" />
  </div>
</template>

<style lang="scss" scoped>
[data-theme="dark"] {
  #title-text {
    @apply text-small-title;
  }
  #bg-blur {
    @apply bg-gradient-to-t from-small-title/20 to-railway/30;
  }
}

[data-theme="light"] {
  #title-text {
    @apply text-small-title-darken;
  }
  #bg-blur {
    @apply bg-gradient-to-t from-railway/10 to-small-title/10;
  }
}
</style>
