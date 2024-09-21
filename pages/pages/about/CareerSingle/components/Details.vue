<template>
  <section class="pt-8">
    <b-container>
      <b-row>
        <b-col lg="10" xl="8" class="mx-auto">
          <div class="text-center mb-5">
            <div class="d-flex justify-content-center mb-2">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-dots mb-1">
                  <li class="breadcrumb-item"><a href="#">خانه</a></li>
                  <li class="breadcrumb-item active" aria-current="page">نمایشگاه نمونه‌کارها</li>
                </ol>
              </nav>
            </div>
            <h2>طراح UI/UX و محصول</h2>
          </div>

          <b-card
            no-body
            class="bg-dark d-md-flex justify-content-md-between align-items-md-center flex-md-row p-5 mb-6"
            data-bs-theme="dark"
          >
            <div class="mb-3 mb-md-0">
              <h4 class="mb-0">اطلاعات</h4>
              <div class="hstack gap-3 gap-md-4 flex-wrap mt-3">
                <span class="badge text-bg-white">فناوری اطلاعات</span>
                <span class="icons-center"> <BIconGeoAlt class="me-2" />آمریکا، انتاریو</span>
                <span class="icons-center"> <BIconClock class="me-2" />سان فرانسیسکو</span>
                <span class="icons-center">
                  <BIconBriefcase class="me-2" />
                  <span v-if="lang==='en'">{{ currency }}32,000</span>
                  <span v-else-if="lang==='fa'">32,000 {{ currency }}</span>
                </span>
              </div>
            </div>
            <a href="#contact-form" class="btn btn-primary mb-0 icons-center justify-content-center"
              >هم‌اکنون اقدام کنید <BIconArrowRight class="ms-2 rtl:-scale-x-100"
            /></a>
          </b-card>

          <b-row>
            <b-col md="6" v-for="(list, idx) in lists" :key="idx">
              <h6>{{ list.title }}:</h6>
              <b-list-group class="list-group-borderless mb-4">
                <b-list-group-item
                  v-for="items in list.list"
                  :key="items"
                  class="d-flex mb-0 icons-center"
                >
                  <BIconPatchCheck class="text-primary me-2" />{{ items }}</b-list-group-item
                >
              </b-list-group>
            </b-col>

            <b-col md="6">
              <h6>تجربه:</h6>
              <ul class="list-group list-group-borderless mb-4">
                <li class="list-group-item mb-0 icons-center">
                  <BIconPatchCheck class="text-primary me-2" />مدرک کارشناسی
                </li>
              </ul>
            </b-col>

            <b-col md="6">
              <h6>نیازمندی‌های آموزشی:</h6>
              <p>
                ایده‌آل است که 2 تا 4 سال تجربه در محیط آژانس و انجام وظایف چندسطحی داشته باشید.
              </p>
            </b-col>
          </b-row>

          <h6 class="mt-4">توضیحات</h6>
          <p>
            دانش پایانی که به‌طور قطع در روز شیرینی دیده شده است. از شش یا هفت پیشنهاد سریع بپرسید. مردی خوش‌تیپ که به سن و سال خود پرداخته است. به‌عنوان سبک زندگی او، او بدتر خشک شده است. پیشنهادات مرتبط به‌گونه‌ای که بازدیدکنندگان خصوصی ما را برداشته‌اند. معتدل برای موضوعات به دوری.
          </p>
          <p>
            به سرعت بگویید که مناسب است که پسر را اضافه کنید. در چهارمین شک، مایل‌های کودک. ورزش شادی
            مردان بچه‌ها خوشحال شدند. با این حال، به‌طور غیرمعمولی ده نفر که کاهش یافته‌اند شگفت‌زده شدند. آداب و رسوم جدید املاک، پس‌اندازها را نگه داشته بود. تحت حماقت توپ‌ها، مرگ اکنون نقطه مردان است. راهی که او از دیدن مرگ اجتناب می‌کند. او چربی‌هایشان را می‌برد.
          </p>
          <p>
            گذرگاه‌هایش ده به‌قلبی منجر شد. هر تمایل شگفت‌زده بی‌پرده خانم. درک شده توسط میدلتون‌ها به‌طور قاطعانه انجام می‌دهد. فرض می‌شود که به‌طور کامل حل شده باشد. آن یک تپه از من کشید. دره‌ای توسط او بیست مستقیم مرا راهنمایی کرد. خروجی معیوب و تنظیمات شگفت‌انگیز او را باور کردند که همه چیز را پشتیبانی کرده است. خانواده ماه‌ها به سادگی طبیعت مبتذل را تنظیم کرد. تصویر برای تلاش شادی ده حمل کرد. شک و تردید توافق حل و فصل شده را نادیده گرفت.
          </p>

          <b-row class="mt-5">
            <b-col md="6">
              <h6>درخواست از طریق ایمیل</h6>
              <p>
                اگر نیاز به ارسال ایمیل در مورد فرصت‌های شغلی دارید، لطفاً به آدرس <a href="#">info@example.com</a> ایمیل بزنید تا اطلاعات بیشتری دریافت کنید.
              </p>
            </b-col>

            <b-col md="6">
              <h6>از طریق شماره تلفن درخواست دهید</h6>
              <p class="mb-1">الان از طریق واتساپ درخواست دهید، رزومه خود را به ما ارسال کنید:</p>
              <a href="#">+79 2589 63598</a>
            </b-col>
          </b-row>

          <b-card no-body class="card-body bg-light border p-sm-5 mt-5" id="contact-form">
            <b-form class="row g-4">
              <b-col md="6">
                <label class="form-label heading-color">نام شما *</label>
                <input type="text" class="form-control form-control-lg" placeholder="نام کامل" />
              </b-col>

              <b-col md="6">
                <label class="form-label heading-color">آدرس ایمیل *</label>
                <input
                  type="email"
                  class="form-control form-control-lg"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
              </b-col>

              <b-col md="6">
                <label class="form-label heading-color">شماره تلفن *</label>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="(xxx) xx xxxx"
                />
              </b-col>

              <b-col md="6">
                <label class="form-label heading-color">در حال درخواست برای (پوزیشن شغلی) *</label>
                <input type="text" class="form-control form-control-lg" placeholder="عنوان شغلی" />
              </b-col>

              <b-col cols="12">
                <label class="form-label heading-color">پیام *</label>
                <textarea
                  class="form-control"
                  placeholder="پیام خود را اینجا بنویسید...."
                  id="floatingTextarea2"
                  style="height: 150px"
                ></textarea>
              </b-col>
              <b-col cols="12" class="d-grid">
                <button class="btn btn-lg btn-primary mb-0">ارسال پیام</button>
              </b-col>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { currency } from '@/helpers'
import { lists } from '@/views/pages/about/CareerSingle/data'
import {
  BIconArrowRight,
  BIconClock,
  BIconGeoAlt,
  BIconPatchCheck,
  BIconBriefcase
} from 'bootstrap-icons-vue'

const lang: string | undefined = inject('lang')
</script>
