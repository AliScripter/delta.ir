<template>
  <section class="bg-dark" data-bs-theme="dark">
    <b-container data-sticky-container>
      <b-row>
        <b-col lg="5" class="mb-5">
          <CustomStickyElement data-sticky data-margin-top="100" data-sticky-for="768">
            <h2 class="mb-4">جریان کار واضح‌تر و سازمان‌یافته‌تر می‌شود</h2>
            <p class="mb-0">
              دو نفر پیش از آنکه باریک شوند، به این که چگونه خود اطمینان حاصل کنند تکیه نکردند، زیرا خانم به‌طور قطع راه را رهبری کرد، بنابراین دروازه باز بود، هیچ چیزی به‌طور کامل باز نبود.
            </p>
            <hr class="my-5" />

            <div class="d-flex align-items-sm-center mb-3">
              <div class="avatar avatar-xl flex-shrink-0">
                <img class="avatar-img rounded-circle" :src="avatar5" alt="avatar" />
              </div>
              <div class="ms-3">
                <h6 class="mb-1">کارولین اورتیز</h6>
                <p class="mb-0">مدیر آژانس میزل</p>
              </div>
            </div>
            <q class="fs-6 fw-normal heading-color mb-4"
              >در آژانس ما، ما فقط کمپین‌ها را ایجاد نمی‌کنیم؛ ما تجربیات فراگیر می‌سازیم که با مخاطبان شما هماهنگ است و نشانه‌ای ماندگار در دل‌ها و ذهن‌های آنها بر جا می‌گذارد.</q
            >
          </CustomStickyElement>
        </b-col>

        <b-col lg="6" class="ms-auto">
          <template v-for="(step, idx) in steps" :key="idx">
            <StepCard :step="step" />
          </template>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { steps } from '@/views/demos/Saas4/data'
import StepCard from '@/views/demos/Saas4/components/StepCard.vue'
import CustomStickyElement from '@/components/CustomStickyElement.vue'

import avatar5 from '@/assets/images/avatar/05.jpg'
</script>
