<template>
  <Section>
    <div class="inner-container mx-auto text-center">
      <span v-if="lang==='en'" class="fs-1 fw-semibold text-primary">{{ currency }}3,058,886</span>
      <span v-else-if="lang==='fa'" class="fs-1 fw-semibold text-primary">3,058,886 {{ currency }}</span>
      <h4 class="my-4 fw-semibold">شاهد شکوفایی و درخشش کسب‌وکار خود باشید</h4>
      <p class="w-75 mx-auto mb-4">
        با راهنمایی و پشتیبانی کارشناسان ما، می‌توانید شاهد شکوفایی و درخشش کسب‌وکار خود باشید، به موفقیت‌های
        جدیدی دست یابید و شکوفایی را تجربه کنید.
      </p>
      <a class="btn btn-lg btn-dark icon-link icon-link-hover" href="#"
        >محاسبه رشد
        <BIconArrowRight class="bi rtl:-scale-x-100" />
      </a>

      <div class="position-relative my-6 w-75 mx-auto">
        <hr />
        <p
          class="position-absolute heading-color fw-semibold top-50 start-50 translate-middle bg-body px-4"
        >
          سرمایه‌گذاران ما
        </p>
      </div>

      <Swiper
        :modules="[Autoplay]"
        :autoplay="{
          delay: 2000
        }"
        :loop="true"
        :slidesPerView="2"
        :spaceBetween="50"
        :breakpoints="{
          576: { slidesPerView: 4 },
          992: { slidesPerView: 4 },
          1200: { slidesPerView: 5 }
        }"
        wrapperClass="align-items-center"
      >
        <SwiperSlide v-for="(image, idx) in investors" :key="idx">
          <a :href="image.href" target="_blank">
            <img :src="image.img" class="grayscale" alt="client-img" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  </Section>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { currency } from '@/helpers'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { BIconArrowRight } from 'bootstrap-icons-vue'

import client1Img from '@/assets/images/client/logo-tailwise.svg'
import client2Img from '@/assets/images/client/logo-listkit.svg'
import client3Img from '@/assets/images/client/logo-nephos.svg'
import client4Img from '@/assets/images/client/logo-vulk.svg'
import client5Img from '@/assets/images/client/logo-ideko.svg'
import client6Img from '@/assets/images/client/logo-mizzle.svg'

const lang: string | undefined = inject('lang')

const investors = [
  { href: 'https://www.rtl-theme.com/tailwise-html-template/?aff=eltheme', img: client1Img, },
  { href: 'https://www.rtl-theme.com/listkit-html-template/?aff=eltheme', img: client2Img, },
  { href: 'https://www.rtl-theme.com/nephos-html-template/?aff=eltheme', img: client3Img, },
  { href: 'https://www.rtl-theme.com/vulk-web-application/?aff=eltheme', img: client4Img, },
  { href: 'https://www.rtl-theme.com/ideko-html-template/?aff=eltheme', img: client5Img, },
  { href: 'https://www.rtl-theme.com/mizzle-html-template/?aff=eltheme', img: client6Img, },
]
</script>
