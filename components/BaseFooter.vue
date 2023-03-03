<script setup lang="ts">
import { useI18n } from "vue-i18n";

const appConfig = useAppConfig();

const { t } = useI18n();
</script>

<template>
  <footer
    class="container mx-auto mt-8 max-w-6xl bg-repeat text-center text-base-content"
    role="contentinfo"
  >
    <div class="container mx-auto grid grid-cols-1 pb-8 lg:grid-cols-3 lg:pb-0">
      <div class="mt-16">
        <h3
          class="widgettitle mb-8 text-[1.125rem] text-sm font-light uppercase lg:text-base"
        >
          {{ t("workshop") }}
        </h3>
        <address class="josefin-sans workshop leading-8">
          {{ t("address.cukangKawung") }}
          <br />No. 53 RT 01 RW 15 Cibeunying Kaler, <br />{{
            t("address.cimenyan")
          }}, Bandung, <br />{{ t("address.westJava") }} 40191
        </address>
        <div class="josefin-sans mb-0 mt-2 leading-3">
          <Icon class="mr-1 mb-1.5" name="ion:ios-pin" aria-hidden="true" />
          <a :href="appConfig.googleBusinessUrl" target="_blank" rel="noopener">
            <span class="bangers">INDOMASCOT</span>
          </a>
        </div>
        <p class="josefin-sans mt-2 italic underline">
          <a :href="appConfig.googleBusinessUrl" target="_blank" rel="noopener">
            <span class="font-sans text-xs">
              {{ t("seeAtGoogleMaps") }}
              <Icon
                name="ion:ios-link"
                class="ml-0.5 mb-0.5"
                aria-hidden="true"
              />
            </span>
          </a>
        </p>
      </div>
      <div class="mt-16 pb-16 lg:pb-0">
        <h3
          class="widgettitle mb-8 text-[1.125rem] text-sm font-light uppercase lg:text-base"
        >
          {{ t("contact") }}
        </h3>
        <div class="mx-auto w-fit">
          <ul class="fa-ul w-fit">
            <li class="mb-3 w-fit">
              <Icon
                class="mr-2 mb-0.5"
                name="ion:logo-whatsapp"
                aria-hidden="true"
              />

              <a
                class="josefin-sans"
                :href="appConfig.waUrl"
                target="_blank"
                rel="noopener noreferrer"
                alt="kontak whatsapp"
                >{{ appConfig.waNo }}</a
              >
            </li>
            <li class="mb-3 w-fit">
              <Icon
                class="mr-2 mb-0.5"
                name="ion:ios-email-outline"
                aria-hidden="true"
              />

              <a
                class="josefin-sans"
                :href="`mailto:${appConfig.emailAddress}`"
                target="_blank"
                rel="noopener noreferrer"
                alt="kontak email"
                >{{ appConfig.emailAddress }}</a
              >
            </li>
            <li class="mb-3 w-fit">
              <Icon
                class="mr-2 mb-0.5"
                name="ion:logo-instagram"
                aria-hidden="true"
              />

              <a
                :href="appConfig.igUrl"
                target="_blank"
                rel="noopener noreferrer"
                alt="instagram"
              >
                <span class="bangers">INDOMASCOT</span>
              </a>
            </li>
            <li class="mb-3 w-fit">
              <Icon
                class="mr-2 mb-0.5"
                name="ion:social-youtube-outline"
                aria-hidden="true"
              />

              <a
                :href="appConfig.youtubeUrl"
                target="_blank"
                rel="noopener noreferrer"
                alt="channel youtube"
              >
                <span class="bangers">INDOMASCOT</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-16 hidden lg:block">
        <h3
          class="widgettitle mb-8 text-[1.125rem] text-sm font-light uppercase lg:text-base"
        >
          {{ t("apps") }}
        </h3>
        <FooterApps />
      </div>
    </div>
    <FooterNav />
  </footer>
</template>

<style lang="scss" scoped>
footer .inner-footer > .cell:not(:last-child) {
  @apply pt-16;
}

footer .inner-footer > .cell:last-child {
  @apply pt-4 pb-8;
}

[data-theme="dark"] {
  footer > .container {
    @apply text-idm-base-100;
  }
}

[data-theme="light"] {
  footer > .container {
    @apply text-idm-base-300;
  }
}
</style>
