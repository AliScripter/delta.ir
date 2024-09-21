<template>
  <Swiper
    :modules="[Autoplay]"
    :autoplay="{ delay: 2000 }"
    :loop="true"
    :slidesPerView="2"
    :spaceBetween="50"
    :breakpoints="{
      576: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      992: { slidesPerView: 5 },
      1200: { slidesPerView: 6 }
    }"
    wrapperClass="align-items-center"
  >
    <SwiperSlide v-for="(client, idx) in clientLogos" :key="idx">
      <a :href="client.href" target="_blank">
        <img :src="client.img" class="px-xl-3" alt="client-img" />
      </a>
    </SwiperSlide>
  </Swiper>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import client1Img from "@/assets/images/client/logo-tailwise.svg";
import client2Img from "@/assets/images/client/logo-listkit.svg";
import client3Img from "@/assets/images/client/logo-nephos.svg";
import client4Img from "@/assets/images/client/logo-vulk.svg";
import client5Img from "@/assets/images/client/logo-ideko.svg";
import client6Img from "@/assets/images/client/logo-mizzle.svg";

const clientLogos = [
  { href: 'https://www.rtl-theme.com/tailwise-html-template/?aff=eltheme', img: client1Img, },
  { href: 'https://www.rtl-theme.com/listkit-html-template/?aff=eltheme', img: client2Img, },
  { href: 'https://www.rtl-theme.com/nephos-html-template/?aff=eltheme', img: client3Img, },
  { href: 'https://www.rtl-theme.com/vulk-web-application/?aff=eltheme', img: client4Img, },
  { href: 'https://www.rtl-theme.com/ideko-html-template/?aff=eltheme', img: client5Img, },
  { href: 'https://www.rtl-theme.com/mizzle-html-template/?aff=eltheme', img: client6Img, },
]
</script>
