<script setup lang="ts">
const { isDesktop } = useDevice();
</script>

<template>
  <ul class="ml-0 list-outside list-none text-left">
    <li class="mb-3 flex justify-center">
      <InstallButton :disabled="isDesktop" icon="apple" />
    </li>
    <li class="mb-3 flex justify-center">
      <InstallButton :disabled="isDesktop" icon="android" />
    </li>
    <li class="mb-3 flex justify-center">
      <InstallButton icon="chrome" />
    </li>
  </ul>
</template>
