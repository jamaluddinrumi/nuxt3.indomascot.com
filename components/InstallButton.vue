<script lang="ts" setup>

const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const { t } = useI18n({ useScope: "global" });

function install() {}

const deferredPrompt = ref(null);
</script>

<template>
  <div class="flex flex-col items-center px-0 hover:bg-transparent">
    <button
      class="gradient btn-outline btn flex w-fit cursor-pointer justify-center rounded-full border px-6 py-4 uppercase tracking-wide"
      :class="{ 'btn-disabled cursor-not-allowed': disabled }"
      @click="install()"
    >
      <Icon
        :name="`ion:logo-${icon}`"
        aria-hidden="true"
        class="mt-px mr-1 h-4 w-4"
      />
      <span class="mx-0.5 text-xs font-bold uppercase">{{ t("install") }}</span>
    </button>
    <label :for="id">
      <span
        class="bg-gradient-to-b bg-clip-text text-xs text-base-content"
        :class="disabled ? 'text-opacity-30' : 'text-opacity-60'"
      >
        (*) {{ t(`onlyOn.${icon === "apple" ? "ios" : icon}`) }}
      </span>
    </label>
  </div>
</template>

<style lang="scss" scoped></style>
