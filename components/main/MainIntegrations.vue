<script lang="ts" setup>
import { BaseTypography } from "#components";
</script>
<template>
  <section id="main-integrations" class="main-integrations container">
    <div class="main-integrations__time">
      <div class="main-integrations__time-content">
        <BaseTypography
          class="main-integrations__time-content-title"
          view="h2"
          title="Экономьте время благодаря бесплатным интеграциям"
        />
        <p class="main-integrations__time-content-descr">
          Суета с программным обеспечением позади: все инструменты уже соединены
          между собой. К примеру, благодаря интеграции CRM с сервисом чат-ботов
          и email рассылок, вы сможете общаться с клиентами прямо с карточки
          контакта. <br />
          Также вам доступны 40+ интеграций со сторонними CRM, SMS и
          ecommerce-системами.
        </p>
      </div>
      <img
        src="https://www.spcdn.org/images/all-in-one/all-in-one-ru/pic-allpage-integration-ru.svg"
        alt=""
        class="main-integrations__time-image"
      />
    </div>
    <div class="main-integrations__work">
      <img
        src="https://www.spcdn.org/images/all-in-one/all-in-one-ru/pic-allpage-team-ru.svg"
        alt=""
        class="main-integrations__work-image"
      />
      <div class="main-integrations__work-content">
        <h2 class="main-integrations__work-content-title">
          Настройте слаженную командную работу
        </h2>
        <p class="main-integrations__work-content-descr">
          Приглашайте коллег и настраивайте права доступа, чтобы отвечать за
          выполнение задач и отслеживать эффективность работы с рассылками или
          соглашениями в CRM.
        </p>
      </div>
    </div>
    <div class="main-integrations__audience">
      <div class="main-integrations__audience-content">
        <h2 class="main-integrations__audience-content-title">
          Сегментируйте аудиторию и персонализируйте коммуникации
        </h2>
        <p class="main-integrations__audience-content-descr">
          Повышайте лояльность клиентов благодаря продуманным рекламным и
          транзакционным сообщениям, учитывающим место контакта в воронке продаж
          и его индивидуальную информацию типа имени, данных заказа и т.д.
        </p>
      </div>
      <img
        src="https://www.spcdn.org/images/all-in-one/all-in-one-ru/pic-allpage-segment-01-ru.svg"
        alt=""
        class="main-integrations__audience-image"
      />
    </div>
    <div class="main-integrations__marketing">
      <img
        src="https://www.spcdn.org/images/all-in-one/all-in-one-ru/pic-allpage-stat-01-ru.svg"
        alt=""
        class="main-integrations__marketing-image"
      />
      <div class="main-integrations__marketing-content">
        <h2 class="main-integrations__marketing-content-title">
          Измеряйте и анализируйте свой маркетинг благодаря мощным встроенным
          инструментам
        </h2>
        <p class="main-integrations__marketing-content-descr">
          Исследуйте статистику взаимодействия с конкретными элементами,
          анализируйте аудиторию, изучайте сводные отчеты за период – вам
          доступен максимум информации, чтобы вовремя устранить возможные ошибки
          и максимизировать эффективность маркетинговых усилий.
        </p>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
%block {
  padding-bottom: 60px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
  gap: 15px;

  @include mediaTablet {
    grid-template-columns: repeat(2, 1fr);
    gap: 60px;
  }
}

%title {
  padding-top: 20px;
  font-size: 34px;
  font-weight: 700;
  line-height: 1.2;
}

%display_flex {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.main-integrations {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__time {
    @extend %block;

    &-content {
      font-size: 18px;
      line-height: 1.6;
      @extend %display_flex;
      &-title {
        padding-top: 20px;
      }
    }
    &-image {

    }
  }

  &__work {
    @extend %block;
    &-content {
      @extend %display_flex;
      &-title {
        @extend %title;
        font-size: 34px;
        font-weight: 700;
        line-height: 1.2;
      }
    }
    &-image {

    }
  }

  &__audience {
    @extend %block;
    &-content {
      @extend %display_flex;
      &-title {
        @extend %title;
      }
    }
    &-image {

    }
  }

  &__marketing {
    @extend %block;
    &-content {
      @extend %display_flex;
      &-title {
        @extend %title;
      }
    }
    &-image {

    }
  }
}
</style>
