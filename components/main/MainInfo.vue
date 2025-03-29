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
  <section id="main-info" class="main-info">
    <div class="main-info__content container">
      <div class="main-info__content-desc">
        <BaseTypography
          class="main-info__content-desc-title"
          view="h1"
          title="Онлайн-платформа со всеми необходимыми инструментами для маркетологов"
        />
        <p class="main-info__content-desc-text">
          Все для привлечения аудитории, коммуникаций и лидогенерации внутри
          единой платформы с большим бесплатным тарифом
        </p>
        <BaseButton
          class="main-info__content-desc-btn"
          size="lg"
          color="red"
          label="Попробовать бесплатно"
        />
        <ul class="main-info__content-desc-actions">
          <li
            class="main-info__content-desc-actions-item"
            v-for="(action, index) in acions"
            :key="index"
          >
            <Icon :name="action.icon" />
            {{ action.title }}
          </li>
        </ul>
      </div>
      <div class="main-info__content-services">
        <MainServiceInfoItem title="CRM система" icon="main/info/hz" circle />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main-info {
  padding-block: 220px;
  background: $bg_linear;

  &__content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    color: $txt_white;

    @include mediaLaptop {
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    &-desc {
      padding-inline: 15px;

      &-title {
        margin-bottom: 30px;
      }
      &-text {
        font-size: 18px;
        margin-bottom: 30px;

        @include mediaMD {
          margin-bottom: 40px;
        }
        @include mediaLG {
          margin-bottom: 30px;
        }
        @include mediaXL {
          margin-bottom: 50px;
        }
      }
      &-btn {
        font-size: 18px;
        margin-bottom: 30px;
      }
      &-actions {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 15px;

        &-item {
          margin-bottom: 10px;
          display: flex;
          gap: 4px;
          align-items: center;
        }
      }
    }

    &-services {
      position: relative;
      top: -40px;

      padding: 8px;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.16) 0,
        rgba(255, 255, 255, 0.08) 100%
      );
    }
  }
}
</style>
