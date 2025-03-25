<script lang="ts" setup></script>
<template>
  <section id="main-integrations" class="main-integrations container">
    <div class="main-integrations__time">
      <div class="main-integrations__time-content">
        <h2 class="main-integrations__time-content-title">
          Экономьте время благодаря бесплатным интеграциям
        </h2>
        <p class="main-integrations__time-content-descr">
          Суета с программным обеспечением позади: все инструменты уже соединены
          между собой. К примеру, благодаря интеграции CRM с сервисом чат-ботов
          и email рассылок, вы сможете общаться с клиентами прямо с карточки
          контакта. <br> Также вам доступны 40+ интеграций со сторонними CRM, SMS и
          ecommerce-системами.
        </p>
      </div>
      <div class="main-integrations__time-image">
        
      </div>
    </div>
    <div class="main-integrations__work">
      <div class="main-integrations__work-image">

      </div>
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
      <div class="main-integrations__audience-image">

      </div>
    </div>
    <div class="main-integrations__marketing">
      <div class="main-integrations__marketing-image">

      </div>
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
  padding-bottom: 160px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  gap: 30px;
}

%title{
  font-size: 34px;
  font-weight: 700;
  line-height: 1.2;
  padding-top: 20px;
}

%display_flex {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.main-integrations {
  padding-top: 20px;

  &__time {
    @extend %block;

    &-content {
      font-size: 18px;
      line-height: 1.6;
      @extend %display_flex;
      &-title {
        @extend %title;
      }
    }
    &-image {
      height: 520px;
      background-image: url("integrations/time.png");
      background-size: contain;
      background-repeat: no-repeat;
    }
  }

  &__work {
    @extend %block;
    &-content {
      @extend %display_flex;
      &-title {
        @extend %title;
      }
    }
    &-image {
      height: 490px;
      background-image: url("integrations/work.png");
      background-size: contain;
      background-repeat: no-repeat;
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
      height: 490px;
      background-image: url("integrations/audience.png");
      background-size: contain;
      background-repeat: no-repeat;
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
      height: 490px;
      background-image: url("integrations/marketing.png");
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
}
</style>
