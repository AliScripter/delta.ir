<template>
  <b-card no-body class="bg-transparent mb-6">
    <b-card-header
      class="bg-transparent border-bottom d-flex justify-content-between align-items-center px-0"
    >
      <h5>اطلاعات شخصی</h5>
      <a href="#" class="btn btn-sm btn-light border mb-0 icons-center">
        <BIconPlusLg class="me-1" />
        افزودن جدید
      </a>
    </b-card-header>

    <b-card-body class="px-0 pb-0">
      <b-card-body class="p-0">
        <b-form class="row g-3">
          <b-col md="6">
            <b-form-group label="نام">
              <b-form-input type="text" v-model="name" aria-label="نام" />
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="نام خانوادگی">
              <b-form-input type="text" v-model="lastName" aria-label="نام خانوادگی" />
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="ایمیل">
              <b-form-input type="email" v-model="email" />
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="شماره موبایل">
              <b-form-input type="text" v-model="mobileNo" />
            </b-form-group>
          </b-col>

          <b-col cols="12">
            <b-form-group label="آدرس">
              <b-form-input type="text" v-model="address" />
            </b-form-group>
          </b-col>

          <b-col cols="12">
            <b-form-group label="آدرس 2 (اختیاری)">
              <b-form-input type="text" />
            </b-form-group>
          </b-col>

          <b-col md="4">
            <b-form-group label="کشور">
              <b-form-select v-model="selectedCountry" :options="countryOptions" />
            </b-form-group>
          </b-col>

          <b-col md="4">
            <b-form-group label="استان">
              <b-form-select v-model="selectedState" :options="stateOptions" />
            </b-form-group>
          </b-col>

          <b-col md="4">
            <b-form-group label="کد پستی">
              <b-form-input type="text" v-model="zip" />
            </b-form-group>
          </b-col>

          <b-col md="12">
            <b-form-checkbox
              >آدرس حمل و نقل همان آدرس صورتحساب من است</b-form-checkbox
            >
            <b-form-checkbox>این اطلاعات را برای بار بعدی ذخیره کن</b-form-checkbox>
          </b-col>

          <b-col cols="12">
            <label class="form-label me-2">کارت‌های ذخیره‌شده شما</label>
            <a href="#"><img :src="visa" class="w-40px ms-1" alt="" /></a>
            <a href="#"><img :src="mastercard" class="w-40px ms-3" alt="" /></a>
          </b-col>
        </b-form>
      </b-card-body>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { BIconPlusLg } from 'bootstrap-icons-vue'

import visa from '@/assets/images/elements/visa.svg'
import mastercard from '@/assets/images/elements/mastercard.svg'

const name = 'ژاکلین'
const lastName = 'میلر'
const email = 'example@gmail.com'
const mobileNo = '9154857896'
const zip = '444555'
const address = '۱۴۲۱ جاده کوبورن هالو، متامورا، نزدیک مرکز پوینت، ایلینوی ۶۱۵۴۸.'

const selectedCountry = ref('1')
const selectedState = ref('1')
const countryOptions = [
  { value: '1', text: 'بریتانیا' },
  { value: '2', text: 'آمریکا' },
  { value: '3', text: 'هند' }
]
const stateOptions = [
  { value: '1', text: 'نیویورک' },
  { value: '2', text: 'کالیفرنیا' },
  { value: '3', text: 'مومبئی' },
  { value: '4', text: 'پرو' }
]
</script>
