<script setup lang="ts">
const menus = useMenus();

const route = useRoute();

const localePath = useLocalePath();

const { t, locale } = useI18n();

const isHomepage = ref(false);

const localRoute = useLocaleRoute();

const getRouteBaseName = useRouteBaseName();

type BreadcrumbItem = {
  text: string;
  href: string;
};

const paths = ref([]);

const parts = ref([]);

function loadPaths() {
  paths.value = route.path.split("/").filter((crumb) => crumb);

  parts.value = [];

  paths.value.forEach((path: string, index: number) => {
    const href = `/${paths.value.slice(0, index + 1).join("/")}`;

    const item = href;

    const menu = ref<BreadcrumbItem>(
      menus.find(
        (item) =>
          UsePrependTrailingSlash(localePath(item.href)) ===
          UsePrependTrailingSlash(localePath(href))
      )
    );

    const text = t(menu.value?.text);

    const name = text;

    parts.value.push({
      href,
      text,
      item,
      name,
    });
  });

  if (locale.value === "id") {
    parts.value.unshift({
      href: localePath("/"),
      text: t("homepage"),
      item: localePath("/"),
      name: t("homepage"),
    });
  }

  isHomepage.value = localePath(route.path) === localePath("/");
}

watch(route, () => {
  loadPaths();
});

loadPaths();
</script>

<template>
  <nav
    v-if="!isHomepage"
    aria-label="Breadcrumbs"
    class="container navbar breadcrumbs mx-auto w-full max-w-sm px-5 lg:max-w-6xl"
  >
    <SchemaOrgBreadcrumb as="ul" :item-list-element="parts">
      <li v-for="(part, index) in parts" :key="part.href">
        <NuxtLink
          v-if="index < parts.length"
          :href="UsePrependTrailingSlash(part.href)"
          :alt="part.text"
          :aria-label="part.text"
          :aria-current="index === parts.length - 1 ? 'page' : false"
        >
          <template v-if="getRouteBaseName(localRoute(part.href)) === 'index'">
            <Icon
              class="text-idm-base-content !mb-1"
              name="ion-home"
              aria-hidden="true"
            />
          </template>
          <template v-else>
            <span class="text-idm-base-content">
              {{ part.text }}
            </span>
          </template>
        </NuxtLink>
        <span v-else class="text-idm-base-content">
          {{ part.text }}
        </span>
      </li>
    </SchemaOrgBreadcrumb>
  </nav>
</template>
