<script lang="ts" setup></script>
<template>
  <section id="main-platform" class="main-platform container">
    <div class="main-platform__content">
      <h2 class="main-platform__content-title">
        Платформа универсальна и будет полезна специалистам из разных сфер
      </h2>
      <p class="main-platform__content-text">
        Используйте AlfaSMS, если вы самостоятельно развиваете бизнес,
        управляете командой любого размера или планируете заявить о своем
        бизнесе в интернете
      </p>
    </div>
    <div class="main-platform__list">
      <div class="main-platform__list-card" data-aos="fade-right">
        <img
          src="https://www.spcdn.org/templates/sendpulsev1/img/sp_icons/sp_feature_icons/ic-f-decisions.svg"
          data-src="https://www.spcdn.org/templates/sendpulsev1/img/sp_icons/sp_feature_icons/ic-f-decisions.svg"
          class="main-platform__list-card-img"
          alt="Менеджерам по продажам"
        />
        <h3 class="main-platform__list-card-title">Менеджерам по продажам</h3>
        <p class="main-platform__list-card-text">
          CRM – центр вашего бизнеса. Управляйте продажами и каналами связи,
          автоматизируйте прохождение контактов по воронке продаж, работайте с
          соглашениями и мгновенно получайте всю информацию о клиенте.
        </p>
      </div>
      <div class="main-platform__list-card" data-aos="fade-right">
        <img
          src="https://www.spcdn.org/templates/sendpulsev1/img/sp_icons/sp_feature_icons/ic-index-academy.svg"
          data-src="https://www.spcdn.org/templates/sendpulsev1/img/sp_icons/sp_feature_icons/ic-f-decisions.svg"
          class="main-platform__list-card-img"
          alt="Менеджерам по продажам"
        />
        <h3 class="main-platform__list-card-title">
          Онлайн-школам, продюсерам
        </h3>
        <p class="main-platform__list-card-text">
          Запускайте и продавайте свои курсы или продюссируйте экспертов с
          помощью украинского сервиса. В SendPulse обучение, продвижение и
          продажи объединены на одной платформе для вашего комфорта.
        </p>
      </div>
      <div class="main-platform__list-card" data-aos="fade-left">
        <img
          src="https://www.spcdn.org/templates/sendpulsev1/img/sp_icons/sp_feature_icons/ic-f-decisions.svg"
          data-src="https://www.spcdn.org/templates/sendpulsev1/img/sp_icons/sp_feature_icons/ic-f-allpage-cup.svg"
          class="main-platform__list-card-img"
          alt="Менеджерам по продажам"
        />
        <h3 class="main-platform__list-card-title">
          Экспертам, владельцам бизнеса
        </h3>
        <p class="main-platform__list-card-text">
          Заявите о себе или своем любимом деле без привлечения посторонних
          специалистов: все инструменты легко настраиваются благодаря
          визуальному конструктору и сотням готовых шаблонов для любой задачи.
        </p>
      </div>
      <div class="main-platform__list-card" data-aos="fade-left">
        <img
          src="https://www.spcdn.org/templates/sendpulsev1/img/sp_icons/sp_feature_icons/ic-f-allpage-target.svg"
          data-src="https://www.spcdn.org/templates/sendpulsev1/img/sp_icons/sp_feature_icons/ic-f-decisions.svg"
          class="main-platform__list-card-img"
          alt="Менеджерам по продажам"
        />
        <h3 class="main-platform__list-card-title">Маркетологам</h3>
        <p class="main-platform__list-card-text">
          Объедините все маркетинговые мероприятия на одной платформе и
          скоординируйте коммуникации в разных каналах. Это увеличит ваши
          конверсии и рентабельность инвестиций. Никаких интеграций –
          инструменты уже соединены между собой.
        </p>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.main-platform {
  padding-block: 140px;

  &__content {
    width: 945px;
    margin-inline: auto;
    margin-bottom: 72px;

    &-title {
      text-align: center;
      font-size: 38px;
      font-weight: 600;
      line-height: 1.2;
      margin-bottom: 30px;
    }
    &-text {
      font-size: 22px;
      line-height: 1.5;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

    &-card {
      display: flex;
      flex-direction: column;
      gap: 10px;

      &-img {
        width: 50px;
        height: 50px;
      }

      &-title {
        font-size: 28px;
        font-weight: 700;
      }

      &-text {
      }
    }
  }
}
</style>
