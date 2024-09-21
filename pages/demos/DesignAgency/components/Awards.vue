<template>
  <section
    class="position-relative"
    :style="`background-image:url(${backgroundImg}); background-position: center left; background-size: cover;`"
    data-bs-theme="dark"
  >
    <b-container class="position-relative z-index-2">
      <div class="inner-container-small m-0 mb-8">
        <h2 class="h1 fw-normal mb-0">جشن گرفتن موفقیت‌ها با افتخارات جوایز ما</h2>
      </div>

      <b-row>
        <b-col md="10" xl="6">
          <b-row class="row-cols-1 row-cols-sm-2 g-4 g-md-5">
            <b-col>
              <h5>جوایز</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item px-0">افتخار / آژانس تبلیغاتی / ۱۴۰۰</li>
                <li class="list-group-item px-0">افتخار / آژانس تبلیغاتی / ۱۴۰۱</li>
                <li class="list-group-item px-0">افتخار / کارشناس مد / ۱۳۹۹</li>
                <li class="list-group-item px-0">افتخار / فریم دیجیتال / ۱۳۹۹</li>
                <li class="list-group-item px-0">افتخار / آژانس تبلیغاتی / ۱۳۹۸</li>
              </ul>
            </b-col>

            <b-col>
              <h5>جایزه طراحی CSS</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item px-0">وب‌سایت روز / امپوریا / ۱۳۹۹</li>
                <li class="list-group-item px-0">تقدیر ویژه / به ARCR / 1400</li>
                <li class="list-group-item px-0">تقدیر ویژه / به ARCR / 1399</li>
                <li class="list-group-item px-0">تبریک ویژه / به باشگاه رفرمت / ۱۳۹۸</li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import backgroundImgLTR from '@/assets/images/bg/14.jpg'
import backgroundImgRTL from '@/assets/images/bg/14-rtl.jpg'

const rtl: boolean | undefined = inject('rtl')

const backgroundImg = rtl ? backgroundImgRTL : backgroundImgLTR;
</script>
