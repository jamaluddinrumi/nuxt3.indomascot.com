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

    // console.log("-----");
    // console.log("path", path);
    // console.log("index", index);
    // console.log("href", href);

    // menus.forEach((item) =>
    //   console.log("item href", UsePrependTrailingSlash(localePath(item.href)))
    // );

    // console.log("/ ", UsePrependTrailingSlash(localePath("/")));

    // console.log("href", UsePrependTrailingSlash(localePath(href)));

    const menu = ref<BreadcrumbItem>(
      menus.find(
        (item) =>
          UsePrependTrailingSlash(localePath(item.href)) ===
          UsePrependTrailingSlash(localePath(href))
      )
    );

    // console.log("menu ", menu);

    const text = t(menu.value?.text);
    // console.log("text", text);

    parts.value.push({
      text,
      href,
    });
  });

  if (locale.value === "id") {
    parts.value.unshift({
      text: t("homepage"),
      href: localePath("/"),
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
          :href="part.href"
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
      </li>
    </SchemaOrgBreadcrumb>
  </nav>
</template>
