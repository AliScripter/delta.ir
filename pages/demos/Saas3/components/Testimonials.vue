<template>
  <section>
    <b-container>
      <b-row class="align-items-center">
        <b-col lg="5" class="mb-5 mb-sm-0">
          <h2 class="mb-4">داستان‌های موفقیت به روایت خودشان</h2>
          <p class="mb-4">
            بخوانید که مشتریان راضی ما درباره تجربیاتشان با پلتفرم ما چه می‌گویند.
          </p>
          <router-link
            class="btn btn-lg btn-primary icon-link icon-link-hover mb-4 mb-lg-8"
            :to="{ name: 'customer.stories' }"
            >مشاهده تمام نظرات<BIconArrowRight class="rtl:-scale-x-100" />
          </router-link>

          <h6 class="mb-2">مورد اعتماد بیش از 50 هزار مشتری</h6>
          <div class="d-flex">
            <ul class="list-inline">
              <li
                class="list-inline-item small me-1"
                v-for="(_star, idx) in new Array(4)"
                :key="idx"
              >
                <font-awesome-icon :icon="faStar" class="text-warning" />
              </li>
              <li class="list-inline-item small me-1">
                <font-awesome-icon :icon="faStarHalfAlt" class="text-warning rtl:-scale-x-100" />
              </li>
              <li class="list-inline-item heading-color fw-normal me-0">4.4/5.0</li>
            </ul>
            <span class="text-secondary mx-2 mx-sm-3">|</span>
            <p class="mb-0">3,857 نظر</p>
          </div>
        </b-col>

        <b-col lg="7" class="ps-xl-6">
          <b-row class="g-4">
            <b-col md="6">
              <b-card no-body class="card-hover-shadow border p-4 mb-4">
                <ul class="list-inline mb-5">
                  <li
                    class="list-inline-item small me-1"
                    v-for="(_star, idx) in new Array(4)"
                    :key="idx"
                  >
                    <font-awesome-icon :icon="faStar" class="text-warning" />
                  </li>
                  <li class="list-inline-item small me-0">
                    <font-awesome-icon :icon="faStarHalfAlt" class="text-warning rtl:-scale-x-100" />
                  </li>
                </ul>

                <p class="heading-color mb-4">
                  "طرفداری مکرر از مالکیت یا ظاهر من را تحت تأثیر قرار نمی‌دهد. خیر، خوشبختی در دسترس نیست."
                </p>

                <div class="d-flex align-items-center">
                  <div class="avatar flex-shrink-0">
                    <img class="avatar-img rounded-circle" :src="avatar5" alt="avatar" />
                  </div>
                  <div class="ms-2">
                    <h6 class="mb-0">ژاکلین میلر</h6>
                    <p class="mb-0 small">مدیرعامل بلاگزین</p>
                  </div>
                </div>
              </b-card>

              <b-card no-body class="card-hover-shadow border p-4">
                <ul class="list-inline mb-5">
                  <li
                    class="list-inline-item small me-1"
                    v-for="(_star, idx) in new Array(4)"
                    :key="idx"
                  >
                    <font-awesome-icon :icon="faStar" class="text-warning" />
                  </li>
                  <li class="list-inline-item small me-0">
                    <font-awesome-icon :icon="faStarHalfAlt" class="text-warning rtl:-scale-x-100" />
                  </li>
                </ul>

                <p class="heading-color mb-4">
                  "خنده‌ها و شادی‌های ما بسیار زیاد بود و خوشبختانه، پشتیبانی لازم را برای دستیابی به اهداف بالا داشتیم. با وجود تلاش‌هایمان، برخی چالش‌ها همچنان باقی ماندند.
                  "
                </p>

                <div class="d-flex align-items-center">
                  <div class="avatar flex-shrink-0">
                    <img class="avatar-img rounded-circle" :src="avatar2" alt="avatar" />
                  </div>
                  <div class="ms-2">
                    <h6 class="mb-0">اما واتسون</h6>
                    <p class="mb-0 small">هم‌بنیان‌گذار</p>
                  </div>
                </div>
              </b-card>
            </b-col>

            <b-col md="6" class="mt-md-7">
              <b-card no-body class="card-hover-shadow border p-4 mb-4">
                <ul class="list-inline mb-5">
                  <li
                    class="list-inline-item small me-1"
                    v-for="(_star, idx) in new Array(4)"
                    :key="idx"
                  >
                    <font-awesome-icon :icon="faStar" class="text-warning" />
                  </li>
                  <li class="list-inline-item small me-0">
                    <font-awesome-icon :icon="faStarHalfAlt" class="text-warning rtl:-scale-x-100" />
                  </li>
                </ul>

                <p class="heading-color mb-4">
                  "دو نفر قبل از آنکه به تنگنا بیفتند، به جز لحظه‌ای از خودشان به کمک دیگران وابسته نشدند.
                  ناامیدی و اطمینان همسر راه را روشن کردند و در نهایت هیچ راهی برای جبران باقی نماند."
                </p>

                <div class="d-flex align-items-center">
                  <div class="avatar flex-shrink-0">
                    <img class="avatar-img rounded-circle" :src="avatar4" alt="avatar" />
                  </div>
                  <div class="ms-2">
                    <h6 class="mb-0">لوئیس فرگوسن</h6>
                    <p class="mb-0 small">توسعه‌دهنده وب</p>
                  </div>
                </div>
              </b-card>

              <b-card no-body class="card-hover-shadow border p-4">
                <ul class="list-inline mb-5">
                  <li
                    class="list-inline-item small me-1"
                    v-for="(_star, idx) in new Array(4)"
                    :key="idx"
                  >
                    <font-awesome-icon :icon="faStar" class="text-warning" />
                  </li>
                  <li class="list-inline-item small me-0">
                    <font-awesome-icon :icon="faStarHalfAlt" class="text-warning rtl:-scale-x-100" />
                  </li>
                </ul>

                <p class="heading-color mb-4">
                  "تعهد ما به خدمات مشتری عالی یکی از دلایل اصلی است که ما در صدر بازار قرار داریم. ما به طور مداوم تلاش می‌کنیم تا بهترین تجربه را برای مشتریانمان فراهم کنیم."
                </p>

                <div class="d-flex align-items-center">
                  <div class="avatar flex-shrink-0">
                    <img class="avatar-img rounded-circle" :src="avatar6" alt="avatar" />
                  </div>
                  <div class="ms-2">
                    <h6 class="mb-0">ساموئل بیشاپ</h6>
                    <p class="mb-0 small">طراح محصول</p>
                  </div>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconArrowRight } from 'bootstrap-icons-vue'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
</script>
