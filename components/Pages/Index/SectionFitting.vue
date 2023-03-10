<script setup lang="ts">
import Moveable from "vue3-moveable";

const { isDesktop, isMobile } = useDevice();
const { t } = useI18n({ useScope: "global" });

const target = ref(null);

function handleDrag({ target, transform }) {
  target.style.transform = transform;
}
function handleResize({ target, width, height }) {
  target.style.width = `${width}px`;
  target.style.height = `${height}px`;
}
function handleScale({ target, transform }) {
  target.style.transform = transform;
}
function handleRotate({ target, transform }) {
  target.style.transform = transform;
}
function handleWarp({ target, transform }) {
  target.style.transform = transform;
}

function updateCanvasImage(e) {
  const files = e.target.files;

  const reader = new FileReader();

  reader.onload = (e) => {
    const img = new Image();
    img.onload = function () {
      drawCanvasImage(img);
    };
    img.src = e.target.result;
  };

  reader.readAsDataURL(files[0]);
}

function drawCanvasImage(img) {
  const canvas = target.value;
  canvas.width = 150;
  canvas.height = 150;

  const ctx = canvas.getContext("2d");
  ctx.globalAlpha = 0.666;
  ctx.drawImage(img, 0, 0, 150, 150);
}
</script>

<template>
  <div class="relative mx-auto mt-24 mb-4 w-fit lg:mb-8">
    <div
      id="bg-blur"
      class="absolute blur-lg"
      :class="[isDesktop ? 'h-[40px] w-[157px]' : 'h-[24px] w-[97px]']"
    ></div>
    <h2 id="portfolio-title" class="relative mb-4 lg:mb-0">
      <span
        id="title-text"
        class="text-[1.5rem] font-semibold uppercase leading-8 lg:text-[2.5rem] lg:leading-[3rem]"
      >
        {{ t("fitting") }}
      </span>
    </h2>
  </div>
  <section id="fitting" class="mt-4">
    <div class="grid grid-cols-1 gap-0 px-0 lg:grid-cols-2 lg:px-8">
      <div
        class="order-2 mt-4 flex flex-col justify-self-center lg:order-1 lg:mt-0"
      >
        <div class="relative flex justify-center">
          <NuxtImg
            provider="storyblok"
            loading="lazy"
            width="275"
            height="275"
            sizes="sm:275px lg:275px"
            src="https://a.storyblok.com/f/118728/1564x1584/0a5e1806bb/mascot-costume-proportional-design-guide.png"
            class="w-60 text-center"
            alt="panduan tubuh manusia yang proporsional"
          />
          <client-only>
            <div class="absolute top-0 left-0">
              <canvas id="target" ref="target" class="target" />
              <Moveable
                class="moveable"
                :rotation-position="`none`"
                :target="['#target']"
                :pinchable="true"
                :use-resize-observer="true"
                :draggable="true"
                :scalable="true"
                :rotatable="true"
                :resizable="true"
                @drag="handleDrag"
                @scale="handleScale"
                @rotate="handleRotate"
                @resize="handleResize"
                @warp="handleWarp"
              />
            </div>
          </client-only>
        </div>
        <div class="my-8 grid grid-cols-1 lg:mt-12">
          <div class="flex justify-center">
            <label
              class="bg-gradient flex cursor-pointer justify-center rounded-full bg-primary px-6 py-4 uppercase tracking-wide text-neutral-content"
            >
              <Icon
                name="ion-cloud-upload-sharp"
                aria-hidden="true"
                class="mt-px h-4 w-4 fill-neutral-content/90 text-neutral-content/90 lg:mt-0.5 lg:h-5 lg:w-5"
              />
              <span
                class="ml-1 mr-0.5 text-xs font-bold uppercase leading-normal lg:ml-2 lg:text-base"
              >
                {{ $t("uploadDesign") }}
              </span>
              <input type="file" class="hidden" @change="updateCanvasImage" />
            </label>
          </div>
        </div>
      </div>
      <!-- uploader -->
      <div class="grid-rows-fr order-1 mt-0 grid gap-4 lg:order-2">
        <div class="grid max-w-lg grid-cols-2 place-content-start gap-2">
          <NuxtImg
            provider="storyblok"
            loading="lazy"
            width="281"
            height="281"
            sizes="sm:133px lg:281px"
            src="https://a.storyblok.com/f/118728/782x793/604d6a7a85/uniku-fitting-is-passed.png"
            alt="contoh desain maskot yang tidak proporsional dengan tubuh manusia"
          />
          <NuxtImg
            provider="storyblok"
            loading="lazy"
            width="281"
            height="281"
            sizes="sm:133px lg:281px"
            src="https://a.storyblok.com/f/118728/782x793/3c893e1395/zeze-fitting-is-not-passed.png"
            alt="contoh desain maskot yang tidak proporsional dengan tubuh manusia"
          />
        </div>
        <div class="mt-4 lg:mt-0">
          <ul id="instructions" class="fa-ul">
            <li>
              <span class="fa-li">
                <Icon
                  name="ion-checkmark-circle"
                  aria-hidden="true"
                  class="icon"
                />
              </span>
              {{ $t("fittingInstruction.proportional") }}
              <span class="font-bold">{{ $t("proportional") }}</span>
            </li>
            <li>
              <span class="fa-li">
                <Icon
                  name="ion-checkmark-circle"
                  aria-hidden="true"
                  class="icon"
                />
              </span>
              {{ $t("fittingInstruction.upload.useButton") }}
              <span class="font-bold">{{ $t("uploadDesign") }}</span>
              {{
                isMobile
                  ? $t("fittingInstruction.upload.below")
                  : $t("fittingInstruction.upload.beside")
              }}
            </li>
            <li>
              <span class="fa-li">
                <Icon
                  name="ion-checkmark-circle"
                  aria-hidden="true"
                  class="icon"
                />
              </span>
              <span class="font-bold">
                {{ $t("fittingInstruction.resizeDragRotate.useHandle") }}
              </span>
              {{ $t("fittingInstruction.resizeDragRotate.ifNeeded") }}
            </li>
            <li>
              <span class="fa-li">
                <Icon
                  name="ion-checkmark-circle"
                  aria-hidden="true"
                  class="icon"
                />
              </span>
              <span class="font-bold">{{ $t("screenshot") }}</span>
              {{ $t("fittingInstruction.screenshot") }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
[data-theme="dark"] {
  #title-text {
    @apply text-small-title;
  }
  #bg-blur {
    @apply bg-gradient-to-t from-indigo-700/20 to-small-title-darken/20;
  }
  #instructions {
    .icon {
      @apply text-small-title/70;
    }
  }
}

[data-theme="light"] {
  #title-text {
    @apply text-small-title-darken;
  }
  #bg-blur {
    @apply bg-gradient-to-t from-indigo-600/10 to-small-title/20;
  }
  #instructions {
    .icon {
      @apply text-primary/70;
    }
  }
}

#instructions > li {
  margin-top: 0.5rem;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}
</style>
