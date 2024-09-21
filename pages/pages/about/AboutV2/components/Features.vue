<template>
  <section class="pt-0">
    <b-container>
      <b-row class="g-4 align-items-center">
        <b-col lg="6">
          <b-row class="g-xl-5">
            <b-col md="6" v-for="(item, idx) in feature" :key="idx">
              <b-card no-body class="bg-light p-4" :class="idx == feature.length - 2 ? 'mt-5' : ''">
                <figure class="text-primary mb-3 flex-shrink-0">
                  <span v-html="item.icon" />
                </figure>
                <h6>{{ item.title }}</h6>
                <p class="mb-0">{{ item.description }}</p>
              </b-card>

              <b-card no-body class="bg-light p-4 mt-5">
                <figure class="text-primary mb-3 flex-shrink-0">
                  <span v-html="item.icon1" />
                </figure>
                <h6>{{ item.title1 }}</h6>
                <p class="mb-0">{{ item.description1 }}</p>
              </b-card>
            </b-col>
          </b-row>
        </b-col>

        <b-col lg="6" class="ps-xl-7">
          <h2 class="mb-4">با میزل آشنا شوید</h2>
          <p>
            در میزل، ما تنها در زمینه راه‌حل‌های دیجیتال فعالیت نمی‌کنیم؛ ما در زمینه ساخت داستان‌های موفقیت دیجیتال فعالیت می‌کنیم. با تأسیس بر پایه اشتیاق به نوآوری و تعهد به تعالی، ما در خط مقدم فضای دیجیتال قرار داریم و به کسب‌وکارهایی مانند کسب‌وکار شما کمک می‌کنیم تا در عصر دیجیتال شکوفا شوند.
          </p>
          <p>
            داستان ما با یک چشم‌انداز آغاز می‌شود - چشم‌اندازی برای تحول تجربه دیجیتال برای کسب‌وکارهایی از تمام اندازه‌ها. در طول سال‌ها، ما از یک استارتاپ کوچک به یک آژانس دیجیتال پویا با یک پایگاه جهانی تکامل یافته‌ایم.
          </p>
          <p class="mb-4">
            برای توانمندسازی کسب‌وکارها در دستیابی به اهداف دیجیتال خود. ما معتقدیم که قلمرو دیجیتال فرصت‌های بی‌پایانی برای رشد و ارتباط ارائه می‌دهد و ما اینجا هستیم تا شما را در این سفر تحول راهنمایی کنیم.
          </p>

          <router-link class="btn btn-dark me-3 mb-0" :to="{ name: 'services.v1' }"
            >خدمات را بررسی کنید!</router-link
          >
          <router-link :to="{ name: 'contact.v2' }" class="icon-link icon-link-hover ms-1"
            >درخواست قیمت
            <BIconArrowRight class="rtl:-scale-x-100" />
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { feature } from '@/views/pages/about/AboutV2/data'
import { BIconArrowRight } from 'bootstrap-icons-vue'
</script>
