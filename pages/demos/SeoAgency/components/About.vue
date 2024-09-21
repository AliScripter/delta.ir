<template>
  <section>
    <b-container>
      <b-row>
        <b-col md="11" class="mx-auto">
          <b-row class="align-items-center">
            <b-col md="6" lg="5" class="mb-4 mb-md-0">
              <img :src="about21" class="rounded" alt="" />
            </b-col>
            <b-col md="6" class="ms-auto">
              <h2 class="mb-md-4">درباره سفر ما به تسلط بر SEO بیاموزید</h2>
              <p class="mb-md-4">
                با تیمی از حرفه‌ای‌های متعهد و سال‌ها تجربه صنعتی، ما به ارائه راه‌حل‌های نوآورانه و مؤثر SEO که به نیازهای منحصر به فرد شما تطبیق داده شده‌اند، افتخار می‌کنیم.
              </p>
              <p class="mb-md-4">
                چه شما یک استارتاپ کوچک باشید و چه یک شرکت بزرگ، ما تخصص لازم برای برآورده کردن نیازهای شما را داریم.
              </p>
              <div class="text-center d-inline-block bg-dark rounded px-5 py-3">
                <span class="text-white">علاقه‌مند به همکاری هستید؟ </span>
                <router-link class="ms-2" :to="{ name: 'contact.v2' }"
                  >با ما هم اکنون تماس بگیرید
                  <BIconChevronRight class="small rtl:-scale-x-100" />
                </router-link>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconChevronRight } from 'bootstrap-icons-vue'

import about21 from '@/assets/images/about/21.jpg'
</script>
