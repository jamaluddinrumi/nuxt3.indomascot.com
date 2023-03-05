<script setup lang="ts">
const localePath = useLocalePath();

const menus = useMenus();

const { t, locale } = useI18n();
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
            :href="
              UsePrependTrailingSlash(
                localePath(
                  {
                    path: localePath(menu.href),
                    hash: menu.href.includes('#')
                      ? `#${menu.href.split('#').pop()}`
                      : undefined,
                  },
                  locale
                )
              )
            "
            :aria-label="t(menu.text)"
          >
            <template v-if="menu.text === 'homepage'">
              <Icon
                id="nav-text"
                class="text-idm-base-content mb-2 lg:mr-1"
                name="ion-home"
                aria-hidden="true"
              />
            </template>
            <template v-else>
              <span id="nav-text" class="text-idm-base-content font-bold">
                {{ t(menu.text) }}
              </span>
            </template>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
