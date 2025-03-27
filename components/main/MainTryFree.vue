<script lang="ts" setup></script>
<template>
  <div class="main-try-free container">
    <div class="main-try-free__content">
      <div class="main-try-free__content-info">
        <BaseTypography
          class="main-try-free__content-info-title"
          view="h3"
          title="Наполнение тарифного плана растет вместе с вашим бизнесом"
        />
        <p class="main-try-free__content-info-descr">
          Используйте инструменты SendPulse безвозмездно и без ограничений во
          времени, а при необходимости перейдите на
          <NuxtLink class="main-try-free__content-info-descr-link"
            >платный тариф
          </NuxtLink>
          с расширенными лимитами и дополнительными функциями вроде рассылок
          через SMS и Viber.
        </p>
      </div>
      <div class="main-try-free__content-actions">
        <BaseButton
          class="main-try-free__content-actions-btn"
          label="Попробовать бесплатно"
          size="lg"
          color="red"
        />
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
    flex-direction: column;
    gap: 30px;
    @include mediaLaptop {
      gap: 50px;
    }
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.561);
    padding: 50px;
    border-radius: $card_radius;
    box-shadow: -12px 9px 39px -12px rgba(48, 202, 225, 0.6),
      15px 17px 36px -11px rgba(238, 120, 251, 0.6);

    @include mediaLaptop {
      flex-direction: row;
    }

    &-info {
      flex: 1;

      &-title {
        margin-bottom: 10px;
        text-align: center;
        @include mediaLaptop {
          text-align: start;
        }
      }

      &-descr {
        font-size: 18px;
        line-height: 1.5;
        text-align: center;
        @include mediaLaptop {
          text-align: start;
        }

        &-link {
          color: $teal;
        }
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

      &-btn {
        margin-inline: auto;
      }
    }
  }
}
</style>
