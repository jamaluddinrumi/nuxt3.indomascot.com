<script lang="ts" setup>
const props = defineProps({
  hide: {
    type: Boolean,
    default: false,
  },
});

const { t } = useI18n({ useScope: "global" });

const classHide = ref("translate-y-20 lg:translate-y-[626px] shadow-none");
const classShow = ref("translate-x-0 shadow-xl");

const appConfig = useAppConfig();
</script>

<template>
  <a
    id="floating-whatsapp"
    :href="appConfig.waUrl"
    class="floating-whatsapp focus-visible=outline-none link:text-white fixed bottom-6 right-5 z-[9999] h-[60px] w-[60px] rounded-full text-center text-3xl text-white transition-transform duration-500 ease-in-out will-change-[transform,shadow] visited:text-white hover:text-white active:text-white lg:duration-1000"
    :class="[hide ? classHide : classShow]"
    target="_blank"
    alt="kontak whatsapp"
    :aria-label="t('chatUsonWhatsapp')"
  >
    <Icon name="ion-logo-whatsapp" class="mt-[14px]" aria-hidden="true" />
  </a>
</template>

<style scoped>
#floating-whatsapp {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#00ff5f+0,25d366+100 */
  background: #00ff5f;
  /* Old browsers */
  background: -moz-linear-gradient(top, #00ff5f 0%, #25d366 100%);
  /* FF3.6-15 */
  background: -webkit-linear-gradient(top, #00ff5f 0%, #25d366 100%);
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #00ff5f 0%, #25d366 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ff5f', endColorstr='#25d366', GradientType=0);
  /* IE6-9 */
}
</style>
