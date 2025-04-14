<script setup lang="ts">
import { HeroIcons } from '~/assets/icons/types/hero-icons';

const locale = ref('ru');

const languages = [
  { code: 'be', flag: '🇧🇾' },
  { code: 'ru', flag: '🇷🇺' },
  { code: 'en', flag: '🇬🇧' },
  { code: 'kk', flag: '🇰🇿' },
  { code: 'tt', flag: '🇹🇳' },
  { code: 'uk', flag: '🇺🇦' },
];

const isOpen = ref(false);

function selectLang(code: string) {
  locale.value = code;
  isOpen.value = false;
}

const currentCountry = computed(() => {
  return languages.find((country) => {
    return country.code === locale.value;
  });
});

const allLanguages = computed(() => {
  return languages.filter((item) => item.code != locale.value);
});
</script>

<template>
  <div class="language-switcher">
    <p class="language-switcher__current" @click="isOpen = !isOpen">
      <span class="language-switcher__current-flag">{{
        currentCountry?.flag
      }}</span>
      <Icon
        class="language-switcher__current-icon"
        :class="{ 'language-switcher__current-icon_open': isOpen }"
        :name="HeroIcons.DOWN"
        size="16"
      />
    </p>

    <div class="language-switcher__options" v-if="isOpen">
      <div
        v-for="lang in allLanguages"
        :key="lang.code"
        class="language-switcher__options-item"
        @click="selectLang(lang.code)"
        :title="lang.code"
      >
        {{ lang.flag }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.language-switcher {
  position: relative;
  display: inline-block;
  cursor: pointer;

  &__current {
    font-size: 20px;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: all 0.3s ease;

    &-flag {
      transition: all 0.3s ease;
      &:active {
        scale: 1.1;
        transform: skewX( -100deg );
      }
    }

    &-icon {
      &_open {
        transition: all 0.3s ease;
        transform: rotate(180deg);
      }
    }
  }
  &__options {
    background-color: transparent !important;
    position: absolute;
    z-index: 120;
    margin-top: 10px;
    top: 100%;
    left: 50%;

    transform: translateX(-50%);

    box-shadow: 0 0 20px rgb(121, 134, 135);

    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);

    box-shadow: 0 0 10px 10px rgba(240, 240, 240, 0.236);

    &:hover {
      animation: none;
    }
    display: flex;
    gap: 15px;
    background: white;
    border-radius: 6px;
    z-index: 10;

    &-item {
      font-size: 26px;
      padding: 5px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        filter: brightness(0.8);
        scale: 1.2;
      }
    }
  }
}
</style>
