<template>
  <section class="pt-xl-9">
    <b-container class="pt-4 pt-xl-0 position-relative z-index-2">
      <div class="d-flex position-relative mb-2">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb breadcrumb-dots pb-0 mb-0">
            <li class="breadcrumb-item"><a href="#">خانه</a></li>
            <li class="breadcrumb-item"><a href="#">نمونه کارها</a></li>
            <li class="breadcrumb-item active" aria-current="page">مطالعات موردی پرتفوی v2</li>
          </ol>
        </nav>
      </div>
      <h1 class="h2 mb-4 mb-sm-6">بهینه‌سازی وب‌سایت برای قالب مدیریتی تیلوایز</h1>

      <OverView />

      <b-row class="mb-6">
        <b-col md="4">
          <h4>01. چالش</h4>
        </b-col>

        <b-col md="7" class="ms-auto">
          <p>
            <span class="dropcap fs-2 heading-color bg-light rounded px-2">ع</span> عمل ساده‌ای که شکرگزاری را پرورش می‌دهد، توانایی شگفت‌انگیزی دارد تا شادی و وفور را به زندگی ما بیاورد و دیدگاه ما را از کمبود به وفور تغییر دهد. در این مقاله، قدرت شکرگزاری و چگونگی بهبود رفاه کلی ما و ایجاد اثرات مثبت در زندگی ما و اطرافیانمان را بررسی خواهیم کرد.
            <strong>در دنیای پرآشوب</strong> و عدم قطعیت، آسان است که از چیزهایی که واقعاً اهمیت دارند، غافل شویم.
          </p>
          <p class="mb-0">
            به محض اینکه یک ایده ریشه بگیرد، نیاز به پرورش و اصلاح دارد. این مرحله شامل تحقیق، طوفان فکری، و جمع‌آوری بازخورد است. انجام تحلیل بازار، <a href="#">بررسی راه‌حل‌های موجود</a>، و همکاری با دیگران می‌تواند به اصلاح بیشتر ایده کمک کند. هدف این است که درک عمیق‌تری از قابلیت اجرایی، تأثیر بالقوه، و قابلیت بازار ایده کسب کنیم.
          </p>
        </b-col>
      </b-row>

      <b-row class="g-4 g-xl-6">
        <b-col sm="6">
          <CustomGLightbox :link="showcaseImg4" data-glightbox data-gallery="image-popup">
            <img :src="showcaseImg4" class="rounded" alt="portfolio-img" />
          </CustomGLightbox>
        </b-col>
        <b-col sm="6">
          <CustomGLightbox :link="showcaseImg5" data-glightbox data-gallery="image-popup">
            <img :src="showcaseImg5" class="rounded" alt="portfolio-img" />
          </CustomGLightbox>
        </b-col>
      </b-row>

      <b-row class="mt-6">
        <b-col md="4">
          <h4>02. راه‌حل</h4>
        </b-col>

        <b-col md="7" class="ms-auto">
          <p class="mb-4">
            به محض اینکه یک ایده ریشه بگیرد، نیاز به پرورش و اصلاح دارد. این مرحله شامل تحقیق، طوفان فکری، و جمع‌آوری بازخورد است. انجام تحلیل بازار، بررسی راه‌حل‌های موجود، و همکاری با دیگران می‌تواند به اصلاح بیشتر ایده کمک کند. هدف این است که درک عمیق‌تری از قابلیت اجرایی، تأثیر بالقوه، و قابلیت بازار ایده کسب کنیم. این با شناخت قدرت و پتانسیل یک ایده شروع می‌شود. از طریق پرورش، برنامه‌ریزی، و استراتژی‌سازی، ایده‌ها تصفیه و به برنامه‌های قابل اجرا تبدیل می‌شوند. چالش‌ها به‌عنوان فرصت‌های رشد پذیرفته می‌شوند و پشتکار به کلیدی برای غلبه بر موانع تبدیل می‌شود.
          </p>
        </b-col>
      </b-row>

      <b-row class="mt-6">
        <b-col md="4">
          <h4>03. نتیجه</h4>
        </b-col>

        <b-col md="7" class="ms-auto">
          <p class="lead">
            ادوارد از وضعیت امور اطمینان حاصل کرد. پسربچه، با وجود شایستگی، از تعجب پر بود. به مرور زمان، اشک‌های قدیمی او از پشیمانی ادامه یافت و تحولات جدید ممکن است جنبه‌های پنهان را آشکار کند.
          </p>
          <p>
            تبدیل ایده‌ها به واقعیت اغلب نیاز به همکاری با افراد مختلف دارد. همکاری با کارشناسان، جستجوی مشاوره، و ایجاد شبکه‌ای از افراد هم‌فکر می‌تواند بینش‌ها و حمایت‌های ارزشمندی ارائه دهد.
          </p>

          <div class="d-flex mt-4">
            <h5 class="display-4 text-primary lh-0 mb-0">
              <BIconQuote class="rtl:-scale-x-100" />
            </h5>
            <div class="ms-3">
              <q class="fs-6 heading-color"
                >دو ماه که به پایان نرسیده، تغییرات وابسته به زیبایی آرزوها را مورد توجه قرار داده است. نمایش جان واقعی پارک تا استراحت ما ادامه دارد. ناآگاهی در مسکن موقعیت، هم برای افکار مقابله کرد. مودبانه الینور به آن وابسته است.</q
              >
              <div class="d-flex align-items-center mt-4">
                <div class="avatar">
                  <img class="avatar-img rounded-circle" :src="avatar2" alt="avatar" />
                </div>
                <div class="ms-3">
                  <h6 class="mb-0">اما واتسون</h6>
                  <small>مدیرعامل، هم‌بنیان‌گذار</small>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row class="mt-8">
        <b-col cols="12">
          <div class="d-lg-flex justify-content-lg-between">
            <div class="align-items-center mb-3 mb-lg-0">
              <ul class="list-inline mb-0 hstack gap-1">
                <li class="list-inline-item">
                  <a class="btn btn-outline-light rounded-pills btn-sm mb-lg-0" href="#"
                    >برندینگ</a
                  >
                </li>
                <li class="list-inline-item">
                  <a class="btn btn-outline-light rounded-pills btn-sm mb-lg-0" href="#"
                    >بسته‌بندی</a
                  >
                </li>
                <li class="list-inline-item">
                  <a class="btn btn-outline-light rounded-pills btn-sm mb-lg-0" href="#"
                    >طراحی UI/UX</a
                  >
                </li>
              </ul>
            </div>

            <div class="align-items-center">
              <ul class="list-inline mb-0 mb-2 mb-sm-0 hstack gap-1">
                <li class="list-inline-item">
                  <a class="btn px-2 btn-sm bg-facebook" href="#"
                    ><font-awesome-icon :icon="faFacebookF" class="fa-fw"
                  /></a>
                </li>
                <li class="list-inline-item">
                  <a class="btn px-2 btn-sm bg-instagram-gradient" href="#"
                    ><font-awesome-icon :icon="faInstagram" class="fa-fw"
                  /></a>
                </li>
                <li class="list-inline-item">
                  <a class="btn px-2 btn-sm bg-twitter" href="#"
                    ><font-awesome-icon :icon="faTwitter" class="fa-fw"
                  /></a>
                </li>
                <li class="list-inline-item">
                  <a class="btn px-2 btn-sm bg-linkedin" href="#"
                    ><font-awesome-icon :icon="faLinkedinIn" class="fa-fw"
                  /></a>
                </li>
              </ul>
            </div>
          </div>

          <hr class="my-4" />

          <b-row class="align-items-center">
            <b-col cols="5" class="position-relative">
              <span> <BIconArrowLeft class="me-2 mb-1 rtl:-scale-x-100" />قبلی </span>
              <h6 class="mb-0 mt-2">
                <a href="#" class="stretched-link">هنر داستان‌سرایی</a>
              </h6>
            </b-col>
            <b-col cols="2" class="text-center">
              <a href="#" class="heading-color text-primary-hover">
                <BIconGrid3x3GapFill />
              </a>
            </b-col>
            <b-col cols="5" class="text-end position-relative">
              <span
                >بعدی
                <BIconArrowRight class="ms-1 mb-1 rtl:-scale-x-100" />
              </span>
              <h6 class="mb-0 mt-2">
                <a href="#" class="stretched-link">تبدیل ایده‌ها به واقعیت با قالب آیدکو</a>
              </h6>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import CustomGLightbox from '@/components/CustomGLightbox.vue'
import OverView from '@/views/portfolio/CaseStudyV2/components/OverView.vue'
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import {
  BIconArrowLeft,
  BIconArrowRight,
  BIconGrid3x3GapFill,
  BIconQuote
} from 'bootstrap-icons-vue'

import avatar2 from '@/assets/images/avatar/02.jpg'
import showcaseImg4 from '@/assets/images/portfolio/showcase/04.jpg'
import showcaseImg5 from '@/assets/images/portfolio/showcase/05.jpg'
</script>
