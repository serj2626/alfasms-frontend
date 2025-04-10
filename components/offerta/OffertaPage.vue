<script lang="ts" setup>
const title = ref('Договор публичной оферты');
const html = `<p>
    Информация на сайте не является публичной офертой
</p>
<p>
    <br>
    Обращаем ваше внимание на&nbsp;то, что данный интернет-сайт носит исключительно информационный характер и&nbsp;ни&nbsp;при каких условиях не&nbsp;является публичной офертой, определяемой положениями Статьи 437 п.&nbsp;2 Гражданского кодекса Российской Федерации.
</p>
<p>
    &nbsp;
</p>
<p>
    Для&nbsp;получения подробной информации о&nbsp;наличии и&nbsp;стоимости указанных товаров и (или) услуг, пожалуйста, пишите на&nbsp;e-mail&nbsp;<a href="mailto:office@polaclinic.ru">office@polaclinic.ru</a>
</p>
<p>
    &nbsp;
</p>
<p>
    Нажатие на&nbsp;кнопку «Записаться на&nbsp;консультацию», а&nbsp;также последующее заполнение тех или иных форм, не&nbsp;накладывает на&nbsp;владельцев сайта никаких обязательств.
</p>
<p>
    &nbsp;
</p>
<p>
    Присланное по&nbsp;e-mail сообщение, содержащее копию заполненной формы заявки на&nbsp;сайте, не&nbsp;является ответом на&nbsp;сообщение потребителя или подтверждением заказа со&nbsp;стороны владельцев сайта.
</p>`;
</script>
<template>
  <div class="offerta-page">
    <div class="offerta-page__header">
      <div class="offerta-page__header-content container">
        <BaseTypography
          class="offerta-page__header-content-title"
          view="h1"
          :title="title || 'Договор публичной оферты'"
        />
      </div>
    </div>
    <div class="container">
      <!-- <BaseBreadcrumbs
        class="offerta-page__breadcrumbs"
        :current-page="'ДОГОВОР ПУБЛИЧНОЙ ОФЕРТЫ'"
      /> -->
      <BaseWysiwyg v-if="html" :html="html" class="offerta-page__content" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.offerta-page {
  &__header {
    background: $bg_linear_second;

    &-content {
      padding: 140px 0 100px;

      &-title {
        color: $txt_white;
        margin-bottom: 29px;
        text-align: center;
      }
    }
  }

  &__content {
    width: 90%;
    margin-inline: auto;
    margin-top: 50px;
    padding-bottom: 50px;
    animation: showText 1s ease-in;
  }
}
</style>
