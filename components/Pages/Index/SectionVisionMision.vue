<script lang="ts" setup>
import { startCase } from "lodash-es";

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <div
    id="visi-misi"
    class="grid w-screen grid-cols-1 lg:mt-10 lg:mt-24 lg:-ml-0 lg:w-auto lg:grid-cols-2"
  >
    <div
      class="left order-2 mt-8 grid place-content-center px-[2.25px] lg:order-1 lg:mt-0 lg:px-0"
    >
      <h3
        id="misi-kami"
        class="px-4 text-center text-xl font-semibold leading-8 lg:px-8 lg:text-3xl lg:leading-10"
      >
        {{ t("yourSuccess") }}
      </h3>
      <i18n-t
        id="peran-kami-produsen-kostum-badut-maskot"
        keypath="brandMarketingIsImportant"
        tag="p"
        scope="global"
        class="mt-2 px-4 text-left text-center leading-loose lg:mt-4 lg:px-8"
      >
        <template #marketing>
          <span class="italic">
            {{ startCase(t("marketing")) }}
          </span>
        </template>
        <template #challenging>
          <span class="italic">
            {{ t("challenging") }}
          </span>
        </template>
        <template #eventMarketing>
          <span class="italic">
            {{ t("eventMarketing") }}
          </span>
        </template>
      </i18n-t>
    </div>
    <div class="right order-1 lg:order-2">
      <NuxtImg
        provider="storyblok"
        class="lg:rounded-xl lg:rounded-tr-lg lg:border-4 lg:border-small-title lg:shadow-2xl lg:shadow-small-title/80"
        loading="lazy"
        src="https://a.storyblok.com/f/118728/973x903/647fab1977/all-grab-mascots-gradient.jpg"
        alt="all grab mascots"
        width="576"
        height="513"
        sizes="xs:320px"
        background="auto"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
[data-theme="light"] {
  #misi-kami {
    @apply text-small-title-darken;
  }
}

[data-theme="dark"] {
  #misi-kami {
    @apply text-small-title;
  }
}
</style>
