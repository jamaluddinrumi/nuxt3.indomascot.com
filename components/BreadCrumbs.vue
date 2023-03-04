<script setup lang="ts">
const menus = useMenus();

const router = useRouter();

const localePath = useLocalePath();

const { t, locale } = useI18n();

const isHomepage = ref(false);

type BreadcrumbItem = {
  text: string;
  href: string;
};

const paths = ref([]);

const parts = ref([]);

function loadPaths() {
  paths.value = router.currentRoute.value.path
    .split("/")
    .filter((crumb) => crumb);

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

    const text = menu.value?.text;
    // console.log("text", text);

    parts.value.push({
      text,
      href,
    });
  });

  if (locale.value === "id") {
    parts.value.unshift({
      text: "homepage",
      href: localePath("/"),
    });
  }

  isHomepage.value =
    localePath(router.currentRoute.value.path) === localePath("/");
}

watch(router.currentRoute, () => {
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
    <ul>
      <li v-for="(part, index) in parts" :key="part.href">
        <NuxtLink
          :href="part.href"
          :alt="t(part.text)"
          :aria-label="t(part.text)"
          :aria-current="index === parts.length - 1 ? 'page' : false"
        >
          <template v-if="part.text === 'homepage'">
            <Icon
              class="!mb-1 text-idm-base-content"
              name="ion-home"
              aria-hidden="true"
            />
          </template>
          <template v-else>
            <span class="text-idm-base-content">
              {{ t(part.text) }}
            </span>
          </template>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
