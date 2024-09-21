<template>
  <section class="pt-lg-8 pt-xl-9">
    <b-container class="pt-4 pt-lg-0">
      <b-row>
        <b-col xl="9" class="mx-auto">
          <b-card no-body class="bg-dark p-5 mb-6" data-bs-theme="dark">
            <b-row class="g-4">
              <b-col md="5" xxl="4">
                <div class="d-flex align-items-center">
                  <div class="text-center bg-body rounded-2 flex-shrink-0 p-3 me-n2">
                    <img :src="slack" class="w-40px w-sm-80px" alt="" />
                  </div>
                  <div
                    class="icon-md text-center bg-white bg-opacity-25 rounded-circle flex-shrink-0 z-index-2"
                  >
                    <span class="fs-5"><BIconPlusLg class="mb-1" /></span>
                  </div>
                  <div class="text-center bg-body rounded-2 flex-shrink-0 p-3 ms-n2">
                    <img :src="logoIcon" class="w-40px w-sm-80px" alt="" />
                  </div>
                </div>
              </b-col>
              <b-col md="7" xxl="8">
                <h1 class="h3">میزل را به اسلک متصل کنید</h1>
                <p class="mb-0">
                  ادغام ما با میزل و اسلک به شما این امکان را می‌دهد که ارتباطات را بهبود بخشید و جریان کار خود را بهینه کنید.
                </p>
              </b-col>
            </b-row>
          </b-card>

          <h4>درباره ادغام</h4>
          <p>
            ادغام اسلک با میزل تحول‌آفرین است. با این ادغام، می‌توانید به‌راحتی داده‌ها، پیام‌ها و وظایف را بین نرم‌افزار ما و میزل همگام‌سازی کنید. از به‌روزرسانی‌های لحظه‌ای، ارتباطات بهبود یافته و جریان کار منظم‌تر لذت ببرید.
          </p>

          <p>
            این متن به‌نظر بی‌معنی و به‌طور واضح غیرمرتبط است و نیاز به اصلاح و بهینه‌سازی دارد.
          </p>

          <h5 class="mt-4">بخش 1: ادغام با میزل</h5>
          <p>
            ادغام اسلک با میزل تحول‌آفرین است. با این ادغام، می‌توانید به‌راحتی داده‌ها، پیام‌ها و وظایف را بین نرم‌افزار ما و میزل همگام‌سازی کنید. از به‌روزرسانی‌های لحظه‌ای، ارتباطات بهبود یافته و جریان کار منظم‌تر لذت ببرید.
          </p>
          <ul class="list-group list-group-borderless">
            <li
              v-for="item in list"
              :key="item"
              class="list-group-item heading-color d-flex mb-0 icons-center"
            >
              <BIconArrowRight class="me-2 rtl:-scale-x-100" />{{ item }}
            </li>
          </ul>

          <h5 class="mt-4">بخش 2: ادغام با اسلک</h5>
          <p>
            ادغام ما با اسلک همکاری تیمی شما را به سطح بعدی می‌برد. با اتصال میزل به اسلک، می‌توانید محیط کار کارآمدتر و تولیدی‌تری ایجاد کنید.
          </p>
          <ul class="list-group list-group-borderless mb-4">
            <li
              class="list-group-item heading-color d-flex mb-0 icons-center"
              v-for="list in list2"
              :key="list"
            >
              <BIconArrowRight class="me-2 rtl:-scale-x-100" />{{ list }}
            </li>
          </ul>

          <p class="mb-4">
            این محتوا نمایی کلی از چگونگی ادغام محصول SaaS شما با میزل و اسلک ارائه می‌دهد و ویژگی‌ها و مزایای کلیدی این ادغام‌ها را برجسته می‌کند. این متن بازدیدکنندگان را به اقدام و بررسی بیشتر این ادغام‌ها ترغیب می‌کند.
          </p>

          <a href="#" class="btn btn-dark mb-0">شروع کنید</a>
        </b-col>

        <b-col cols="12" class="mt-6 mt-md-8">
          <h3 class="mb-5 text-center">ادغام‌های مرتبط</h3>

          <b-row class="g-4">
            <b-col sm="6" lg="4" v-for="(card, idx) in grid" :key="idx">
              <b-card no-body class="card-hover-shadow border-primary-hover border h-100 p-4">
                <b-card-body class="p-0">
                  <div class="d-flex gap-3 align-items-center mb-3">
                    <img :src="card.image" class="h-40px" alt="Integrations-icon" />
                    <h6 class="mb-0">{{ card.title }}</h6>
                  </div>
                  <p>{{ card.description }}</p>
                </b-card-body>

                <b-card-footer class="bg-transparent p-0 mt-6">
                  <a
                    href="#"
                    class="icon-link icon-link-hover heading-color text-primary-hover stretched-link mb-0"
                    >مشاهده ادغام<BIconArrowRight class="bi rtl:-scale-x-100" />
                  </a>
                </b-card-footer>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { list, list2, grid } from '@/views/pages/saas/IntegrationSingle/data'
import { BIconArrowRight, BIconPlusLg } from 'bootstrap-icons-vue'

import slack from '@/assets/images/elements/slack.svg'
import logoIcon from '@/assets/images/logo-icon.svg'
</script>
