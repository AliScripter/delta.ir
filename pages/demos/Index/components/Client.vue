<template>
  <section class="pb-0">
    <b-container>
      <b-row class="align-items-center">
        <b-col md="3" class="mb-2 mb-md-0">
          <h5 class="pe-6">بیش از 100 شرکت به ما اعتماد دارند</h5>
        </b-col>

        <b-col md="9">
          <Swiper
            :modules="[Autoplay]"
            :autoplay="{ delay: 2000 }"
            :loop="true"
            :slidesPerView="2"
            :spaceBetween="50"
            :breakpoints="{
              576: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 5 }
            }"
            wrapperClass="align-items-center"
          >
            <SwiperSlide v-for="(item, idx) in clients" :key="idx">
              <a :href="item.href" target="_blank"><img :src="item.img" class="grayscale" alt="client-img" /></a>
            </SwiperSlide>
          </Swiper>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import { clients } from '@/views/demos/Index/data'
</script>
