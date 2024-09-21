<template>
  <section class="pb-0">
    <b-container>
      <div class="inner-container-small text-center mb-4 mb-sm-5">
        <h2 class="mb-4">تشخیص‌های گیاهی را در 3 مرحله آسان دریافت کنید</h2>
        <p class="mb-0">
          فقط کافی است عکسی از گیاه خود بگیرید و شناسایی فوری دریافت کنید. اپلیکیشن ما از فناوری پیشرفته برای تشخیص سریع و دقیق هر
          مشکل گیاهی استفاده می‌کند.
        </p>
      </div>

      <Swiper
        :modules="[Autoplay, Pagination]"
        :autoplay="{ delay: 2000 }"
        :spaceBetween="30"
        :pagination="{
          el: '.swiper-pagination'
        }"
        :breakpoints="{
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 }
        }"
      >
        <SwiperSlide class="h-100">
          <b-card no-body class="bg-light overflow-hidden p-4 p-sm-5 h-100">
            <b-card-body class="p-0 pb-5">
              <div class="icon-lg bg-dark rounded-circle fw-bold text-white mb-3">01</div>
              <h5>دانلود اپلیکیشن</h5>
              <p class="heading-color">
                اپلیکیشن میزل را برای دستگاه‌های ویندوز، مک یا اندروید دانلود کنید.
              </p>
              <a href="#"><img :src="androidImg" class="h-30px me-3" alt="icon-img" /></a>
              <a href="#"><img :src="microSoftImg" class="h-30px me-3 ms-1" alt="icon-img" /></a>
              <a href="#"><img :src="appleImg" class="h-30px ms-1" alt="icon-img" /></a>
            </b-card-body>

            <b-card-footer class="bg-transparent p-0">
              <div
                class="iphone-x iphone-x-small m-auto mb-n9 me-n5 mt-4"
                :class="rtl ? '-rotate-335' : 'rotate-335'"
                :style="`background: url(${placeholderImg3}); background-size: 100%; width: 280px; height:430px`"
              >
                <i></i>
                <b style="left: 5%"></b>
              </div>
            </b-card-footer>
          </b-card>
        </SwiperSlide>

        <SwiperSlide class="h-100">
          <b-card no-body class="bg-light overflow-hidden p-4 p-sm-5 h-100">
            <b-card-body class="p-0 pb-5">
              <div class="icon-lg bg-dark rounded-circle fw-bold text-white mb-3">02</div>
              <h5>ایجاد حساب کاربری</h5>
              <p class="heading-color">
                برای دریافت حساب رایگان میزل ثبت‌نام کنید. یک حساب برای تمام دستگاه‌ها.
              </p>

              <a href="#" class="btn btn-sm btn-white mb-0">دوره آزمایشی 14 روزه رایگان</a>
            </b-card-body>

            <b-card-footer class="bg-transparent p-0">
              <div
                class="iphone-x iphone-x-small m-auto mb-n9 mt-4"
                :style="`background: url(${placeholderImg4}); background-size: 100%; width: 280px; height:430px`"
              >
                <i></i>
                <b style="left: 5%"></b>
              </div>
            </b-card-footer>
          </b-card>
        </SwiperSlide>

        <SwiperSlide class="h-100">
          <b-card no-body class="bg-light overflow-hidden p-4 p-sm-5 h-100">
            <b-card-body class="p-0 pb-5">
              <div class="icon-lg bg-dark rounded-circle fw-bold text-white mb-3">03</div>
              <h5>آماده‌اید که بروید</h5>
              <p class="heading-color mb-2">
                از تجربه شگفت‌انگیز میزل لذت ببرید و امروز کاوش در اپلیکیشن را آغاز کنید.
              </p>

              <router-link to="#">برای کمک به بخش سوالات متداول ما مراجعه کنید</router-link>
            </b-card-body>

            <b-card-footer class="bg-transparent p-0 mb-n9 ms-n5 mt-4">
              <div
                class="iphone-x iphone-x-small m-auto"
                :class="rtl ? '-rotate-33' : 'rotate-33'"
                :style="`background: url(${placeholderImg}); background-size: 100%; width: 280px; height:430px`"
              >
                <i></i>
                <b style="left: 5%"></b>
              </div>
            </b-card-footer>
          </b-card>
        </SwiperSlide>
        <div class="swiper-pagination swiper-pagination-primary position-relative mt-4" />
      </Swiper>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import placeholderImg from '@/assets/images/mokeup/app-placeholder.jpg'
import placeholderImg3 from '@/assets/images/mokeup/app-placeholder3.jpg'
import placeholderImg4 from '@/assets/images/mokeup/app-placeholder4.jpg'
import androidImg from '@/assets/images/elements/android.svg'
import microSoftImg from '@/assets/images/elements/microsoft.svg'
import appleImg from '@/assets/images/elements/apple.svg'

const rtl: boolean | undefined = inject('rtl')
</script>
