<template>
  <section class="pt-0">
    <b-container class="text-center">
      <p class="heading-color fw-semibold mb-4">استفاده شده توسط بهترین شرکت‌های جهان</p>

      <Swiper
        :modules="[Autoplay]"
        :autoplay="{ delay: 2000 }"
        :loop="false"
        :slidesPerView="2"
        :spaceBetween="30"
        :breakpoints="{
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1200: { slidesPerView: 6 }
        }"
        wrapperClass="align-items-center"
      >
        <SwiperSlide v-for="(client, idx) in clients" :key="idx">
          <a :href="client.href" target="_blank">
            <img :src="client.img" class="grayscale px-sm-4 ps-0" alt="client-img" />
          </a>
        </SwiperSlide>
      </Swiper>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { SwiperSlide, Swiper } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import client1Img from '@/assets/images/client/logo-tailwise.svg'
import client2Img from '@/assets/images/client/logo-listkit.svg'
import client3Img from '@/assets/images/client/logo-nephos.svg'
import client4Img from '@/assets/images/client/logo-vulk.svg'
import client5Img from '@/assets/images/client/logo-ideko.svg'
import client6Img from '@/assets/images/client/logo-mizzle.svg'
import client7Img from '@/assets/images/client/logo-eltheme.svg'

const clients = [
  { href: 'https://www.rtl-theme.com/tailwise-html-template/?aff=eltheme', img: client1Img, },
  { href: 'https://www.rtl-theme.com/listkit-html-template/?aff=eltheme', img: client2Img, },
  { href: 'https://www.rtl-theme.com/nephos-html-template/?aff=eltheme', img: client3Img, },
  { href: 'https://www.rtl-theme.com/vulk-web-application/?aff=eltheme', img: client4Img, },
  { href: 'https://www.rtl-theme.com/ideko-html-template/?aff=eltheme', img: client5Img, },
  { href: 'https://www.rtl-theme.com/mizzle-html-template/?aff=eltheme', img: client6Img, },
  { href: 'https://www.rtl-theme.com/tailwise-html-template/?aff=eltheme', img: client7Img, },
]
</script>
