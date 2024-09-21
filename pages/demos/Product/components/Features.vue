<template>
  <section class="pb-0">
    <b-container>
      <b-row class="g-0 bg-light rounded overflow-hidden">
        <b-col md="6">
          <b-card no-body class="card-body bg-transparent d-block p-4 p-md-5 p-lg-7 h-100">
            <h2 class="mb-4">با صدای ویژه‌ای که صدا را در اطراف شما قرار می‌دهد</h2>
            <p class="mb-4">
              چرا ممکن است پایان دوباره مدنی بپرسد. شام او به اسب‌های ما وابسته است به یادآوری
              در کودکان با رزرو به اطراف.
            </p>
            <ul class="list-group list-group-borderless mb-4">
              <li
                class="list-group-item d-flex heading-color pb-0 icons-center"
                v-for="(feature, idx) in features"
                :key="idx"
              >
                <span>
                  <BIconPatchCheckFill class="text-primary me-2" />
                </span>
                {{ feature }}
              </li>
            </ul>
            <router-link to="" class="btn btn-dark mb-0">برای جزئیات بیشتر اینجا کلیک کنید</router-link>
          </b-card>
        </b-col>

        <b-col md="6">
          <div
            class="h-100 py-8 py-md-0"
            :style="`background:url(${about8}) no-repeat; background-size:cover;`"
          ></div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconPatchCheckFill } from 'bootstrap-icons-vue'

import about8 from '@/assets/images/about/08.jpg'

const features = [
  'یک بار فشار دهید تا پخش کنید، متوقف کنید یا به تماس تلفنی پاسخ دهید',
  'دو بار فشار دهید تا به جلو بروید',
  'سه بار فشار دهید تا به عقب بروید',
  'فشار داده و نگه دارید تا بین حذف نویز فعال تغییر کنید',
  'به بالا یا پایین بکشید تا صدا را تنظیم کنید'
]
</script>
