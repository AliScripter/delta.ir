<template>
  <b-card no-body class="bg-transparent text-center p-0">
    <img
      v-for="(image, idx) in product.images"
      :key="idx"
      :src="image"
      class="px-5"
      alt="product-img"
    />
    <b-card-body class="p-0 mt-3">
      <b-card-title tag="h6" class="mb-3"
        ><router-link v-if="product.route" :to="product.route">{{
          product.name
        }}</router-link></b-card-title
      >
      <div class="d-flex align-items-center justify-content-center mb-3">
        <template v-if="product.sale">
          <h6 class="fw-normal mb-0 me-1">
            <span v-if="lang==='en'">
              {{ currency }}
              {{ discountedPrice(product.price, product.sale.discount, product.sale.type) }}</span>
            <span v-else-if="lang==='fa'">
              {{ discountedPrice(product.price, product.sale.discount, product.sale.type) }}
              {{ currency }}
            </span>
          </h6>
          <span class="text-decoration-line-through">
            <span v-if="lang==='en'">{{ currency }}{{ product.price }}</span>
            <span v-else-if="lang==='fa'">{{ product.price }} {{ currency }}</span>
          </span>
        </template>
        <h6 v-else class="fw-normal mb-0 me-1">
          <span v-if="lang==='en'">{{ currency }}{{ product.price }}</span>
          <span v-else-if="lang==='fa'">{{ product.price }} {{ currency }}</span>
        </h6>
      </div>
      <router-link
        :to="{ name: product.route?.name, params: product.route?.params }"
        class="btn btn-sm btn-primary mb-0"
        >خرید کنید</router-link
      >
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import type { ProductType } from '@/types'
import type { PropType } from 'vue'
import { currency } from '@/helpers'
import { discountedPrice } from '@/helpers/product'

defineProps({
  product: {
    type: Object as PropType<ProductType>,
    required: true
  }
})

const lang: string | undefined = inject('lang')
</script>
