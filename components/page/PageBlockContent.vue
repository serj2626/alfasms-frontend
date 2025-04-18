<script lang="ts" setup>
defineProps<{
  title?: string;
  html?: string;
}>();
</script>
<template>
  <div class="page-block-content">
    <div class="page-block-content__header">
      <div class="page-block-content__header-content container">
        <BaseTypography
          class="page-block-content__header-content-title"
          view="h1"
          :title="title || 'Не указано'"
        />
      </div>
    </div>
    <div class="container">
      <BaseBreadCrumbs
        class="page-block-content__breadcrumbs"
        :current-page="title || 'Не указано'"
      />
      <BaseWysiwyg
        v-if="html"
        :html="html"
        class="page-block-content__content"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-block-content {
  &__header {
    padding-block: 60px;
    background: $bg_linear_second;

    &-content {
      position: relative;
      padding: 180px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      &-title {
        color: $txt_white;
        margin-bottom: 29px;

      }
    }
  }

  &__content {
    // width: 90%;
    margin-inline: auto;
    margin-top: 50px;
    padding-bottom: 50px;
    animation: opacityText 1s ease-in;
  }

  &__breadcrumbs {
    margin-top: 20px;
  }
}
</style>
