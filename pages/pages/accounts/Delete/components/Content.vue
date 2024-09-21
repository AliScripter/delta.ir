<template>
  <b-card no-body class="bg-transparent rounded-3 mb-0">
    <b-card-header class="bg-transparent border-bottom p-0 pb-3">
      <h6 class="card-header-title mb-0">غیرفعال کردن حساب</h6>
    </b-card-header>

    <b-card-body class="px-0">
      <span class="heading-color fw-bold">قبل از اینکه بروید...</span>
      <ul class="mt-2">
        <li>از داده‌های خود پشتیبان‌گیری کنید <a href="#">اینجا</a></li>
        <li>اگر حساب خود را حذف کنید، تمامی داده‌های شما از دست خواهد رفت.</li>
      </ul>
      <div class="form-check form-check-md my-4">
        <input class="form-check-input" type="checkbox" value="" id="deleteaccountCheck" />
        <label class="form-check-label" for="deleteaccountCheck"
          >بله، می‌خواهم حساب خود را حذف کنم</label
        >
      </div>
      <a href="#" class="btn btn-success-soft mb-2 mb-sm-0 me-1">حساب من را حفظ کن</a>
      <a href="#" class="btn btn-danger mb-0">حساب من را حذف کن</a>
    </b-card-body>
  </b-card>
</template>
