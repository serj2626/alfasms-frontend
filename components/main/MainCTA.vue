<script lang="ts" setup>
import { HeroIcons } from "~/assets/icons/types/hero-icons";

interface IAction {
  icon: string;
  title: string;
}
const acions: IAction[] = [
  {
    icon: HeroIcons.MAIL,
    title: "15 000 электронных писем",
  },
  {
    icon: HeroIcons.MAIL,
    title: "3 бесплатных чат-бота",
  },
  {
    icon: HeroIcons.MAIL,
    title: "Бесплатный конструктор лендингов",
  },
  {
    icon: HeroIcons.MAIL,
    title: "CRM система",
  },
  {
    icon: HeroIcons.MAIL,
    title: "Без банковской карты",
  },
];
</script>
<template>
  <section class="main-cta">
    <div class="main-cta__content container">
      <div
        class="main-cta__content-desc"
        data-aos="fade-up"
        data-duration="8000"
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
          <NuxtLink
            class="main-cta__content-desc-actions-item"
            v-for="(action, index) in acions"
            :key="index"
          >
            <Icon :name="action.icon" />
            {{ action.title }}
          </NuxtLink>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.main-cta {
  background: $bg_linear;
  &__content {
    padding-block: 140px;

    &-desc {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-inline: 15px;
      color: $txt_white;
      width: 750px;
      margin-inline: auto;

      &-title {
        text-align: center;
        margin-bottom: 20px;
      }
      &-text {
        margin-bottom: 50px;
        font-size: 20px;
        line-height: 1.5;
        text-align: center;
      }
      &-btn {
        font-size: 18px;
        margin-bottom: 30px;
      }
      &-actions {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 8px;
        width: 555px;
        margin-inline: auto;

        &-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          color: $txt_white;
          border-radius: 35px;
          background-color: rgba(255, 255, 255, 0.1);
          font-size: 14px;
          line-height: 1.275;
        }
      }
    }
  }
}
</style>
