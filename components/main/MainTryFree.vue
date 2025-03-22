<script lang="ts" setup></script>
<template>
  <div class="main-try-free container">
    <div class="main-try-free__content">
      <div class="main-try-free__content-info">
        <h3 class="main-try-free__content-info-title">
          Наполнение тарифного плана растет вместе с вашим бизнесом
        </h3>
        <p class="main-try-free__content-info-descr">
          Используйте инструменты SendPulse безвозмездно и без ограничений во
          времени, а при необходимости перейдите на
          <a class="main-try-free__content-info-descr-link" href="/ru/prices"
            >платный тариф</a
          >
          с расширенными лимитами и дополнительными функциями вроде рассылок
          через SMS и Viber.
        </p>
      </div>
      <div class="main-try-free__content-actions">
        <BaseButton label="Попробовать бесплатно" size="lg" color="red" />
        <p class="main-try-free__content-actions-descr">Без банковской карты</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main-try-free {
  background: linear-gradient(to bottom, #fbfcfc 50%, #fff 50%);

  &__content {
    display: flex;
    gap: 90px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.561);
    padding: 50px;
    border-radius: $card_radius;

    box-shadow: -12px 9px 39px -12px rgba(48, 202, 225, 0.6),
      15px 17px 36px -11px rgba(238, 120, 251, 0.6);

    &-info {
      flex: 1;

      &-title {
        margin-bottom: 10px;
        font-weight: 700;
        font-size: 20px;
        line-height: 1.3;
      }

      &-descr {
        font-size: 18px;
        line-height: 1.5;
      }

      &-link {
        color: $teal;
      }
    }
    &-actions {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: end;
      gap: 10px;
      padding-bottom: 5px;

      &-descr {
        line-height: 1.21;
        color: #828282;
        opacity: 1;
      }
    }
  }
}
</style>
