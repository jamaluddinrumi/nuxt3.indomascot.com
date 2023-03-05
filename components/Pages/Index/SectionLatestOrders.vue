<script setup lang="ts">
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const props = defineProps({
  photos: {
    type: Array,
    default: new Array(),
  },
});

const { isDesktop } = useDevice();

const menus = useMenus();

const { t, locale } = useI18n();

const portfolioLink = ref(menus.find((item) => item.text === "portfolio"));

const portfolioHref = ref(portfolioLink.value.href);
const portfolioText = ref(portfolioLink.value.text);

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};

const dateOptions = ref({
  year: "numeric",
  month: "long",
  day: "numeric",
});

const modules = ref([Navigation, Pagination, EffectCoverflow]);
</script>

<template>
  <div class="relative mx-auto mt-12 mb-0 w-fit lg:mt-20 lg:mb-8">
    <div
      id="bg-blur"
      class="absolute blur-lg"
      :class="[isDesktop ? 'h-[40px] w-[190px]' : 'h-[24px] w-[125px]']"
    ></div>
    <h2 id="portfolio-title" class="relative mb-0">
      <span
        id="title-text"
        class="text-[1.5rem] font-semibold uppercase leading-8 lg:text-[2.5rem] lg:leading-[3rem]"
      >
        {{ t("newest") }}
      </span>
    </h2>
  </div>
  <swiper
    :modules="modules"
    effect="coverflow"
    :centered-slides="true"
    :grab-cursor="true"
    slides-per-view="auto"
    :space-between="0"
    :loop="false"
    :pagination="{ el: '.swiper-pagination', type: 'bullets' }"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    }"
    :mousewheel="{ invert: false, forceToAxis: true }"
    :initial-slide="isDesktop ? 1 : 0"
    class="min-h-min !py-4 pb-16"
  >
    <swiper-slide
      v-for="(photo, index) in photos"
      :key="index"
      class="portfolio-item max-w-full border border-slate-200 bg-white text-center shadow lg:max-w-fit"
    >
      <div
        v-show="photo.on_progress === false || photo.on_progress === undefined"
        class="relative z-10"
      >
        <span
          class="label absolute top-0 right-0 rounded bg-primary px-3 shadow-inner"
        >
          <IconOnFinal />
          <span class="ml-1 text-xs font-bold text-white">Final</span>
        </span>
      </div>
      <div v-show="photo.on_progress" class="relative z-10">
        <span
          class="label absolute top-0 right-0 rounded bg-indomascot-yellow px-3 shadow-inner"
        >
          <IconOnProgress />
          <span class="ml-1 text-xs font-bold text-white">On Progress</span>
        </span>
      </div>
      <a
        :href="`${photo.photo}/m/628x628`"
        rel="lightbox noopener"
        target="_blank"
        data-featherlight="image"
        :alt="photo.caption"
      >
        <NuxtImg
          provider="storyblok"
          width="371"
          height="371"
          :src="photo.photo"
          :alt="`${photo.caption} ${photo.caption !== '' ? '-' : ''}
          ${new Date(photo.uploaded_date).toLocaleDateString(
            $i18n.locale,
            dateOptions
          )}`"
          :title="photo.caption"
          background="auto"
        />
      </a>
      <figcaption class="mb-2 hidden h-7 text-center text-sm">
        {{ photo.caption }}
      </figcaption>
    </swiper-slide>
    <div class="swiper-button-prev left-[4%] -mt-16 lg:left-[2%]" />
    <div class="swiper-button-next right-[4%] -mt-16 lg:right-[2%]" />
    <div class="swiper-pagination" />
  </swiper>
  <div class="mb-8 mt-4 grid grid-cols-1 lg:mt-12">
    <div class="relative flex justify-center">
      <NuxtLink
        class="bg-gradient flex cursor-pointer justify-center rounded-full bg-primary px-6 py-4 uppercase tracking-wide shadow-2xl"
        :href="portfolioHref"
        :aria-label="t(portfolioText)"
      >
        <Icon
          name="ion-accessibility"
          class="mt-px mr-0.5 h-3 w-3 fill-neutral-content/90 text-neutral-content/90 lg:mt-0.5 lg:h-5 lg:w-5"
        />
        <span
          class="ml-0 mr-0.5 text-xs font-bold uppercase leading-normal text-neutral-content/90 lg:ml-0.5 lg:text-base"
        >
          {{ $t("showMore") }}
        </span>
      </NuxtLink>
      <span
        class="absolute left-[calc(50%_+_5.5rem)] top-0 -mt-1 -mr-1 flex h-5 w-5"
        :class="[
          locale === 'id'
            ? 'lg:left-[calc(50%_+_7rem)]'
            : 'lg:left-[calc(50%_+_4.5rem)]',
        ]"
      >
        <span
          class="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-t from-[#23c770] to-lime-400 opacity-75"
        />
        <span
          class="relative inline-flex h-5 w-5 rounded-full bg-gradient-radial from-[#45e992] to-[#23c770]"
        />
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
[data-theme="dark"] {
  #title-text {
    @apply text-small-title;
  }
  #bg-blur {
    @apply bg-gradient-to-t from-indigo-600/20 to-small-title-darken/20;
  }
}

[data-theme="light"] {
  #title-text {
    @apply text-small-title-darken;
  }
  #bg-blur {
    @apply bg-gradient-to-t from-indigo-300/20 to-small-title/30;
  }
}

.swiper {
  --swiper-theme-color: hsl(270, 60%, 52%);
  --swiper-pagination-bottom: 2rem;
}
</style>
