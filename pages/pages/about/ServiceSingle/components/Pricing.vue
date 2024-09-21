<template>
  <section class="pt-0">
    <b-container>
      <b-row>
        <b-col lg="6" class="mb-6 mb-lg-0">
          <b-card no-body class="bg-dark overflow-hidden p-sm-4 h-100" data-bs-theme="dark">
            <b-card-header class="bg-transparent position-relative mb-3">
              <h3 class="mb-3">طرح قیمت‌گذاری برای این سرویس</h3>
              <p>
                طرح اساسی ما یک راه‌حل خودسرویس برای کسب‌وکارها است تا به مدیریت پیام‌رسانی و شخصی‌سازی وب‌سایت بپردازند.
              </p>

              <b-tabs nav-class="gap-1 nav-pills-primary" pills content-class="mt-5">
                <b-tab title="ماهانه" class="fade">
                  <div
                    class=""
                    id="pills-monthly"
                    role="tabpanel"
                    aria-labelledby="pills-monthly-tab"
                    tabindex="0"
                  >
                    <div class="bg-light border rounded p-3">
                      <h6 class="mb-3">نگاهی سریع به تمام ویژگی‌ها</h6>

                      <ul class="list-group list-group-borderless">
                        <li class="list-group-item mb-0">
                          <BIconPatchCheckFill class="text-primary me-2" />بازدیدکنندگان ماهیانه نامحدود
                        </li>
                        <li class="list-group-item mb-0">
                          <BIconPatchCheckFill class="text-primary me-2" />استراتژیست‌های اختصاصی SEO
                        </li>
                        <li class="list-group-item mb-0">
                          <BIconPatchCheckFill class="text-primary me-2" />ویرایشگرهای سبک گوگل اسناد
                        </li>
                        <li class="list-group-item mb-0">
                          <BIconPatchCheckFill class="text-primary me-2" />پشتیبانی ابتدایی چت و ایمیل
                        </li>
                        <li class="list-group-item mb-0">
                          <BIconPatchCheckFill class="text-primary me-2" />موتور توصیه محصولات مبتنی بر هوش مصنوعی
                        </li>
                      </ul>
                    </div>

                    <div class="d-sm-flex justify-content-between align-items-center mt-4">
                      <div class="mb-3 mb-sm-0 heading-color">
                        <span v-if="lang==='en'" class="h3">{{ currency }}199</span>
                        <span v-else-if="lang==='fa'" class="h3">199 <small class="fs-6">{{ currency }}</small></span>
                        / ماهیانه
                      </div>

                      <a href="#" class="btn btn-lg btn-white mb-0">شروع کنید</a>
                    </div>
                  </div>
                </b-tab>

                <b-tab title="Annual" class="fade">
                  <div
                    class=""
                    id="pills-annual"
                    role="tabpanel"
                    aria-labelledby="pills-annual-tab"
                    tabindex="0"
                  >
                    <div class="bg-light border rounded p-3">
                      <h6 class="mb-3">نگاهی سریع به تمام ویژگی‌ها</h6>

                      <ul class="list-group list-group-borderless">
                        <li class="list-group-item mb-0">
                          <BIconPatchCheckFill class="text-primary me-2" />بازدیدکنندگان ماهیانه نامحدود
                        </li>
                        <li class="list-group-item mb-0">
                          <BIconPatchCheckFill class="text-primary me-2" />استراتژیست‌های اختصاصی SEO
                        </li>
                        <li class="list-group-item mb-0">
                          <BIconPatchCheckFill class="text-primary me-2" />ویرایشگرهای سبک گوگل اسناد
                        </li>
                        <li class="list-group-item mb-0">
                          <BIconPatchCheckFill class="text-primary me-2" />پشتیبانی ابتدایی چت و ایمیل
                        </li>
                        <li class="list-group-item mb-0">
                          <BIconPatchCheckFill class="text-primary me-2" />موتور توصیه محصولات مبتنی بر هوش مصنوعی
                        </li>
                      </ul>
                    </div>

                    <div class="d-sm-flex justify-content-between align-items-center mt-4">
                      <div class="mb-3 mb-sm-0 heading-color">
                        <span v-if="lang==='en'" class="h3">{{ currency }}159</span>
                        <span v-else-if="lang==='fa'" class="h3">159 <small class="fs-6">{{ currency }}</small></span>
                        / ماهیانه
                      </div>

                      <a href="#" class="btn btn-lg btn-white mb-0">شروع کنید</a>
                    </div>
                  </div>
                </b-tab>
              </b-tabs>
            </b-card-header>
          </b-card>
        </b-col>

        <b-col lg="5" class="ms-auto">
          <h2>بازخورد برای بهبود خدمات</h2>
          <p class="lead mb-2">
            بیش از 300 کاربر به ما امتیاز <span class="text-primary fw-bold">4.85</span> از 5 داده‌اند.
          </p>

          <Swiper
            class="mt-7"
            :modules="[Autoplay, Pagination]"
            :autoplay="{
              delay: 2000
            }"
            :loop="true"
            :spaceBetween="30"
            :grabCursor="true"
            :pagination="{
              el: '.swiper-pagination',
              clickable: true
            }"
          >
            <SwiperSlide class="mb-5" v-for="(item, idx) in pricing" :key="idx">
              <SwiperCard :testimonial="item" />
            </SwiperSlide>

            <div
              class="swiper-pagination swiper-pagination-primary position-relative text-start"
            ></div>
          </Swiper>
        </b-col>
      </b-row>
    </b-container>
  </section>

  <section class="position-relative z-index-2 pt-0">
    <b-container class="position-relative">
      <div class="inner-container bg-light border rounded position-relative overflow-hidden p-4">
        <figure class="position-absolute top-0 start-0 ms-n8 rtl:-scale-x-100">
          <svg
            width="371"
            height="354"
            viewBox="0 0 371 354"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="172.5"
              cy="176.5"
              rx="131.5"
              ry="125.5"
              fill="url(#paint0_linear_195_2)"
            ></ellipse>
            <ellipse
              cx="185.5"
              cy="177"
              rx="185.5"
              ry="177"
              fill="url(#paint1_linear_195_2)"
            ></ellipse>
            <defs>
              <linearGradient
                id="paint0_linear_195_2"
                x1="172.5"
                y1="51"
                x2="172.5"
                y2="302"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0569271" stop-color="#D9D9D9" stop-opacity="0.5"></stop>
                <stop offset="0.998202" stop-color="#D9D9D9" stop-opacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_195_2"
                x1="185.5"
                y1="0"
                x2="185.5"
                y2="354"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0569271" stop-color="#D9D9D9" stop-opacity="0.2"></stop>
                <stop offset="0.998202" stop-color="#D9D9D9" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </figure>

        <b-row class="align-items-center g-4 position-relative">
          <b-col md="7">
            <h5 class="mb-0">کسب‌وکار خود را با خدمات شفاف ما تقویت کنید.</h5>
          </b-col>

          <b-col md="5" class="text-md-end">
            <router-link :to="{ name: 'contact.v2' }" class="btn btn-dark mb-0"
              >با ما هم اکنون تماس بگیرید</router-link
            >
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import { currency } from '@/helpers'
import { pricing } from '@/views/pages/about/ServiceSingle/data'
import SwiperCard from '@/views/pages/about/ServiceSingle/components/SwiperCard.vue'
import { BIconPatchCheckFill } from 'bootstrap-icons-vue'

const lang: string | undefined = inject('lang')
</script>
