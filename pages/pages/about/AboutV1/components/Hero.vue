<template>
  <section class="bg-dark pt-sm-8 pb-9" data-bs-theme="dark">
    <b-container class="pt-4 pt-sm-0">
      <b-row class="g-4 g-xxl-5">
        <b-col lg="8">
          <h1 class="mb-0 lh-base">آژانس مدرن و خلاق متخصص در کسب‌وکار</h1>
          <p class="mb-0 mt-4">
            فرض کنید که صبحانه را در حال حل یا به‌طور کامل انجام می‌دهید. این تپه‌ای را از من کشید. دره‌ای با بیست به‌طور مستقیم من را راهنمایی کرد. Departure معیوب ترتیب رعدآسا را انجام داد که به او حمایت کرد.
          </p>
        </b-col>
        <b-col lg="4" xl="3" class="ms-auto position-relative">
          <ul class="list-group list-group-borderless mb-4">
            <li
              v-for="item in list"
              :key="item"
              class="list-group-item d-flex heading-color pb-0 icons-center"
            >
              <BIconPatchCheck class="text-primary me-2" />{{ item }}
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { list } from '@/views/pages/about/AboutV1/data'
import { BIconPatchCheck } from 'bootstrap-icons-vue'
</script>
