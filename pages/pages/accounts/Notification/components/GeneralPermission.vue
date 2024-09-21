<template>
  <b-form>
    <div class="d-flex justify-content-between align-items-center border-bottom pb-4 mb-4">
      <h6 class="rounded-0 mb-0">مجوز عمومی</h6>
      <b-button size="sm" class="btn-white border">تغییر همه</b-button>
    </div>

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <p class="heading-color fw-bold mb-0">اطلاع‌رسانی در مورد به‌روزرسانی‌ها و فعالیت‌ها</p>
        <small>وقتی کسی گزارشی به اشتراک بگذارد یا شما را به پروژه‌ای دعوت کند، مطلع خواهید شد</small>
      </div>

      <div class="form-check form-switch form-check-md mb-0 ms-3">
        <b-form-checkbox switch id="checkPrivacy6" v-model="checked" />
      </div>
    </div>

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <p class="heading-color fw-bold mb-0">ارسال خلاصه هفتگی</p>
        <small>به‌روزرسانی هفتگی در مورد تغییرات در بیانیه تم و موارد دیگر</small>
      </div>

      <div class="form-check form-switch form-check-md mb-0 ms-3">
        <b-form-checkbox swicth id="checkPrivacy7" v-model="checked" />
      </div>
    </div>

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <p class="heading-color fw-bold mb-0">همکاران</p>
        <small>مایلم یادآوری‌های کمک به رزرو را دریافت کنم</small>
      </div>

      <div class="form-check form-switch form-check-md mb-0 ms-3">
        <b-form-checkbox switch id="6" />
      </div>
    </div>
  </b-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(true)
</script>
