<script lang="ts" setup></script>
<template>
  <section class="main-helpers" id="main-helpers">
    <div class="container">
      <div class="main-helpers__content">
        <div class="main-helpers__content-info" data-aos="fade-right">
          <BaseTypography
            class="main-helpers__content-info-title"
            view="h2"
            title="Поможем автоматизировать маркетинг и продажи новичку и профессионалу"
          />
          <p class="main-helpers__content-info-text">
            Мы всегда на связи. Если у вас возникнут вопросы, обращайтесь в
            поддержку или смотрите бесплатные обучающие ресурсы.
          </p>
        </div>
        <div class="main-helpers__content-services-info">
          <div class="main-helpers__content-services" data-aos="fade-left">
            <div class="main-helpers__content-services-item">
              <img
                class="main-helpers__content-services-item-img"
                src="~/assets/icons/main/helpers/support.svg"
                alt=""
              />
              <h4 class="main-helpers__content-services-item-title">
                Поддержка 24/7
              </h4>
              <p class="main-helpers__content-services-item-text">
                Начните чат или заполните форму – отвечаем в любое время.
              </p>
            </div>
            <div class="main-helpers__content-services-item">
              <img
                class="main-helpers__content-services-item-img"
                src="~/assets/icons/main/helpers/base.svg"
                alt=""
              />
              <h4 class="main-helpers__content-services-item-title">
                База знаний
              </h4>
              <p class="main-helpers__content-services-item-text">
                Подробные инструкции помогут научиться работать с инструментами
                SendPulse.
              </p>
            </div>
            <div class="main-helpers__content-services-item">
              <img
                class="main-helpers__content-services-item-img"
                src="~/assets/icons/main/helpers/edu.svg"
                alt=""
              />
              <h4 class="main-helpers__content-services-item-title">
                Академия АльфаСМС
              </h4>
              <p class="main-helpers__content-services-item-text">
                Курсы по настройке платформы и отдельных сервисов в соответствии
                с вашими потребностями.
              </p>
            </div>
            <div class="main-helpers__content-services-item">
              <img
                class="main-helpers__content-services-item-img"
                src="~/assets/icons/main/helpers/webinars.svg"
                alt=""
              />
              <h4 class="main-helpers__content-services-item-title">
                Вебинары
              </h4>
              <p class="main-helpers__content-services-item-text">
                Практические советы по AlfaSMS для различных бизнесов и
                реальные кейсы.
              </p>
            </div>
          </div>
          <div
            class="main-helpers__content-data"
            data-aos="fade-up-left"
            data-aos-duration="1500"
          >
            <BaseTypography
              class="main-helpers__content-data-title"
              view="h3"
              title="Некогда разбираться в функционале АльфаСМС самостоятельно?"
            />
            <p class="main-helpers__content-data-desc">
              Запишитесь на бесплатное 20-минутное демо. Подскажем, как внедрить
              и настроить профессиональную платформу автоматизации маркетинга и
              продаж, а затем планомерно увеличивать конверсии.
            </p>
            <NuxtLink class="main-helpers__content-data-link" to="/"
              >Забронировать демо</NuxtLink
            >
            <p class="main-helpers__content-data-text">
              Поможем объединить все инструменты маркетинга
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.main-helpers {
  padding-block: 60px;

  @include mediaTablet {
    padding-block: 100px;
  }
  @include mediaLaptop {
    padding-block: 140px;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;

    @include mediaLaptop {
      grid-template-columns: 1fr 2fr;
    }

    &-info {
      display: flex;
      flex-direction: column;
      gap: 30px;

      &-title {
        margin-bottom: 30px;
      }

      &-text {
        line-height: 1.5;
      }
    }

    &-services {
      display: grid;
      grid-template-columns: 1fr;
      gap: 30px;

      @include mediaTablet {
        grid-template-columns: repeat(2, 1fr);
      }

      &-item {
        padding: 20px;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        border-radius: 10px;
        transition: all $fast_ease;
        &:hover {
          @include card_shadow;
          .main-helpers__content-services-item-title {
            color: $teal;
          }
        }

        &-img {
          width: 40px;
          aspect-ratio: 1/1;
          margin-bottom: 16px;

          @include mediaLaptop{
            width: 50px;
          }
          
        }
        &-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 11px;
        }
        &-text {
          margin-bottom: 20px;
        }
      }
    }
    &-data {
      padding: 48px 15px 0;

      &-title {
        margin-bottom: 20px;
        @include mediaDesktop{
        font-size: 28px;
        }
    
      }
      &-desc {
        font-size: 18px;
        line-height: 1.6;
        margin-bottom: 24px;
      }
      &-link {
        color: $teal;
        margin-bottom: 24px;
      }
      &-text {
        font-size: 18px;
        line-height: 1.6;
        opacity: 0.6;
        margin-bottom: 16px;
      }
    }
  }
}
</style>
