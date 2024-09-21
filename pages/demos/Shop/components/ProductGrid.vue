<template>
  <section class="pt-0">
    <b-container>
      <div class="d-sm-flex justify-content-between align-items-center mb-4">
        <h3>چه چیزهایی در حال حاضر محبوب است</h3>
        <a class="icon-link icon-link-hover text-body-secondary text-primary-hover" href="#"
          >تمام محصولات را مشاهده کنید
          <BIconArrowRight class="bi rtl:-scale-x-100" />
        </a>
      </div>

      <b-row class="g-4 g-sm-5">
        <b-col lg="8" xl="6">
          <b-card
            no-body
            class="p-0 h-100"
            :style="`background-image:url(${shopBg}); background-position: center left; background-size: cover;`"
          >
            <b-card-body class="p-5 mb-8">
              <span class="bg-dark text-white rounded fw-semibold small px-3 py-2"
                >محصولات جدید</span
              >
              <h4 class="text-white my-4">عملکرد قدرتمند. طراحی همه‌جانبه.</h4>
              <a class="btn btn-lg btn-outline-white icon-link icon-link-hover mb-0" href="#"
                >همین حالا خرید کنید
                <BIconArrowRight class="bi rtl:-scale-x-100" />
              </a>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col sm="6" lg="4" xl="3" v-for="(product, idx) in trendingProducts" :key="idx">
          <TrendingProductCard :product="product" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { trendingProducts } from '@/assets/data/products'
import TrendingProductCard from '@/views/demos/Shop/components/TrendingProductCard.vue'
import { BIconArrowRight } from 'bootstrap-icons-vue'

import shopBg from '@/assets/images/shop/bg/03.jpg'
</script>
