<template>
  <b-form>
    <b-card no-body class="bg-transparent p-0">
      <b-card-header class="bg-transparent border-bottom p-0 pb-3">
        <h6 class="mb-0">اطلاعات شخصی</h6>
      </b-card-header>

      <b-card-body class="px-0">
        <b-row class="g-4">
          <b-col cols="12">
            <label class="form-label">تصویر پروفایل</label>
            <div class="d-flex align-items-center">
              <label class="position-relative me-2" title="این تصویر را عوض کنید">
                <span class="avatar avatar-xl">
                  <img
                    class="avatar-img rounded-circle border border-white border-3 shadow"
                    :src="avatar07"
                    alt=""
                  />
                </span>

                <b-button variant="dark" class="uploadremove flex-centered">
                  <BIconX class="text-white" />
                </b-button>
              </label>

              <label class="btn btn-sm btn-dark mb-0">تغییر</label>
              <input class="form-control d-none" type="file" />
            </div>
          </b-col>

          <b-col cols="12">
            <label class="form-label">نام کامل</label>
            <div class="input-group">
              <input type="text" class="form-control" value="ژاکلین" placeholder="نام کوچک" />
              <input type="text" class="form-control" value="میلر" placeholder="نام خانوادگی" />
            </div>
          </b-col>

          <b-col md="6">
            <b-form-group label="آدرس ایمیل" label-for="email" class="">
              <b-form-input
                type="email"
                class=""
                v-model="email"
                placeholder="آدرس ایمیل خود را وارد کنید"
              />
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="شماره موبایل" label-for="number" class="">
              <b-form-input
                type="text"
                class=""
                v-model="number"
                placeholder="شماره موبایل خود را وارد کنید"
              />
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="ملیت" label-for="select" class="">
              <b-form-select class="form-select" :options="options" v-model="selected">
              </b-form-select>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group class="" label="جنسیت را انتخاب کنید" label-for="radio">
              <div class="input-group">
                <div class="form-control">
                  <div class="form-check radio-bg-light">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      checked
                    />
                    <label class="form-check-label" for="flexRadioDefault1">مرد</label>
                  </div>
                </div>

                <div class="form-control">
                  <div class="form-check radio-bg-light">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label class="form-check-label" for="flexRadioDefault2">زن</label>
                  </div>
                </div>

                <div class="form-control">
                  <div class="form-check radio-bg-light">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                    />
                    <label class="form-check-label" for="flexRadioDefault3">سایر</label>
                  </div>
                </div>
              </div>
            </b-form-group>
          </b-col>

          <b-col cols="12">
            <b-form-group label="آدرس" label-for="address">
              <b-form-textarea
                class=""
                rows="3"
                spellcheck="false"
                v-model="textarea"
              ></b-form-textarea>
            </b-form-group>
          </b-col>

          <b-col cols="12" class="text-end">
            <a href="#" class="btn btn-primary mb-0">ذخیره تغییرات</a>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </b-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BIconX } from 'bootstrap-icons-vue'

import avatar07 from '@/assets/images/avatar/07.jpg'

const textarea = ref('۲۱۱۹ خیابان دیویژن شمالی، نیوهمپشایر، یورک، ایالات متحده')

const selected = ref('Paris')
const options = [
  { value: null, text: 'کشور خود را انتخاب کنید' },
  { value: 'USA', text: 'ایالات متحده' },
  { value: 'Paris', text: 'پاریس' },
  { value: 'India', text: 'هند' },
  { value: 'UK', text: 'بریتانیا' }
]
const email = ref('hello@gmail.com')
const number = ref('222 555 666')
</script>
