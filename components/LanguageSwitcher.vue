<script lang="ts" setup>
import { ref } from "vue";

const localeChanger = ref("");

const { t, locale } = useI18n({ useScope: "global" });
</script>

<template>
  <div id="locale-changer">
    <select ref="localeChanger" v-model="$i18n.locale">
      <option
        v-for="locale in $i18n.availableLocales"
        :key="`locale-${locale}`"
        :value="locale"
      >
        {{ locale }}
      </option>
    </select>
    {{ t("title") }}
  </div>
</template>
