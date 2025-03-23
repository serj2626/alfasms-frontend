<script lang="ts" setup>
interface IInstruments {
  img: string;
  title: string;
  text: string;
}

const instruments: IInstruments = {
  img: "https://www.spcdn.org/images/all-in-one/pic-allpage-stat-sm.svg",
  title: "15 000 писем в месяц",
  text: "в формате рассылок и транзакционных сообщений",
};
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
        v-for="x in 9"
        :key="x"
        data-aos="fade-up"
        data-aos-duration="{{ x * 100 }}"
      >
        <img
          class="main-instruments__list-item-img"
          :src="instruments.img"
          :alt="instruments.title"
        />
        <div class="main-instruments__list-item-content">
          <h3 class="main-instruments__list-item-content-title">
            {{ instruments.title }}
          </h3>
          <p class="main-instruments__list-item-content-descr mb-0">
            {{ instruments.text }}
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
