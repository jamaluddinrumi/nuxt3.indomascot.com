<script setup lang="ts">
const route = useRoute();

const { locale } = useI18n();

const storyblokStories = useStories();

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get(`cdn/stories`, {
  content_type: "page",
  version: "draft",
});
const stories = data.stories as Array<object>;

const path = route.hash ? route.path : route.fullPath;
const storyPath = storyblokStories[locale.value][UsePrependTrailingSlash(path)];
const { content } = stories.find((story) => story.full_slug === storyPath);
const meta = content.meta;

watchEffect(() => {
  useSeoMeta({
    title: meta.title,
    description: meta.description,
    ogImage: () => meta.og_image,
  });
});

const homepageStory = await useAsyncStoryblok("halaman-depan", {
  version: "draft",
});

const portfolioStory = await storyblokApi.get("cdn/stories/badut-maskot", {
  version: "draft",
});

const photos = ref(new Array());

photos.value = portfolioStory.data.story.content.body[0].columns
  .slice(-10)
  .reverse();
</script>

<template>
  <PagesIndexSectionHero />
  <PagesIndexSectionClients />
  <PagesIndexSectionDefinition />
  <PagesIndexSectionVisionMision />
  <PagesIndexSectionFeaturedService />
  <PagesIndexSectionPortfolio :content="homepageStory.content" />
  <PagesIndexSectionLatestOrders :photos="photos" />
  <PagesIndexSectionFitting />
</template>
