<template>
  <b-col lg="4" class="ps-xl-6">
    <b-card no-body class="d-inline-block bg-light border p-4">
      <div class="d-flex align-items-center mb-3">
        <div class="avatar avatar-lg flex-shrink-0 me-2">
          <img class="avatar-img rounded-circle" :src="avatar9" alt="avatar" />
        </div>
        <div class="ms-2">
          <h6 class="mb-0"><a href="#">لوئیس کرافورد</a></h6>
          <small>محتوا ساز</small>
        </div>
      </div>
      <p>
        ادغام قدردانی در زندگی روزمره‌امان، جایی که هر روز سه چیز که برای آن‌ها قدردانیم را
        یادداشت می‌کنیم.
      </p>

      <button class="btn btn-sm btn-outline-primary mb-0">دنبال کردن نویسنده</button>
    </b-card>

    <div class="align-items-center mt-5">
      <h6 class="mb-3 d-inline-block">پست‌های مرتبط:</h6>

      <ul class="list-group list-group-flush">
        <li class="list-group-item ps-0" v-for="(post, idx) in relatedPost" :key="idx">
          <a href="#" class="heading-color text-primary-hover fw-semibold">{{ post }}</a>
        </li>
      </ul>
    </div>

    <div class="align-items-center mt-5">
      <h6 class="mb-3 d-inline-block">برچسب‌های محبوب:</h6>
      <ul class="list-inline mb-0">
        <li class="list-inline-item" v-for="(tag, idx) in popularTags" :key="idx">
          <a class="btn btn-light btn-sm" href="#">{{ tag }}</a>
        </li>
      </ul>
    </div>
  </b-col>
</template>

<script lang="ts" setup>
import avatar9 from '@/assets/images/avatar/09.jpg'

const popularTags = [
  'وبلاگ',
  'کسب و کار',
  'بوت استرپ',
  'علم داده',
  'یادگیری عمیق',
  'ماجراجویی',
  'جامعه',
  'آموزش‌ها',
  'مصاحبه',
  'عکاسی',
  'کلاسیک'
]

const relatedPost = [
  '5 تردید سرمایه‌گذاری که باید روشن کنید',
  'تسلط بر طراحی وب پاسخگو با بوت استرپ',
  'توسعه وب بدون زحمت با میزل',
  'زیبا و پاسخگو - طراحی با بوت استرپ و میزل',
  'ده سوالی که باید صادقانه پاسخ دهید.'
]
</script>
