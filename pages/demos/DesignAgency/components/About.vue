<template>
  <section>
    <b-container>
      <b-row>
        <b-col lg="11" class="mx-auto">
          <b-row class="g-4 g-lg-6">
            <b-col xl="5">
              <h3>
                ما یک آژانس دیجیتال پویا و نوآورانه هستیم که در قلب پر جنب و جوش
                <span class="text-primary">کالیفرنیا</span> قرار دارد
              </h3>
            </b-col>

            <b-col md="6" xl="3">
              <div class="bg-light rounded p-4 overflow-hidden">
                <h6 class="mb-5 mb-sm-8">از</h6>
                <div class="display-1 text-primary text-end mb-n5 mb-md-n6 me-n4">1386</div>
              </div>
            </b-col>

            <b-col md="6" xl="4">
              <h6 class="fw-semibold mb-5">17 سال تجربه کاری</h6>

              <b-accordion class="accordion-icon accordion-border-bottom" id="accordionFaq">
                <b-accordion-item
                  class="mb-3"
                  header-tag="div"
                  button-class="rounded fw-semibold"
                  visible
                >
                  <template #title>
                    <BIconBullseye class="text-primary me-2" />ماموریت ما
                  </template>
                  طراحی موثر هویت برند شما را منتقل می‌کند، اعتماد ایجاد می‌کند و می‌تواند به طور قابل توجهی
                  بر نرخ تبدیل و وفاداری مشتری تأثیر بگذارد.
                </b-accordion-item>

                <b-accordion-item class="mb-3" header-tag="div" button-class="rounded fw-semibold">
                  <template #title> <BIconTrophy class="text-primary me-2" />هدف ما </template>
                  ما مجموعه‌ای از ابزارها، راهنماها و بهترین روش‌ها را برای کمک به شما در ایجاد
                  طراحی‌ها و وب‌سایت‌ها ارائه می‌دهیم.
                </b-accordion-item>
              </b-accordion>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconBullseye, BIconTrophy } from 'bootstrap-icons-vue'
</script>
