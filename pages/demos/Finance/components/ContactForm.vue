<template>
  <section class="pt-0">
    <b-container>
      <div class="inner-container-small mx-auto">
        <div class="text-center mb-6">
          <h2 class="mb-">ما منتظر شما بودیم</h2>
          <p class="mb-0">
            می‌توانید شاهد شکوفایی و درخشش کسب‌وکار خود باشید، به موفقیت‌های جدیدی دست یابید و
            شکوفایی را تجربه کنید.
          </p>
        </div>
      </div>

      <b-row>
        <b-col lg="8" class="mx-auto">
          <form class="row g-4">
            <b-col md="6">
              <b-form-group label="نام شما *" label-class="heading-color">
                <b-form-input type="text" size="lg" placeholder="نام کامل" />
              </b-form-group>
            </b-col>

            <b-col md="6">
              <b-form-group label="آدرس ایمیل *" label-class="heading-color">
                <b-form-input
                  type="email"
                  size="lg"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
              </b-form-group>
            </b-col>

            <b-col md="6">
              <b-form-group label="شماره تلفن *" label-class="heading-color">
                <b-form-input type="text" size="lg" placeholder="(xxx) xx xxxx" />
              </b-form-group>
            </b-col>

            <b-col md="6">
              <b-form-group label="شرکت *" label-class="heading-color">
                <b-form-input type="text" size="lg" placeholder="نام شرکت" />
              </b-form-group>
            </b-col>

            <b-col cols="12">
              <b-form-group label="پیام *" label-class="heading-color">
                <b-form-textarea
                  placeholder="پیام خود را اینجا بنویسید...."
                  id="floatingTextarea2"
                  style="height: 150px"
                />
              </b-form-group>
            </b-col>
            <b-col cols="12" class="d-grid">
              <b-button variant="primary" size="lg" class="mb-0">ارسال پیام</b-button>
            </b-col>
          </form>

          <div class="bg-light border rounded py-4 px-5 mt-6">
            <b-row class="align-items-center">
              <b-col md="7">
                <h5 class="mb-">به راهنمایی مالی نیاز دارید؟</h5>
                <p class="mb-0">
                  ما همیشه به شدت تلاش کرده‌ایم تا بهترین تجربه را برای مشتریان خود فراهم کنیم.
                </p>
              </b-col>

              <b-col md="4" class="ms-auto text-end">
                <div class="mb-2 text-center">
                  <span v-if="lang==='en'" class="heading-color fs-3 fw-bold">{{ currency }}20</span>
                  <span v-else-if="lang==='fa'" class="heading-color fs-3 fw-bold">20 <small class="fs-5">{{ currency }}</small></span>
                  /در ساعت
                </div>
                <router-link to="" class="btn btn-white border mb-0 w-100">رزرو تماس!</router-link>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { currency } from '@/helpers'

const lang: string | undefined = inject('lang')
</script>
