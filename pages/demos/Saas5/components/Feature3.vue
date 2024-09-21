<template>
  <section class="pt-0">
    <b-container>
      <b-row class="align-items-center">
        <b-col lg="6" xl="5" class="mb-6 mb-lg-0">
          <h2 class="mb-sm-4">با راه‌حل جامع ما، کارهای بیشتری را انجام دهید</h2>
          <p class="mb-sm-5">
            وظایف خود را ساده کنید و با استفاده از یک پلتفرم جامع، که برای برآورده کردن نیازهای شما از ابتدا تا انتها طراحی شده است، به نتایج بیشتری دست یابید.
          </p>

          <h6 class="fw-semibold mb-5">#۱ نویسنده پرفروش قالب بوت‌استرپ</h6>

          <div class="d-flex align-items-center mb-4">
            <div class="w-25 h-100 me-4 me-sm-5 flex-shrink-0" :class="rtl ? 'border-start' : 'border-end'">
              <div class="d-flex">
                <h4 class="purecounter mb-0">
                  <Vue3autocounter ref="counter" :startAmount="0" :endAmount="200" :duration="3" />
                </h4>
                <span class="h4 text-primary mb-0">+</span>
              </div>
            </div>
            <p class="heading-color mb-0">
              مجموعه وسیعی از مشتریان، از فریلنسرها تا غول‌های شرکتی
            </p>
          </div>

          <div class="d-flex align-items-center">
            <div class="w-25 h-100 me-4 me-sm-5 flex-shrink-0" :class="rtl ? 'border-start' : 'border-end'">
              <div class="d-flex">
                <h4 class="purecounter mb-0">
                  <Vue3autocounter ref="counter" :startAmount="0" :endAmount="14" :duration="3" />
                </h4>
                <span class="h4 text-primary mb-0">K+</span>
              </div>
            </div>
            <p class="heading-color mb-0">
              پاسخ به انواع سوالات و درخواست‌ها در طی ۵ سال گذشته
            </p>
          </div>
        </b-col>

        <b-col lg="6" class="ms-auto">
          <div class="position-relative d-flex flex-column h-100">
            <b-col md="9" class="mx-auto z-index-2">
              <img :src="decoration23" alt="" />
            </b-col>
            <div
              class="bg-light border rounded-3 h-50 w-100 position-absolute bottom-0 start-0"
            ></div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import Vue3autocounter from 'vue3-autocounter'

import decoration23 from '@/assets/images/elements/saas-decoration/23.png'

const rtl: boolean | undefined = inject('rtl')
</script>
