<script lang="ts" setup>
import { onClickOutside, useDark, useStorage } from "@vueuse/core";
import { Dimension } from "@/composables/dimension";

const router = useRouter();

const route = router.currentRoute;

const { isDesktop } = useDevice();

const isDark = useDark();

const themes = ref(["light", "dark"]);

const theme = computed({
  get() {
    return isDark.value ? "dark" : "light";
  },
  set(theme) {
    isDark.value = theme === "dark" ? true : false;
  },
});

const localePath = useLocalePath();

const { t, availableLocales, locale } = useI18n();

const menuHalaman = ref(null);

const menus = useMenus();

const mainMenu = useMainMenu();

onClickOutside(menuHalaman, () => (mainMenu.value = false));

const browserDimension = ref<Dimension>(0);

const switchLanguage = ref(function (event: Event) {});

const switchTheme = ref(function (event: Event) {});

onMounted(() => {
  browserDimension.value = getBrowserHeight();

  switchLanguage.value = function (event: Event) {
    const lang = event.target.value;

    mainMenu.value = false;

    locale.value = lang;

    navigateTo(localePath("", lang));
  };

  switchTheme.value = function (event: Event) {
    const theme = event.target.value;

    mainMenu.value = false;

    const colorScheme = useStorage("vueuse-color-scheme", "dark");

    colorScheme.value = theme;

    document.documentElement.setAttribute("data-theme", theme);
  };
});
</script>

<template>
  <div
    v-if="mainMenu"
    id="main-menu"
    v-motion
    :initial="{
      y: -browserDimension.height,
    }"
    :enter="{
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 25,
        mass: 0.5,
        delay: 10,
      },
    }"
    :leave="{
      y: -browserDimension.height,
    }"
    class="fixed top-0 left-0 z-[9999] mx-auto h-screen w-screen max-w-none overflow-y-scroll backdrop-blur-3xl"
    style="-webkit-transform: translate3d(0, 0, 0)"
  >
    <div class="relative">
      <nav
        class="grid min-h-screen place-content-center overflow-y-scroll pt-16 pb-40 lg:pb-20"
      >
        <ul id="menu-halaman" ref="menuHalaman" class="vertical justify menu">
          <li v-for="menu in menus" :key="menu.text" class="my-0.5">
            <NuxtLink
              class="flex justify-center rounded-full p-4 focus-visible:ring focus-visible:ring-indomascot-yellow"
              :class="{
                'btn-shadow btn-gradient active':
                  menu.href ===
                  (route.path || UsePrependTrailingSlash(route.path)),
              }"
              :href="localePath(menu.href)"
              :aria-label="t(menu.text)"
              @click="mainMenu = false"
            >
              <span class="josefin-sans text-base font-bold uppercase">
                {{ t(menu.text) }}
              </span>
            </NuxtLink>
          </li>
          <li class="my-2">
            <div class="form-control hover:bg-transparent">
              <label class="label">
                <span class="label-text">{{ t("chooseLanguage") }}:</span>
              </label>
              <select
                v-model="locale"
                class="select-bordered select w-full max-w-xs"
                @change="switchLanguage"
              >
                <option
                  v-for="availableLocale in availableLocales"
                  :key="availableLocale"
                  :value="availableLocale"
                  :selected="availableLocale === locale ? true : false"
                >
                  {{ t(`language.${availableLocale}`) }}
                </option>
              </select>
            </div>
          </li>
          <li class="my-2">
            <div class="form-control hover:bg-transparent">
              <label class="label">
                <span class="label-text">{{ t("chooseTheme") }}:</span>
              </label>
              <select
                v-model="theme"
                class="select-bordered select w-full max-w-xs"
                data-choose-theme
                @change="switchTheme"
              >
                <option
                  v-for="themeItem in themes"
                  :key="themeItem"
                  :value="themeItem"
                  :selected="themeItem === theme ? true : false"
                >
                  {{ t(themeItem) }}
                </option>
              </select>
            </div>
          </li>
          <li class="mx-auto mt-11 flex w-fit justify-center lg:hidden">
            <InstallButton :disabled="isDesktop" icon="apple" />
          </li>
          <li class="mx-auto mt-2 flex w-fit justify-center lg:hidden">
            <InstallButton :disabled="isDesktop" icon="android" />
          </li>
          <li class="mx-auto mt-2 mb-4 flex w-fit justify-center lg:hidden">
            <InstallButton icon="chrome" />
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
[data-theme="dark"] {
  #main-menu {
    @apply bg-base-300/70;
  }
}

[data-theme="light"] {
  #main-menu {
    @apply bg-base-100/70;
  }
}
</style>
