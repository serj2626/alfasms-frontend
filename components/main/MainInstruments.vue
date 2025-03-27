<script lang="ts" setup>
interface IInstruments {
  img: string;
  title: string;
  text: string;
}

const instruments: IInstruments[] = [
  {
    img: "instruments/one.svg",
    title: "15 000 писем в месяц",
    text: "в формате рассылок и транзакционных сообщений",
  },
  {
    img: "instruments/two.svg",
    title: "3 чат-бота",
    text: "с автоответами и поддержкой искусственного интеллекта GPT",
  },
  {
    img: "instruments/three.svg",
    title: "Полноценная CRM",
    text: "интегрированная с другими сервисами SendPulse",
  },
  {
    img: "instruments/four.svg",
    title: "1 сайт на конструкторе",
    text: "для продвижения бренда или эксперта",
  },
  {
    img: "instruments/five.svg",
    title: "10 попапов и онлайн-чат",
    text: "для вовлечения, поддержки и лидогенерации",
  },
  {
    img: "instruments/six.svg",
    title: "Формы подписки",
    text: "для сбора контактов с настройкой условий отображения",
  },
  {
    img: "instruments/seven.svg",
    title: "Web push сервис",
    text: "уведомления прямо на рабочий стол для 10 000 подписчиков",
  },
  {
    img: "instruments/eight.svg",
    title: "Автоматизация воронок",
    text: "для автоматизации процессов работы с контактами",
  },
  {
    img: "instruments/nine.svg",
    title: "Платформа для курсов",
    text: "для создания и продаж онлайн-курсов",
  },
];
</script>
<template>
  <section id="main-instruments" class="main-instruments container">
    <BaseTypography
      class="main-instruments__title"
      view="h2"
      title="Возможности бесплатного тарифа"
    />
    <p class="main-instruments__text">
      Возможностей бесплатного тарифа достаточно, чтобы настроить все
      инструменты под себя, протестировать базовые гипотезы и получить первые
      результаты
    </p>
    <div class="main-instruments__list">
      <div
        class="main-instruments__list-item"
        v-for="(instrument, idx) in instruments"
        :key="idx"
        data-aos="fade-up"
        :data-aos-duration="1000 + idx * 100"
      >
        <img
          class="main-instruments__list-item-img"
          :src="instrument.img"
          :alt="instrument.title"
        />
        <div class="main-instruments__list-item-content">
          <BaseTypography
            class="main-instruments__list-item-content-title"
            view="h3"
            :title="instrument.title"
          />
          <p class="main-instruments__list-item-content-descr">
            {{ instrument.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.main-instruments {
  padding-block: 140px 30px;

  &__title {
    text-align: center;
    margin-bottom: 30px;
    text-align: center;
  }
  &__text {
    font-size: 22px;
    line-height: 1.5;
    text-align: center;
    margin-bottom: 72px;
  }
  &__list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;

    @include mediaTablet {
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
    }
    @include mediaLaptop {
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }
    // @include mediaDesktop {
    //   grid-template-columns: repeat(4, 1fr);
    //   gap: 20px;
    // }
    &-item {
      border: 1px solid #f2f5f5;
      border-radius: 16px;
      background-color: $bg_white;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
      transition: all $fast_ease;
      cursor: pointer;

      &:hover {
        @include card_shadow();
        .main-instruments__list-item-content-title {
          color: $teal;
        }
      }

      &-content {
        text-align: center;
        padding: 30px;

        &-title {
          margin-bottom: 10px;
          transition: color $fast_ease;
        }
        &-descr {
          font-size: 18px;
          line-height: 1.5;
          color: $txt;
          &::first-letter {
            text-transform: uppercase;
          }
        }
      }
    }
  }
}
</style>
