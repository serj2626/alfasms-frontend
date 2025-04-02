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
      <img
        class="main-info__content-services"
        src="/main-info.svg"
        alt="Services"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main-info {
  padding-top: 100px;
  margin-bottom: 16px;

  @include mediaTablet {
    padding-top: 100px;
  }
  @include mediaLaptop {
    padding-top: 140px;
  }
  background: $bg_linear;

  @include mediaLaptop {
    padding-block: 220px;
  }

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

        @include mediaTablet {
          margin-bottom: 40px;
        }
        @include mediaLaptop {
          margin-bottom: 30px;
        }
        @include mediaDesktop {
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
      top: -20px;
      @include mediaLaptop {
        right: -50px;
      }
    }
  }
}
</style>
