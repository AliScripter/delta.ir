<template>
  <section class="pt-lg-8">
    <b-container class="pt-4 pt-lg-0">
      <b-row class="g-4 g-sm-7">
        <b-col lg="8">
          <div class="d-flex position-relative z-index-9">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-dots mb-1">
                <li class="breadcrumb-item"><a href="#">خانه</a></li>
                <li class="breadcrumb-item"><a href="#">وبلاگ</a></li>
                <li class="breadcrumb-item active" aria-current="page">کنارکنار وبلاگ تک</li>
              </ol>
            </nav>
          </div>

          <h1 class="h2 mb-0">قدرت شکرگزاری: پرورش شادی و فراوانی</h1>
          <div class="d-flex align-items-center flex-wrap mt-4">
            <a href="#" class="badge text-bg-dark mb-0">سبک زندگی</a>
            <span class="text-secondary opacity-3 mx-3">|</span>
            <b-dropdown no-caret menuClass="min-w-auto" variant="link" toggleClass="m-0 p-0">
              <template #button-content>
                <a
                  href="#"
                  class="text-secondary text-primary-hover icons-center"
                  id="cardFeedAction"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BIconShare class="me-2" />14
                </a>
              </template>

              <li>
                <b-dropdown-item href="#">
                  <BIconFacebook class="fa-fw me-2" />فیس‌بوک
                </b-dropdown-item>
              </li>
              <li>
                <b-dropdown-item href="#">
                  <BIconInstagram class="fa-fw me-2" />اینستاگرام
                </b-dropdown-item>
              </li>
              <li>
                <b-dropdown-item href="#">
                  <BIconWhatsapp class="fa-fw me-2" />واتساپ
                </b-dropdown-item>
              </li>
              <li>
                <b-dropdown-item href="#">
                  <font-awesome-icon :icon="faPaste" class="fa-fw me-2" />کپی لینک</b-dropdown-item
                >
              </li>
            </b-dropdown>
            <span class="text-secondary opacity-3 mx-3">|</span>
            <a href="#" class="text-secondary text-primary-hover mb-0 icons-center"
              ><BIconChat class="me-2" />5</a
            >
            <span class="text-secondary opacity-3 mx-3">|</span>
            <span class="text-secondary">2 دقیقه مطالعه</span>
          </div>

          <img :src="blog3" class="img-fluid rounded mt-5" alt="blog-img" />
          <p class="mt-5">
            تغییر دیدگاه ما از کمبود به فراوانی. در این مقاله، قدرت قدردانی و اینکه چگونه می‌تواند بهبود کلی رفاه ما را افزایش دهد و اثر مثبتی در زندگی ما و زندگی اطرافیانمان ایجاد کند، بررسی خواهیم کرد.
            <strong>در دنیایی پر از آشوب</strong> و عدم قطعیت، آسان است که از چیزهایی که واقعاً مهم هستند دور شویم.
          </p>
          <p>
            علاوه بر این، ابراز قدردانی به دیگران از طریق اعمال محبت یا
            <u> قدردانی صمیمانه روابط ما را تقویت کرده و</u> حس ارتباط را پرورش می‌دهد.
          </p>
          <p>
            گنجاندن قدردانی در روال روزانه ما می‌تواند به سادگی نگهداری یک دفترچه قدردانی باشد، جایی که هر روز سه چیز که برای آن‌ها قدردانیم را یادداشت می‌کنیم.
            <strong>این عمل به ما کمک می‌کند تا به جنبه‌های مثبت</strong> زندگی‌امان توجه بیشتری کنیم، هرچند که ممکن است به نظر کوچک بیایند.
          </p>
          <p class="mb-0">
            با بازتعریف موانع به‌عنوان فرصت‌هایی برای رشد و یادگیری،
            <mark>می‌توانیم از طریق سختی‌ها با</mark> احساسی از قدردانی برای دروس آن‌ها عبور کنیم. این تغییر ذهنیت به ما قدرت می‌دهد تا شادی و معنا را در هر وضعیت پیدا کنیم و به زندگی پربارتری برسیم.
          </p>

          <blockquote class="card card-body bg-light overflow-hidden mt-5 p-sm-5">
            <div
              class="vr bg-primary h-100 position-absolute top-0 start-0"
              style="width: 3px; opacity: 100%"
            ></div>
            <span class="display-4 position-absolute top-0 start-0 opacity-1 mt-n3"
              ><BIconQuote class="mb-3 rtl:-scale-x-100"
            /></span>

            <q class="fs-6 heading-color"
              >دستورالعمل‌ها به‌طور مداوم به کار گرفته شد تا او از مسئولیت‌های خود به خوبی عمل کند. تخت‌های مربوط به مکان
              و راحتی گذرگاه به آرامش کمک کرد. نتیجه‌گیری‌های متداوم از پسرک در پیری به نظر می‌رسید.</q
            >
            <div class="blockquote-footer mb-0 lead mt-3">آلبرت شوایتزر</div>
          </blockquote>

          <b-row class="mt-5">
            <b-col md="6">
              <h6 class="mb-4">اثر موجی قدردانی</h6>

              <ul class="ps-4 mb-4">
                <li class="mb-2">شکرگزاری به ما اجازه می‌دهد که دیدگاه خود را از تمرکز بر روی ... تغییر دهیم.</li>
                <li class="mb-2">با شناسایی و قدردانی از نعمت‌های زندگی‌مان.</li>
                <li class="mb-2">تحقیقات علمی نشان داده است که ...</li>
                <li class="mb-2">این به ما اجازه می‌دهد بر جنبه‌های مثبت تمرکز کنیم.</li>
                <li class="mb-2">قدرت شکرگزاری فراتر از ... است.</li>
                <li class="mb-2">با پذیرش ذهنیت شکرگزاری.</li>
              </ul>

              <p class="small mb-0">
                شناسایی و تقدیر از نعمت‌های زندگی‌امان، به ما احساس فراوانی و رضایت را دعوت می‌کند.
              </p>
            </b-col>
            <b-col md="6" class="mt-5 mt-md-0">
              <CustomGLightbox :link="blog6" data-glightbox data-gallery="image-popup">
                <img :src="blog6" class="rounded" alt="blog-img" />
              </CustomGLightbox>
            </b-col>
          </b-row>

          <div
            class="bg-light border rounded d-md-flex justify-content-between align-items-center text-center p-3 mt-5"
          >
            <h6 class="mb-0">آیا این مقاله مفید بود؟</h6>
            <small class="py-3 p-md-0 d-block">۲۵ نفر از ۷۸ نفر این را مفید یافتند</small>

            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" class="btn-check" name="btnradio" id="btnradio1" />
              <label class="btn btn-outline-secondary btn-sm mb-0" for="btnradio1"
                ><font-awesome-icon :icon="faThumbsUp" class="me-1" />بله</label
              >

              <input type="radio" class="btn-check" name="btnradio" id="btnradio2" />
              <label class="btn btn-outline-secondary btn-sm mb-0" for="btnradio2">
                خیر <font-awesome-icon :icon="faThumbsDown" class="ms-1"
              /></label>
            </div>
          </div>
        </b-col>
        <Sidebar />
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import CustomGLightbox from '@/components/CustomGLightbox.vue'
import Sidebar from '@/views/Blog/SingleV2/components/Sidebar.vue'
import { faPaste, faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import {
  BIconChat,
  BIconFacebook,
  BIconInstagram,
  BIconShare,
  BIconWhatsapp,
  BIconQuote
} from 'bootstrap-icons-vue'

import blog3 from '@/assets/images/blog/03.jpg'
import blog6 from '@/assets/images/blog/4by4/06.jpg'
</script>
