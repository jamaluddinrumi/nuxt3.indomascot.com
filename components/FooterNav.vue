<script setup lang="ts">
import { useI18n } from "vue-i18n";

const localePath = useLocalePath();

const menus = useMenus();

const { t } = useI18n();
</script>

<template>
  <div class="container mx-auto hidden lg:block">
    <nav role="navigation" class="mt-16 pb-8">
      <ul
        id="menu-bawah"
        class="flex flex-col justify-center lg:flex-row lg:space-x-4"
      >
        <li v-for="menu in menus" :key="menu.href">
          <NuxtLink
            class="link uppercase no-underline"
            :href="localePath(menu.href)"
            :aria-label="t(menu.text)"
          >
            <template v-if="menu.text === 'homepage'">
              <Icon
                id="nav-text"
                class="mb-2 lg:mr-1"
                name="ion-home"
                aria-hidden="true"
              />
            </template>
            <template v-else>
              <span id="nav-text" class="font-bold">
                {{ t(menu.text) }}
              </span>
            </template>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
[data-theme="dark"] {
  #nav-text {
    @apply text-idm-base-100;
  }
}

[data-theme="light"] {
  #nav-text {
    @apply text-idm-base-300;
  }
}
</style>
