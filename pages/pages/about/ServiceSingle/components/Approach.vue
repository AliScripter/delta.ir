<template>
  <section class="pt-0">
    <b-container>
      <b-row class="g-4 g-lg-7">
        <b-col md="6">
          <h4 class="mb-4">رویکرد ما</h4>
          <p>
            رویکرد آژانس خود را به بازاریابی دیجیتال توصیف کنید، از جمله هرگونه استراتژی یا متدولوژی اختصاصی که استفاده می‌کنید. توضیح دهید که چگونه استراتژی‌ها را برای برآورده کردن نیازهای خاص مشتریان خود سفارشی می‌کنید.
          </p>
          <p>
            این شامل دامنه وسیعی از تاکتیک‌ها و استراتژی‌ها است که به‌منظور دستیابی، درگیر کردن، و تبدیل مشتریان بالقوه در دنیای دیجیتال طراحی شده است. بازاریابی دیجیتال از پلتفرم‌های آنلاین مختلف، مانند موتورهای جستجو، رسانه‌های اجتماعی، ایمیل، بازاریابی محتوا، و تبلیغات پرداختی استفاده می‌کند تا ارتباطات معنی‌داری با مخاطبان دیجیتال مسلط ایجاد کند.
          </p>
        </b-col>

        <b-col md="6">
          <b-card no-body class="card-body bg-light border p-md-5">
            <h4 class="mb-3">مزایای خدمات</h4>

            <b-list-group class="list-group-borderless border-0">
              <b-list-group-item
                v-for="list in approach"
                :key="list"
                class="heading-color d-flex mb-0"
              >
                <span class="flex-centered">
                  <BIconPatchCheck class="text-primary me-2" />
                </span>
                {{ list }}
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { approach } from '@/views/pages/about/ServiceSingle/data'
import { BIconPatchCheck } from 'bootstrap-icons-vue'
</script>
