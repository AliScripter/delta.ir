<template>
  <section class="pt-8 pt-xl-9">
    <b-container>
      <b-row class="g-4 g-lg-6">
        <b-col lg="8" class="mx-auto text-center">
          <a href="#" class="badge text-bg-dark mb-4">سبک زندگی</a>
          <h1 class="h2 mb-0">قدرت شکرگزاری: پرورش شادی و فراوانی</h1>

          <div
            class="d-sm-flex justify-content-center justify-content-sm-between align-items-center text-start mt-5"
          >
            <div class="d-flex justify-content-center align-items-center mb-5 mb-sm-0">
              <div class="avatar flex-shrink-0">
                <img class="avatar-img rounded-circle" :src="avatar5" alt="avatar" />
              </div>

              <div class="ms-2">
                <h6 class="mb-0"><a href="#">کارولین اورتیز</a></h6>
                <small>1 روز پیش</small>
              </div>
            </div>

            <div class="d-flex justify-content-center align-items-center flex-wrap">
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
              <a href="#" class="text-secondary text-primary-hover mb-0 icons-center">
                <BIconChat class="me-2" />5
              </a>
              <span class="text-secondary opacity-3 mx-3">|</span>
              <span class="text-secondary">2 دقیقه مطالعه</span>
            </div>
          </div>
        </b-col>

        <b-col lg="10" class="mx-auto text-center">
          <img :src="blog2" class="img-fluid rounded" alt="blog-img" />
        </b-col>

        <b-col lg="8" class="mx-auto">
          <p>
            <span class="dropcap heading-color bg-light rounded px-2">ت</span>صرف ساده پرورش شکرگزاری توانایی شگفت‌انگیزی دارد که می‌تواند شادی و فراوانی را به زندگی ما بیاورد و دیدگاه ما را از کمبود به فراوانی تغییر دهد.
            در این مقاله، ما به بررسی قدرت شکرگزاری و اینکه چگونه می‌تواند به بهبود کلی سلامت ما و ایجاد یک اثر مثبت در زندگی ما و زندگی اطرافیانمان کمک کند، خواهیم پرداخت.
            <strong>در دنیای پر از هرج و مرج</strong> و عدم قطعیت، به راحتی ممکن است از چیزهایی که واقعاً اهمیت دارند، غافل شویم.
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
        </b-col>

        <b-col lg="10" class="mx-auto">
          <b-row class="g-4 g-lg-6">
            <b-col sm="6">
              <CustomGLightbox :link="blog4" data-glightbox data-gallery="image-popup">
                <img :src="blog4" class="rounded" alt="blog-img" />
              </CustomGLightbox>
            </b-col>
            <b-col sm="6">
              <CustomGLightbox :link="blog6" data-glightbox data-gallery="image-popup">
                <img :src="blog6" class="rounded" alt="blog-img" />
              </CustomGLightbox>
            </b-col>
          </b-row>
        </b-col>

        <b-col lg="8" class="mx-auto">
          <h6>مرحله 1: تغییر دیدگاه: از کمبود به فراوانی</h6>
          <p class="mb-5">
            شکرگزاری توانایی منحصر به فردی دارد که دیدگاه ما را از تمرکز بر آنچه که نداریم به قدردانی از آنچه که داریم تغییر می‌دهد.
            اغلب، ما در تعقیب دارایی‌های مادی یا دستاوردها گرفتار می‌شویم و باور داریم که آن‌ها شادی را برای ما به ارمغان خواهند آورد.
            با این حال، فراوانی واقعی در قدردانی از لحظه حال و شناسایی نعمت‌هایی که در حال حاضر در زندگی ما وجود دارند، یافت می‌شود.
            پرورش شکرگزاری به ما این امکان را می‌دهد که از چرخهٔ پیوستهٔ آرزو رهایی یابیم و فراوانی را که در اطراف ماست، در آغوش بگیریم.
          </p>

          <h6>مرحله 2: اثر موجی شکرگزاری</h6>

          <ul class="ps-4 mb-0">
            <li class="mb-2">
              تغییر در دیدگاه: شکرگزاری به ما این امکان را می‌دهد که دیدگاه خود را از تمرکز بر آنچه که نداریم
              به قدردانی از آنچه که داریم تغییر دهیم.
            </li>

            <li class="mb-2">
              با شناسایی و تأیید نعمت‌های زندگی‌مان، احساس فراوانی و رضایت را به
              زندگی‌مان دعوت می‌کنیم.
            </li>
            <li class="mb-2">
              تحقیقات علمی نشان داده‌اند که شکرگزاری تأثیر مثبتی بر سلامت
              روانی و جسمی ما دارد.
            </li>
            <ul>
              <li class="mb-2">این به ما اجازه می‌دهد بر جنبه‌های مثبت تمرکز کنیم.</li>
              <li class="mb-2">این به ما این امکان را می‌دهد که موانع را به عنوان فرصت‌ها دوباره تعریف کنیم.</li>
              <li class="mb-2">قدرت شکرگزاری فراتر از خود ماست.</li>
            </ul>
            <li class="mb-2">
              به ما این امکان را می‌دهد که موانع را به عنوان فرصت‌های رشد و یادگیری دوباره تعریف کنیم.
              با پذیرش ذهنیت شکرگزاری.
            </li>
            <li class="mb-2">
              با شناسایی و تأیید نعمت‌های زندگی‌مان، احساس فراوانی و رضایت را
              به زندگی‌مان دعوت می‌کنیم.
            </li>
          </ul>
        </b-col>

        <b-col lg="10" class="mx-auto text-center">
          <img :src="blog3" class="img-fluid rounded" alt="blog-img" />
        </b-col>

        <b-col lg="8" class="mx-auto text-center">
          <h5 class="display-2 text-primary lh-0 mb-0">
            <BIconQuote class="rtl:-scale-x-100" />
          </h5>
          <q class="fs-4 heading-color"
            >در اینجا متن مربوط به اظهارات عمومی یا متنی
            غیر مرتبط آمده است.</q
          >
          <div class="blockquote-footer mb-0 fs-6 mt-3">آلبرت شوایتزر</div>

          <hr class="my-6" />

          <div class="align-items-center">
            <h6>برچسب‌های محبوب:</h6>
            <ul class="list-inline mb-0 flex-centered flex-wrap gap-1">
              <li class="list-inline-item" v-for="(tag, idx) in popularTags" :key="idx">
                <a class="btn btn-outline-light btn-sm mb-lg-0" href="#">{{ tag }}</a>
              </li>
            </ul>
          </div>

          <div
            class="bg-light rounded d-md-flex justify-content-between align-items-center text-center p-3 mt-5"
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
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import CustomGLightbox from '@/components/CustomGLightbox.vue'
import { faPaste, faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'
import {
  BIconFacebook,
  BIconInstagram,
  BIconWhatsapp,
  BIconQuote,
  BIconShare,
  BIconChat
} from 'bootstrap-icons-vue'

import blog2 from '@/assets/images/blog/02.jpg'
import blog3 from '@/assets/images/blog/03.jpg'
import blog4 from '@/assets/images/blog/4by4/04.jpg'
import blog6 from '@/assets/images/blog/4by4/06.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'

const popularTags = [
  'وبلاگ',
  'کسب و کار',
  'بوت استرپ',
  'علم داده',
  'یادگیری عمیق',
  'یادگیری عمیق',
  'یادگیری عمیق'
]
</script>
