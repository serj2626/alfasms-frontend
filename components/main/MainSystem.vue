<script lang="ts" setup>
import { HeroIcons } from "~/assets/icons/types/hero-icons";
</script>
<template>
  <section id="main-system" class="main-system">
    <div class="container">
      <div class="main-system__info">
        <BaseTypography
          class="main-system__info-title"
          view="h2"
          title="Объедините все коммуникации и автоматизируйте прохождение контактов
          воронкой продаж"
        />
        <p class="main-system__info-descr">
          Чтобы сформировать безупречный пользовательский опыт и продать, важно
          аккумулировать всю информацию о клиенте в одной системе. Это
          позволяет:
        </p>
      </div>
      <div class="main-system__info-list">
        <div
          class="main-system__info-list-item"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="700"
        >
          <div class="main-system__info-list-item-icon">
            <Icon :name="HeroIcons.CHECK" />
          </div>
          <p class="main-system__info-list-item-text">
            автоматически отправлять персонализированные предложения в наиболее
            подходящий момент в удобный канал;
          </p>
        </div>
        <div
          class="main-system__info-list-item"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
        >
          <div class="main-system__info-list-item-icon">
            <Icon :name="HeroIcons.CHECK" />
          </div>
          <p class="main-system__info-list-item-text">
            быть на связи в любом мессенджере и в онлайн-чате на сайте без
            переключения между интерфейсами и учетными записями;
          </p>
        </div>
        <div
          class="main-system__info-list-item"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2300"
        >
          <div class="main-system__info-list-item-icon">
            <Icon :name="HeroIcons.CHECK" />
          </div>

          <p class="main-system__info-list-item-text">
            иметь под рукой историю сделок и взаимодействия с каждым контактом,
            чтобы формировать персонализированные воронки продаж и повышать
            конверсии.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.main-system {
  padding-bottom: 260px;
  background-image: url("/bg/bg-graph.svg");
  background-size: cover;
  background-repeat: no-repeat;

  &__info {
    display: flex;
    flex-direction: column;
    padding-bottom: 60px;
    max-width: 750px;
    margin-inline: auto;

    &-title {
      text-align: center;
      margin-bottom: 30px;
    }

    &-descr {
      font-size: 20px;
      line-height: 1.5;
      text-align: center;
    }

    &-list {
      display: grid;
      grid-template-columns: 1fr;
      gap: 30px;

      @include mediaTablet {
        grid-template-columns: repeat(2, 1fr);
      }
      @include mediaLaptop {
        grid-template-columns: repeat(3, 1fr);
      }

      &-item {
        display: flex;
        flex-direction: column;
        gap: 20px;

        &-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #def8f8;
          border-radius: 50%;

          .iconify {
            width: 20px;
            height: 20px;
            color: #31c178;
          }
        }

        &-text {
          font-size: 18px;
          line-height: 1.6;
        }
      }
    }
  }
}
</style>
