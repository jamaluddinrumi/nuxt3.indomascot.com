<script setup lang="ts">
import { useDark } from "@vueuse/core";

const isDark = useDark();

const localePath = useLocalePath();

const mainMenu = useMainMenu();

function openMainMenu() {
  // if (!mainMenu.get()) mainMenu.set(true);
  if (!mainMenu.value) {
    mainMenu.value = true;
  }
}

useHead({
  meta: [
    {
      name: "theme-color",
      content: computed(() => (isDark.value ? "#13111C" : "#8532CE")),
    },
  ],
});
</script>

<template>
  <header
    id="main-header"
    class="container sticky top-0 z-50 mx-auto grid max-w-sm flex-none content-center lg:max-w-6xl"
  >
    <div
      class="supports-backdrop-blur:bg-white/60 navbar h-[72px] px-5 backdrop-blur transition will-change-[filter]"
    >
      <div class="flex-1">
        <NuxtLink :href="UsePrependTrailingSlash(localePath('/'))">
          <IconIndomascotLogo />
        </NuxtLink>
      </div>
      <!-- main menu button -->
      <div class="flex-none">
        <button
          class="btn-shadow btn-gradient btn-primary btn ml-2 rounded-full px-6 pt-1 shadow-inner"
          @click="openMainMenu()"
        >
          <Icon name="ion-menu-sharp" class="mb-1 mr-0.5 h-5 w-5" />
          <span class="josefin-sans font-bold shadow-inner">MENU</span>
        </button>
      </div>
      <!-- END main menu button -->
    </div>
  </header>
</template>

<style lang="scss" scope></style>
