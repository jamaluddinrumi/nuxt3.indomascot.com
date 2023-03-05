<script setup lang="ts">
const route = useRoute();

const { locale } = useI18n({ useScope: "global" });

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
</script>

<template>
  <div></div>
</template>
