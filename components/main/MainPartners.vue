<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

const swiperRef = ref(null);
const prevEl = ref(null);
const nextEl = ref(null);
const paginationRef = ref(null);

interface IContactsImage {
  path: string;
  alt: string;
}

const images: IContactsImage[] = [
  {
    path: "@/assets/icons/partners/lot.svg",
    alt: "lot",
  },
  {
    path: "@/assets/icons/partners/pwc.svg",
    alt: "pwc",
  },
  {
    path: "@/assets/icons/partners/kaercher.svg",
    alt: "kaercher",
  },
  {
    path: "@/assets/icons/partners/puma.svg",
    alt: "puma",
  },
  {
    path: "@/assets/icons/partners/viessmann.svg",
    alt: "viessmann",
  },
  {
    path: "@/assets/icons/partners/sumsung.svg",
    alt: "sumsung",
  },
  {
    path: "@/assets/icons/partners/swatch.svg",
    alt: "swatch",
  },
];
</script>
<template>
  <div class="main-partners container">
    <div
      class="main-partners__content"
      v-if="Array.isArray(images) && images.length"
    >
      <div class="swiper-container">
        <Swiper
          ref="swiperRef"
          :modules="[Pagination, Navigation]"
          :slides-per-view="'auto'"
          :space-between="20"
          :pagination="{
            el: paginationRef,
            clickable: true,
          }"
          :navigation="{
            enabled: true,
            prevEl,
            nextEl,
          }"
          :slidesPerGroup="1"
          :slidesPerGroupSkip="0"
        >
          <SwiperSlide
            v-for="image in images"
            :key="image.path"
            class="swiper-slide"
          >
            <NuxtLink>
              <NuxtIcon
                class="contacts-images__content-image"
                :name="image.path"
                :alt="image.alt"
                filled
              />
            </NuxtLink>
          </SwiperSlide>
        </Swiper>
        <div ref="paginationRef" class="swiper-pagination" />
      </div>
    </div>

    <div v-else>
      <p>Изображения отсутствуют</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-partners {
  padding-block: 48px 140px;
}
</style>
