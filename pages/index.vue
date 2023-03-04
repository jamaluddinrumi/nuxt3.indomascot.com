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
  useHead({
    title: meta.title,
    meta: [{ name: "description", content: meta.description }],
  });
});
</script>

<template>
  <div></div>
</template>
