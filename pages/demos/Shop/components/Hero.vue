<template>
  <section class="pt-5 pt-xl-7">
    <Swiper
      class="overflow-hidden pt-5"
      loop
      :modules="[Autoplay, Pagination]"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false
      }"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
    >
      <SwiperSlide>
        <b-card
          no-body
          class="overflow-hidden h-500px h-xl-750px rounded-0"
          :style="`background-image:url(${shopBackgroundImg1}); background-position: center left; background-size: cover;`"
        >
          <div class="bg-overlay bg-dark opacity-5 d-lg-none"></div>
          <div class="card-img-overlay d-flex align-items-center">
            <b-container>
              <b-row>
                <b-col sm="11" lg="8" xl="5" :class="rtl && 'ms-auto'">
                  <span class="d-inline-block text-bg-dark small rounded-pill px-3 py-2 mb-4"
                    >انتشار جدید mizz-VR</span
                  >
                  <h1 class="text-white display-6 mb-4">به دنیای واقعیت مجازی وارد شوید</h1>

                  <p class="text-white mb-4">
                    چه شما به بازی‌های ویدیویی علاقه‌مند باشید و چه به دنبال راهی شگفت‌انگیز برای فرار از واقعیت باشید، محصول واقعیت مجازی ما دروازه‌ای به سوی هیجان بی‌پایان و ماجراجویی است.
                  </p>
                  <a class="btn btn-lg btn-outline-white icon-link icon-link-hover mb-0" href="#"
                    >جزئیات را نمایش دهید<BIconArrowRight class="bi rtl:-scale-x-100" />
                  </a>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </b-card>
      </SwiperSlide>

      <SwiperSlide>
        <b-card
          no-body
          class="overflow-hidden h-500px h-xl-750px rounded-0"
          :style="`background-image:url(${shopBackgroundImg2}); background-position: center left; background-size: cover;`"
        >
          <div class="bg-overlay bg-dark opacity-5 d-lg-none"></div>
          <div class="card-img-overlay d-flex align-items-center">
            <b-container>
              <b-row>
                <b-col md="11" lg="8" xl="5" :class="!rtl && 'ms-auto'">
                  <p class="fs-4 fw-normal text-white mb-3">
                    مجموعه جشنواره <span class="text-bg-dark rounded px-3">۱۴۰۲</span>
                  </p>
                  <h1 class="text-white display-4 mb-3">۵۰٪ تخفیف</h1>

                  <p class="text-white mb-4">
                    به دنیای کیفیت و هنر پیشروی کنید - زمان آن رسیده است که بهترین خود را به نمایش بگذارید.
                  </p>
                  <a class="btn btn-lg btn-dark icon-link icon-link-hover mb-0" href="#"
                    >اکنون نمایش دهید<BIconArrowRight class="bi rtl:-scale-x-100" />
                  </a>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </b-card>
      </SwiperSlide>

      <div class="swiper-pagination swiper-pagination-line position-absolute bottom-0 mb-3"></div>
    </Swiper>
  </section>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import { BIconArrowRight } from 'bootstrap-icons-vue'

import shopBackgroundImg1 from '@/assets/images/shop/bg/01.jpg'
import shopBackgroundImg2 from '@/assets/images/shop/bg/02.jpg'

const rtl: boolean | undefined = inject('rtl')
</script>
