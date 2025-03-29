<script setup lang="ts">
const containerRef = ref(null);
const swiper = useSwiper(containerRef, {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 1500,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 8,
    },
  }
});

interface IContactsImage {
  path: string;
  alt: string;
}

const images: IContactsImage[] = [
  {
    path: "partners:lot",
    alt: "lot",
  },
  {
    path: "partners:pwc",
    alt: "pwc",
  },
  {
    path: "partners:kaercher",
    alt: "kaercher",
  },
  {
    path: "partners:puma",
    alt: "puma",
  },
  {
    path: "partners:viessmann",
    alt: "viessmann",
  },
  {
    path: "partners:sumsung",
    alt: "sumsung",
  },
  {
    path: "partners:swatch",
    alt: "swatch",
  },
  {
    path: "partners:kaercher",
    alt: "kaercher",
  },
  {
    path: "partners:puma",
    alt: "puma",
  },
  {
    path: "partners:viessmann",
    alt: "viessmann",
  },
  {
    path: "partners:sumsung",
    alt: "sumsung",
  },
  {
    path: "partners:swatch",
    alt: "swatch",
  },
];

onMounted(() => {
  console.log(swiper.instance);
});
</script>

<template>
  <div class="main-partners container">
    <ClientOnly>
      <swiper-container ref="containerRef" :init="false">
        <swiper-slide v-for="(image, idx) in images" :key="idx">
          <NuxtLink>
            <Icon
              class="main-partners__image"
              :name="image.path"
              :alt="image.alt"
            />
          </NuxtLink>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>

<style lang="css">
.main-partners {
  padding-block: 48px 140px;
}

swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 170px;
  height: 45px;
}
</style>
