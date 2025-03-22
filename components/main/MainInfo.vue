<script lang="ts" setup></script>
<template>
  <section id="main-info" class="main-info">
    <div class="main-info__content container">
      <div class="main-info__content-desc">
        <h1 class="main-info__content-desc-title">
          Онлайн-платформа со всеми необходимыми инструментами для маркетологов
        </h1>
        <p class="main-info__content-desc-text">
          Все для привлечения аудитории, коммуникаций и лидогенерации внутри
          единой платформы с большим бесплатным тарифом
        </p>
        <BaseButton
          class="main-info__content-desc-btn"
          size="md"
          color="red"
          label="Попробовать бесплатно"
        />
        <div class="main-info__content-desc-actions"></div>
      </div>
      <div class="main-info__content-products"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main-info {
  padding-block: 200px;
  background: $bg;

  &__content {
    color: $txt_white;
    &-desc {
      &-title {
        font-size: 48px;
        margin-bottom: 30px;
      }
      &-text {
        font-size: 18px;
        margin-bottom: 50px;
      }
    }

    &-products {
    }
  }
}
</style>
