<script lang="ts" setup>
defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

// mounted() {
//   jQuery.featherlight.prototype.afterContent = function () {
//     const caption = this.$currentTarget.find("img").attr("alt");
//     this.$instance.find(".caption").remove();
//     jQuery(
//       '<div class="caption text-center w-full font-semibold text-slate-300 mt-1">'
//     )
//       .text(caption)
//       .appendTo(this.$instance.find(".featherlight-content"));
//   };
//   jQuery.featherlight.prototype.onResize = function () {
//     this.$content.css("width", "").css("height", "");
//   };
// },
</script>

<template>
  <div v-editable="blok">
    <component
      :is="blok.component"
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>
