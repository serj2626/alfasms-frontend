<script setup lang="ts">
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
</script>

<template>
  <div class="language-switcher">
    <span class="language-switcher__current" @click="isOpen = !isOpen">
      {{ currentCountry?.flag }}
    </span>

    <div class="language-switcher__options" v-if="isOpen">
      <div
        v-for="lang in languages"
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
  }
  &__options {
    position: absolute;
    z-index: 120;
    margin-top: 20px;
    top: 100%;
    left: 50%;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.242);
    transform: translateX(-50%);


    &:hover {
      animation: none;
    }
    display: flex;
    gap: 10px;
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
      }
    }
  }
}
</style>

<!-- <script setup lang="ts">
const locale = ref('ru');

const languages = [
  { code: 'ru', flag: '🇷🇺' },
  { code: 'en', flag: '🇬🇧' },
  { code: 'be', flag: '🇧🇾' },
  { code: 'kk', flag: '🇰🇿' },
  { code: 'tt', flag: '🇹🇳' },
  { code: 'uk', flag: '🇺🇦' },
  { code: 'uz', flag: '🇺🇿' },
];
</script>

<template>
  <select v-model="locale" class="lang-select">
    <option v-for="lang in languages" :key="lang.code" :value="lang.code">
      {{ lang.flag }}
    </option>
  </select>
</template>

<style scoped lang="scss">
.lang-select {
  font-size: 18px;
  outline: none;
  cursor: pointer;
  padding: 6px;

  option {
    background: transparent;
    color: inherit;
  }
}
</style> -->
