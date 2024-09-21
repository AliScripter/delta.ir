<template>
  <b-form>
    <div class="d-flex justify-content-between align-items-center border-bottom pb-4 mb-4">
      <h6 class="rounded-0 mb-0">اطلاع‌رسانی ایمیل</h6>
      <b-button size="sm" class="btn-white border">تغییر همه</b-button>
    </div>

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <p class="heading-color fw-bold mb-0">اخبار و به‌روزرسانی‌ها</p>
        <small>اخبار مربوط به محصولات و به‌روزرسانی ویژگی‌ها</small>
      </div>

      <div class="form-check form-switch form-check-md mb-0 ms-3">
        <b-form-checkbox switch id="checkPrivacy1" v-model="checked" />
      </div>
    </div>

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <p class="heading-color fw-bold mb-0">نکات و آموزش‌ها</p>
        <small>نکاتی برای بهره‌گیری بیشتر از حالت نامحدود</small>
      </div>

      <div class="form-check form-switch form-check-md mb-0 ms-3">
        <b-form-checkbox switch id="7" size="md" class="ms-3" v-model="checked" />
      </div>
    </div>

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <p class="heading-color fw-bold mb-0">تحقیقات کاربری</p>
        <small>نکاتی برای بهره‌گیری بیشتر از حالت نامحدود</small>
      </div>

      <div class="form-check form-switch form-check-md mb-0 ms-3">
        <b-form-checkbox switch id="4" />
      </div>
    </div>

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <p class="heading-color fw-bold mb-0">نظرات</p>
        <small>نظرات در پست شما و پاسخ‌ها به نظرات</small>
      </div>

      <div class="form-check form-switch form-check-md mb-0 ms-3">
        <b-form-checkbox swicth id="5" />
      </div>
    </div>

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <p class="heading-color fw-bold mb-0">یادآوری‌ها</p>
        <small>مایلم یادآوری‌های کمک به رزرو را دریافت کنم</small>
      </div>

      <div class="form-check form-switch form-check-md mb-0 ms-3">
        <b-form-checkbox swicth class="form-check-input" type="checkbox" id="checkPrivacy5" />
      </div>
    </div>
  </b-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(true)
</script>
