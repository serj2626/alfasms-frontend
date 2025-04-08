<script lang="ts" setup>
import { HeroIcons } from '~/assets/icons/types/hero-icons';

export interface IAction {
  icon: string;
  title: string;
}
const actions: IAction[] = [
  {
    icon: HeroIcons.MAIL,
    title: '15 000 электронных писем',
  },
  {
    icon: HeroIcons.MAIL,
    title: '3 бесплатных чат-бота',
  },
  {
    icon: HeroIcons.MAIL,
    title: 'Бесплатный конструктор лендингов',
  },
  {
    icon: HeroIcons.MAIL,
    title: 'CRM система',
  },
  {
    icon: HeroIcons.MAIL,
    title: 'Без банковской карты',
  },
];
</script>
<template>
  <section class="main-cta">
    <div class="main-cta__content container">
      <div
        class="main-cta__content-desc"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <BaseTypography
          class="main-cta__content-desc-title"
          view="h2"
          title="Уверенно управляйте всеми коммуникациями и воронками продаж"
        />
        <p class="main-cta__content-desc-text">
          Привлекайте и конвертируйте больше клиентов благодаря удобной
          платформе автоматизации
        </p>
        <BaseButton
          class="main-cta__content-desc-btn"
          size="lg"
          color="red"
          label="Попробовать бесплатно"
        />
        <ul class="main-cta__content-desc-actions">
          <MainServiceTag :actions="actions" />
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.main-cta {
  background: $bg_linear;
  &__content {
    padding-block: 60px;
    @include mediaTablet {
      padding-block: 100px;
    }
    @include mediaLaptop {
      padding-block: 140px;
    }

    &-desc {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-inline: 15px;
      color: $txt_white;
      margin-inline: auto;

      &-title {
        text-align: center;
        margin-bottom: 20px;
        @include mediaDesktop {
          width: 720px;
        }
      }
      &-text {
        margin-bottom: 50px;
        font-size: 20px;
        line-height: 1.5;
        text-align: center;
        @include mediaDesktop {
          width: 720px;
        }
      }
      &-btn {
        font-size: 14px;
        margin-bottom: 30px;
        width: 100%;
        @include mediaMobile {
          width: auto;
          font-size: 16px;
        }
        @include mediaLaptop {
          font-size: 18px;
        }
      }
      &-actions {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 8px;
        max-width: 555px;
        margin-inline: auto;
      }
    }
  }
}
</style>
