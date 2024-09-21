<template>
  <section class="pb-0">
    <b-container>
      <div class="inner-container text-center mb-4 mb-sm-5">
        <h2 class="mb-4">راه‌حل‌های تخصصی برای رشد شما</h2>
        <p class="mb-0">
          هیچ چیزی نمی‌تواند شما را از رسیدن به آنچه که می‌خواهید متوقف کند، به جز خودتان. اگر به آن اختصاص دهید، به هدف خود خواهید رسید.
        </p>
      </div>

      <b-row class="justify-content-center g-4 g-md-6">
        <b-col md="6" lg="4">
          <b-card
            no-body
            class="bg-light border border-secondary border-opacity-10 overflow-hidden p-0 h-100"
          >
            <b-card-body class="px-sm-5 pt-sm-5">
              <h5 class="mb-3">ادغام‌های متعدد</h5>
              <p class="mb-3">
                ادغام‌های متعدد نقش مهمی در عملیات کسب‌وکارهای مدرن ایفا می‌کنند و سیستم‌های مختلف را به هم متصل می‌کنند.
              </p>
              <router-link :to="{ name: 'saas.integrations' }" class="btn btn-sm btn-dark mb-0"
                >ادغام‌ها را مشاهده کنید</router-link
              >
            </b-card-body>

            <b-card-footer class="bg-transparent p-0">
              <img :src="decoration7" alt="" />
            </b-card-footer>
          </b-card>
        </b-col>

        <b-col md="6" lg="4">
          <b-card
            no-body
            class="bg-light border border-secondary border-opacity-10 overflow-hidden p-0 h-100"
          >
            <b-card-body class="px-sm-5 pt-sm-5">
              <h5 class="mb-3">تبدیل‌های بالا</h5>
              <p class="mb-3">
                هر ردیف باید نمایانگر یک رکورد متمایز باشد، در حالی که ستون‌ها ویژگی‌ها یا متغیرهای مختلف را نگه می‌دارند.
              </p>

              <p class="mb-0">
                <span class="fw-bold heading-color"
                  >4.5 <font-awesome-icon :icon="faStar" class="text-warning me-2" />|</span
                >
                <router-link :to="{ name: 'customer.stories' }" class="text-primary-hover ms-2"
                  >۲۵۶ بازخورد را مشاهده کنید</router-link
                >
              </p>
            </b-card-body>

            <b-card-footer class="bg-transparent p-0">
              <img :src="decoration8" alt="" />
            </b-card-footer>
          </b-card>
        </b-col>

        <b-col md="6" lg="4">
          <b-card
            no-body
            class="bg-light border border-secondary border-opacity-10 overflow-hidden p-0 h-100"
          >
            <b-card-body class="px-sm-5 pt-sm-5">
              <h5 class="mb-3">تحلیل‌های آنی</h5>
              <p class="mb-3">
                یک نمای متحد از مشتری، تعاملات شخصی‌سازی شده را در نقاط تماس مختلف امکان‌پذیر می‌سازد.
              </p>
              <router-link :to="{ name: 'portfolio.showcase' }" class="icon-link icon-link-hover"
                >مطالعه موردی ما را بخوانید<BIconArrowRight class="bi rtl:-scale-x-100" />
              </router-link>
            </b-card-body>

            <b-card-footer class="bg-transparent p-0">
              <img :src="decoration9" alt="" />
            </b-card-footer>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconArrowRight } from 'bootstrap-icons-vue'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import decoration7 from '@/assets/images/elements/saas-decoration/07.png'
import decoration8 from '@/assets/images/elements/saas-decoration/08.png'
import decoration9 from '@/assets/images/elements/saas-decoration/09.png'
</script>
