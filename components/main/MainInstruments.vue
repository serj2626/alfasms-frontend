<script lang="ts" setup>
import one from "~/assets/icons/main/instruments/one.svg";
import two from "~/assets/icons/main/instruments/two.svg";
import three from "~/assets/icons/main/instruments/three.svg";
import four from "~/assets/icons/main/instruments/four.svg";
import five from "~/assets/icons/main/instruments/five.svg";
import six from "~/assets/icons/main/instruments/six.svg";
import seven from "~/assets/icons/main/instruments/seven.svg";
import eight from "~/assets/icons/main/instruments/eight.svg";
import nine from "~/assets/icons/main/instruments/nine.svg";

interface IInstruments {
  img: string;
  title: string;
  text: string;
}

const instruments: IInstruments[] = [
  {
    // img: "https://www.spcdn.org/images/all-in-one/pic-allpage-stat-sm.svg",
    img: one,
    title: "15 000 писем в месяц",
    text: "в формате рассылок и транзакционных сообщений",
  },
  {
    img: two,
    title: "3 чат-бота",
    text: "с автоответами и поддержкой искусственного интеллекта GPT",
  },
  {
    img: three,
    title: "Полноценная CRM",
    text: "интегрированная с другими сервисами SendPulse",
  },
  {
    img: four,
    title: "1 сайт на конструкторе",
    text: "для продвижения бренда или эксперта",
  },
  {
    img: five,
    title: "10 попапов и онлайн-чат",
    text: "для вовлечения, поддержки и лидогенерации",
  },
  {
    img: six,
    title: "Формы подписки",
    text: "для сбора контактов с настройкой условий отображения",
  },
  {
    img: seven,
    title: "Web push сервис",
    text: "уведомления прямо на рабочий стол для 10 000 подписчиков",
  },
  {
    img: eight,
    title: "Автоматизация воронок",
    text: "для автоматизации процессов работы с контактами",
  },
  {
    img: nine,
    title: "Платформа для курсов",
    text: "для создания и продаж онлайн-курсов",
  },
];
</script>
<template>
  <section id="main-instruments" class="main-instruments container">
    <h2 class="main-instruments__title">
      Бесплатные инструменты многоканального маркетинга
    </h2>
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
        data-aos-duration="{{ idx + 1 * 2 }}00"
      >
        <img
          class="main-instruments__list-item-img"
          :src="instrument.img"
          :alt="instrument.title"
        />
        <div class="main-instruments__list-item-content">
          <h3 class="main-instruments__list-item-content-title">
            {{ instrument.title }}
          </h3>
          <p class="main-instruments__list-item-content-descr mb-0">
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
    font-size: 38px;
    font-weight: 600;
    line-height: 1.2;
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
    @include mediaDesktop {
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }
    &-item {
      border: 1px solid #f2f5f5;
      border-radius: 16px;
      background-color: $bg_white;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
      transition: all $fast_ease;
      cursor: pointer;

      &:hover {
        box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.1);
        .main-instruments__list-item-content-title {
          color: $teal;
        }
      }

      &-content {
        text-align: center;
        padding: 30px;

        &-title {
          font-weight: 700;
          font-size: 22px;
          line-height: 1.3;
          margin-bottom: 10px;
          transition: color $fast_ease;
        }
        &-descr {
          font-size: 18px;
          line-height: 1.5;
          color: $txt;
        }
      }
    }
  }
}
</style>
