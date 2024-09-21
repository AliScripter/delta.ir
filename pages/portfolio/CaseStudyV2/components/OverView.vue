<template>
  <b-row class="justify-content-lg-end justify-content-center flex-lg-nowrap mb-7">
    <b-col cols="12" class="d-flex mb-5 mb-sm-6 mb-lg-0">
      <img :src="studyImg" class="rounded" alt="portfolio-img" />
    </b-col>

    <b-col lg="5" class="ps-lg-6">
      <h4 class="mb-4">بررسی اجمالی</h4>
      <p class="mb-4">
        قالب داشبورد مدیریتی تیلوایز با ارائه مجموعه‌ای گسترده
        از ۱۱ نسخه تم با دقت طراحی شده، نیازهای برندینگ منحصر به فرد شما را به خوبی پاسخ می‌دهد.
        با استفاده از ترکیب رنگی دوگانه و زیبا، رابط کاربری شما شکوه و حرفه‌ای بودن را به نمایش می‌گذارد.
        با داشتن بیش از 50 صفحه و طرح از پیش طراحی شده، قالب ما پایه‌ای چندمنظوره فراهم می‌کند که در زمان و تلاش شما برای
        راه‌اندازی رابط مدیریت صرفه‌جویی می‌کند. با بهره‌گیری از انعطاف‌پذیری Tailwind و توانایی‌های قدرتمند آن،
        قالب ما به شما امکان می‌دهد رابط‌های کاربری زیبا و واکنش‌گرا را به سادگی و کارآمدی ایجاد کنید.
        این قالب مدیریت HTML رای کسانی است که به دنبال یک قالب مدیریتی پیشرفته هستند که به طور کامل از قدرت و قابلیت‌های
        بی‌نظیر Tailwind CSS بهره می‌برد و در عین حال در توسعه و شخصی‌سازی قالب راحتی و سادگی را در اولویت قرار می‌دهند.
      </p>
      <table class="table table-borderless mb-4">
        <tbody>
          <tr>
            <th scope="row" class="heading-color px-0 py-2">مشتری:</th>
            <td class="px-0 py-2">ال تم</td>
          </tr>
          <tr>
            <th scope="row" class="heading-color px-0 py-2">مدیر:</th>
            <td class="px-0 py-2">اما واتسون، ماریا اسمیت</td>
          </tr>
          <tr>
            <th scope="row" class="heading-color px-0 py-2">دسته‌بندی:</th>
            <td class="px-0 py-2">طراحی وب‌سایت</td>
          </tr>
          <tr>
            <th scope="row" class="heading-color px-0 py-2">جوایز:</th>
            <td class="px-0 py-2">
              <span class="d-block"> جایزه طراحی آناناس</span>
              <span class="d-block mt-2"> پروژه سال </span>
              <span class="d-block mt-2"> طراح سال</span>
            </td>
          </tr>
        </tbody>
      </table>

      <a href="https://www.rtl-theme.com/tailwise-html-template/?aff=eltheme" target="_blank" class="btn btn-dark mb-0"
        >مشاهده وب‌سایت پروژه<BIconBoxArrowUpRight class="ms-2 rtl:-scale-x-100 mb-1"
      /></a>
    </b-col>
  </b-row>
</template>

<script lang="ts" setup>
import { BIconBoxArrowUpRight } from 'bootstrap-icons-vue'

import studyImg from '@/assets/images/portfolio/case-study-02.jpg'
</script>
