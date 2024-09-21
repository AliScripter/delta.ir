<template>
  <section class="pt-0">
    <b-container>
      <div class="inner-container-small text-center mb-4 mb-sm-6">
        <h2 class="mb-4">ویژگی‌های شامل در هر برنامه</h2>
        <p class="mb-0">
          تعهد ما به برتری در خدمات مشتری یکی از دلایل اصلی است که ما در صدر بازار قرار داریم.
          ما همیشه به سختی تلاش کرده‌ایم تا بهترین تجربه را برای مشتریان خود فراهم کنیم.
        </p>
      </div>

      <b-row class="g-4 g-lg-5">
        <b-col md="4" class="text-center">
          <b-card no-body class="card-body border bg-light">
            <div class="icon-lg text-primary mx-auto mb-3 flex-centered">
              <BIconClock class="fa-xl" />
            </div>
            <h6>در عرض چند دقیقه شروع کنید</h6>
            <p>ما این را آسان کرده‌ایم تا بتوانید بر روی مهم‌ترین مسائل تمرکز کنید.</p>
          </b-card>
        </b-col>

        <b-col md="4" class="text-center">
          <b-card no-body class="card-body border bg-light">
            <div class="icon-lg text-primary mx-auto mb-3 flex-centered">
              <BIconGraphUpArrow class="fa-xl" />
            </div>
            <h6>بهینه‌سازی درآمد شما</h6>
            <p>قدرت بهینه‌سازی درآمد را به موفقیت‌های بی‌سابقه تجربه کنید.</p>
          </b-card>
        </b-col>

        <b-col md="4" class="text-center">
          <b-card no-body class="card-body border bg-light">
            <div class="icon-lg text-primary mx-auto mb-3 flex-centered">
              <BIconHeadset class="fa-xl" />
            </div>
            <h6>پشتیبانی مشتریان 24/7</h6>
            <p>تیم پشتیبانی اختصاصی ما به درخواست‌های شما به‌طور ۲۴ ساعته پاسخ می‌دهد.</p>
          </b-card>
        </b-col>
      </b-row>

      <div class="table-responsive-xl mt-5">
        <b-table-simple responsive class="table-border align-middle">
          <b-thead class="align-top">
            <b-tr>
              <b-th scope="col"></b-th>

              <b-th scope="col">
                <div class="text-center p-3">
                  <span class="mb-3 heading-color">طرح پایه</span>
                  <p class="mb-3">
                    <span v-if="lang==='en'" class="h2 mb-0 plan-price">{{ currency }}25</span>
                    <span v-else-if="lang==='fa'" class="h2 mb-0 plan-price">25 <small class="fs-5">{{ currency }}</small></span>
                    /ماهیانه
                  </p>
                  <a href="#" class="btn btn-sm btn-dark mb-0">شروع کنید</a>
                </div>
              </b-th>

              <b-th scope="col">
                <div class="text-center p-3">
                  <span class="mb-3 heading-color">طرح استاندارد</span>
                  <p class="mb-3">
                    <span v-if="lang==='en'" class="h2 mb-0 plan-price">{{ currency }}56</span>
                    <span v-else-if="lang==='fa'" class="h2 mb-0 plan-price">56 <small class="fs-5">{{ currency }}</small></span>
                    /ماهیانه
                  </p>
                  <a href="#" class="btn btn-sm btn-dark mb-0">شروع کنید</a>
                </div>
              </b-th>

              <b-th scope="col">
                <div class="text-center p-3">
                  <span class="mb-3 heading-color">طرح پایه</span>
                  <p class="mb-3">
                    <span v-if="lang==='en'" class="h2 mb-0 plan-price">{{ currency }}99</span>
                    <span v-else-if="lang==='fa'" class="h2 mb-0 plan-price">99 <small class="fs-5">{{ currency }}</small></span>
                    /ماهیانه
                  </p>
                  <a href="#" class="btn btn-sm btn-dark mb-0">شروع کنید</a>
                </div>
              </b-th>
            </b-tr>
          </b-thead>

          <b-tbody class="border-top-0">
            <b-tr>
              <b-th scope="row"
                ><span class="fw-normal heading-color ps-lg-4 mb-0">فضای ذخیره‌سازی</span></b-th
              >
              <b-td class="text-center"> 40GB </b-td>
              <b-td class="text-center"> 60GB </b-td>
              <b-td class="text-center">نامحدود</b-td>
            </b-tr>

            <b-tr>
              <b-th scope="row"
                ><span class="fw-normal heading-color ps-lg-4 mb-0">متصل به ابر</span></b-th
              >
              <b-td class="text-center"  > بله </b-td>
              <b-td class="text-center"  > بله </b-td>
              <b-td class="text-center"  > بله </b-td>
            </b-tr>

            <b-tr>
              <b-th scope="row"
                ><span class="fw-normal heading-color ps-lg-4 mb-0">ابزارهای کدنویسی</span></b-th
              >
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
            </b-tr>

            <b-tr>
              <b-th scope="row"
                ><span class="fw-normal heading-color ps-lg-4 mb-0">اشکال‌زدایی پیشرفته</span></b-th
              >
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
            </b-tr>

            <b-tr>
              <b-th scope="row"
                ><span class="fw-normal heading-color ps-lg-4 mb-0">اپلیکیشن‌های موبایل</span></b-th
              >
              <b-td class="text-center text-danger">
                <BIconXCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
            </b-tr>

            <b-tr>
              <b-th scope="row"
                ><span class="fw-normal heading-color ps-lg-4 mb-0">ابزارهای وب</span></b-th
              >
              <b-td class="text-center text-danger">
                <BIconXCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
            </b-tr>

            <b-tr>
              <b-th scope="row"
                ><span class="fw-normal heading-color ps-lg-4 mb-0">کنترل نسخه</span></b-th
              >
              <b-td class="text-center text-danger">
                <BIconXCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
            </b-tr>

            <b-tr>
              <b-th scope="row"
                ><span class="fw-normal heading-color ps-lg-4 mb-0">امنیت</span></b-th
              >
              <b-td class="text-center text-danger">
                <BIconXCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-danger">
                <BIconXCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
            </b-tr>

            <b-tr>
              <b-th scope="row"
                ><span class="fw-normal heading-color ps-lg-4 mb-0">دسترسی تیم</span></b-th
              >
              <b-td class="text-center text-danger">
                <BIconXCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-danger">
                <BIconXCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { currency } from '@/helpers'
import {
  BIconCheckCircle,
  BIconClock,
  BIconGraphUpArrow,
  BIconHeadset,
  BIconXCircle
} from 'bootstrap-icons-vue'

const lang: string | undefined = inject('lang')
</script>
