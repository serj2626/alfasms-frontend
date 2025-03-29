<script lang="ts" setup>
interface IPlatforma {
  img: string;
  title: string;
  desc: string;
  fade: string;
  duration: number;
}

const platforma: IPlatforma[] = [
  {
    img: "platforma/cup.svg",
    title: "Менеджерам по продажам",
    desc: "CRM – центр вашего бизнеса. Управляйте продажами и каналами связи, автоматизируйте прохождение контактов по воронке продаж, работайте с соглашениями и мгновенно получайте всю информацию о клиенте.",
    fade: "fade-up",
    duration: 1000,
  },
  {
    img: "platforma/academy.svg",
    title: "Онлайн-школам, продюсерам",
    desc: "Запускайте и продавайте свои курсы или продюссируйте экспертов с помощью украинского сервиса. В SendPulse обучение, продвижение и продажи объединены на одной платформе для вашего комфорта.",
    fade: "fade-up",
    duration: 1000,
  },
  {
    img: "platforma/cup.svg",
    title: "Экспертам, владельцам бизнеса",
    desc: "Заявите о себе или своем любимом деле без привлечения посторонних специалистов: все инструменты легко настраиваются благодаря визуальному конструктору и сотням готовых шаблонов для любой задачи.",
    fade: "fade-up",
    duration: 1000,
  },
  {
    img: "platforma/target.svg",
    title: "Маркетологам",
    desc: "Объедините все маркетинговые мероприятия на одной платформе и скоординируйте коммуникации в разных каналах. Это увеличит ваши конверсии и рентабельность инвестиций. Никаких интеграций – инструменты уже соединены между собой.",
    fade: "fade-up",
    duration: 1000,
  },
];
</script>
<template>
  <section id="main-platform" class="main-platform container">
    <div class="main-platform__content">
      <BaseTypography
        class="main-platform__content-title"
        view="h2"
        title="Платформа универсальна и будет полезна специалистам из разных сфер"
      />
      <p class="main-platform__content-text">
        Используйте AlfaSMS, если вы самостоятельно развиваете бизнес,
        управляете командой любого размера или планируете заявить о своем
        бизнесе в интернете
      </p>
    </div>
    <div class="main-platform__list">
      <div
        v-for="item in platforma"
        :key="item.title"
        class="main-platform__list-card"
        :data-aos="item.fade"
        :data-aos-duration="item.duration"
      >
        <img
          :src="item.img"
          class="main-platform__list-card-img"
          :alt="item.title"
        />
        <h3 class="main-platform__list-card-title">{{ item.title }}</h3>
        <p class="main-platform__list-card-text">
          {{ item.desc }}
        </p>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.main-platform {
  padding-block: 140px;

  &__content {
    margin-bottom: 72px;

    &-title {
      text-align: center;
      margin-bottom: 15px;

      @include mediaTablet {
        font-size: 30px;
        margin-bottom: 30px;
        width: 720px;
        margin-inline: auto;
      }
      @include mediaLaptop {
        font-size: 34px;
        width: 616px;
        margin-inline: auto;
      }
      @include mediaDesktop {
        font-size: 38px;
        width: 750px;
        margin-inline: auto;
      }
    }
    &-text {
      font-size: 18px;
      line-height: 1.5;
      text-align: center;
      margin-inline: auto;

      @include mediaTablet {
        font-size: 20px;
        margin-bottom: 30px;
      }
      @include mediaDesktop {
        font-size: 22px;
      }
    }
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;

    @include mediaTablet {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mediaLaptop {
      grid-template-columns: repeat(3, 1fr);
    }

    @include mediaDesktop {
      grid-template-columns: repeat(4, 1fr);
    }

    &-card {
      display: flex;
      flex-direction: column;
      gap: 10px;

      &-img {
        width: 40px;
        aspect-ratio: 1/1;

        @include mediaLaptop{
          width: 50px;
        }
      }

      &-title {
        font-size: 28px;
        font-weight: 600;
      }

      &-text {
      }
    }
  }
}
</style>
