<template>
  <section class="pb-0">
    <b-container>
      <b-row>
        <b-col lg="11">
          <b-row class="align-items-center">
            <b-col lg="6" class="order-2 mt-5 mt-lg-0">
              <Swiper
                class="mt-2 mt-md-4"
                :modules="[Autoplay, EffectFade]"
                loop
                :effect="'fade'"
                :grabCursor="true"
                :autoplay="{
                  delay: 3000
                }"
                wrapperClass="align-items-center"
              >
                <SwiperSlide v-for="(testimonial, idx) in testimonials" :key="idx">
                  <TestimonialCard :testimonial="testimonial" />
                </SwiperSlide>
              </Swiper>
            </b-col>

            <b-col lg="6" class="ms-auto order-1 order-lg-2">
              <span class="text-primary fw-bold text-uppercase">نظرات</span>
              <h2 class="my-3">به گفته‌های ما اعتماد نکنید. ببینید مشتریان ما چه می‌گویند.</h2>
              <p class="mb-4">
                بشنوید مشتریان راضی ما درباره تجربیاتشان با پلتفرم ما چه می‌گویند. کشف کنید چگونه به آژانس‌هایی مانند آژانس شما کمک کرده‌ایم تا نتایج چشمگیری بدست آورند.
              </p>
              <div class="d-sm-flex gap-3">
                <a href="#" class="btn btn-lg btn-dark mb-2 mb-sm-0">شروع کنید</a>
                <a
                  class="icon-link icon-link-hover heading-color text-primary-hover mb-0 ms-1"
                  href="#"
                  >ویژگی‌ها را مرور کنید
                  <BIconArrowRight class="bi rtl:-scale-x-100" />
                </a>
              </div>

              <hr class="my-6" />

              <b-row class="row-cols-2 row-cols-sm-3 g-4 g-md-5 align-items-center">
                <b-col v-for="(image, idx) in clients" :key="idx">
                  <a :href="image.href" target="_blank">
                    <img :src="image.img" class="grayscale px-2" alt="client-img" />
                  </a>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'
import TestimonialCard from '@/views/demos/Saas2/components/TestimonialCard.vue'
import { testimonials } from '@/views/demos/Saas2/data'
import { BIconArrowRight } from 'bootstrap-icons-vue'

import client1Img from "@/assets/images/client/logo-tailwise.svg";
import client2Img from "@/assets/images/client/logo-listkit.svg";
import client3Img from "@/assets/images/client/logo-nephos.svg";
import client4Img from "@/assets/images/client/logo-vulk.svg";
import client5Img from "@/assets/images/client/logo-ideko.svg";
import client6Img from "@/assets/images/client/logo-mizzle.svg";

const clients = [
  { href: 'https://www.rtl-theme.com/tailwise-html-template/?aff=eltheme', img: client1Img, },
  { href: 'https://www.rtl-theme.com/listkit-html-template/?aff=eltheme', img: client2Img, },
  { href: 'https://www.rtl-theme.com/nephos-html-template/?aff=eltheme', img: client3Img, },
  { href: 'https://www.rtl-theme.com/vulk-web-application/?aff=eltheme', img: client4Img, },
  { href: 'https://www.rtl-theme.com/ideko-html-template/?aff=eltheme', img: client5Img, },
  { href: 'https://www.rtl-theme.com/mizzle-html-template/?aff=eltheme', img: client6Img, },
]
</script>
