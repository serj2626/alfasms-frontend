<script setup lang="ts">
interface IDropdownProps {
  options: any;
  placeholder: string;
}

defineProps<IDropdownProps>();

const selectedOption = defineModel<any>('selectedOption', {
  default: {
    title: '',
    slug: '',
  },
});

const formattedSelectedOption = computed(() => {
  if (selectedOption.value) {
    if (selectedOption.value.title) {
      return selectedOption.value.title;
    } else if (selectedOption.value.firstname) {
      return `${selectedOption.value.firstname ?? ''} ${
        selectedOption.value.middlename ?? ''
      } ${selectedOption.value.lastname ?? ''}`;
    } else {
      return null;
    }
  } else {
    return '';
  }
});

const opened = ref<boolean>(false);

const optionHandler = (option: unknown) => {
  opened.value = false;
};

const toggleHandler = () => {
  opened.value = !opened.value;
};

const closeHandler = () => {
  opened.value = false;
};
</script>
<template>
  <div
    class="base-input-select"
    :class="{ 'base-input-select_opened': opened }"
    @blur="closeHandler"
  >
    <span class="base-input-select-placeholder">{{
      formattedSelectedOption || placeholder
    }}</span>
    <button
      class="base-input-select__handler"
      :class="{ 'base-input-select__handler_opened': opened }"
      @click="toggleHandler"
    >
      <span>{{ formattedSelectedOption }}</span>
      <NuxtIcon
        :class="{ 'base-input-select__handler-svg_opened': opened }"
        class="base-input-select__handler-svg"
        name="arrowDown"
        filled
      />
    </button>

    <div
      class="base-input-select__items"
      :class="{ 'base-input-select__items--hide': !opened }"
    >
      <div class="base-input-select__items-list">
        <button
          v-for="option of options.filter(
              (item: unknown) => item !== selectedOption
            )"
          class="base-input-select__option"
          :key="option.slug ?? option.title"
          @click="(selectedOption = option), optionHandler(option)"
        >
          <img
            v-if="option.image"
            :src="getMedia(option.image.contentUrl)"
            class="base-input-select__option-img"
          />
          {{
            option.title ??
            `${option.firstname ?? ''} ${option.middlename ?? ''} ${
              option.lastname ?? ''
            }`
          }}
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.base-input-select {
  position: relative;
  width: 100%;
  border-bottom: 1px solid #c5c8d4;

  &-placeholder {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  &__handler {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 10px;
    justify-content: unset;
    font-weight: 400;
    padding: 16px 20px;
    color: $txt_black;
    user-select: none;

    &-svg {
      margin-left: auto;
    }

    &-svg {
      transition: transform 80ms ease;
      &_opened {
        transform: rotate(-180deg);
      }
    }
  }

  &__items {
    position: absolute;
    height: 120px;
    border-bottom: 1px solid #c5c8d4;
    background-color: var(--dropdown-background-color, #f1f3f6);
    z-index: $z-index-after-content;
    transition: height $default_cubic;
    font-weight: 300;
    overflow-y: auto;
    width: 100%;

    &-list {
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 20px;
    }

    &--hide {
      height: 0;
    }
  }

  &__option {
    cursor: pointer;
    user-select: none;
    display: flex;
    gap: 15px;

    &-img {
      object-position: top;
      object-fit: cover;
      width: 40px;
      height: 40px;
    }

    &:hover {
      color: $brand_color;
    }
  }
}
</style>
