<script lang="ts" setup>
import { HeroIcons } from '~/assets/icons/types/hero-icons';
const showSearchForm = ref(false);
</script>
<template>
  <div class="header-search" style="position: relative">
    <Icon
      class="header-search__icon"
      :name="HeroIcons.SEARCH"
      size="20"
      @click="showSearchForm = showSearchForm === false ? true : false"
    />
    <LazyBaseSearchComponent
      v-if="showSearchForm"
      @close="showSearchForm = false"
    />
  </div>
</template>
<style lang="scss">
.header_active {
  .header-search {
    color: $txt;
    @include link;
  }
}

.header-search {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &-icon {
    @include header_link;
    transition: all $default_cubic;

    &:hover {
      scale: 1.1;
    }
  }
}
</style>
