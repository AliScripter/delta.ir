<template>
  <section class="pt-xl-9">
    <b-container class="pt-4 pt-xl-0">
      <b-row>
        <b-col md="9" class="mx-auto text-center">
          <div class="d-flex justify-content-center position-relative mb-4">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-dots pb-0 mb-0">
                <li class="breadcrumb-item"><a href="#">خانه</a></li>
                <li class="breadcrumb-item"><a href="#">نمایشگاه نمونه‌کارها</a></li>
                <li class="breadcrumb-item active" aria-current="page">
                  مطالعات موردی نمونه‌کار v1
                </li>
              </ol>
            </nav>
          </div>
          <h1 class="mb-4">تبدیل ایده‌ها به واقعیت با قالب فروشگاهی نفوس</h1>
          <p>
            در مواجهه با سادگی دلپذیر بی‌پرده شما. قانون، مزیت خود، مبلمان دائمی و شیرینی همیشگی. اوه، آهنگ خوب، چهار فقط سرش شلوغ بود. او را از زندگی پرنشاط توانمندی داد.
          </p>
        </b-col>

        <b-col cols="12" class="mt-6">
          <b-card
            no-body
            class="h-300px h-md-400px h-xl-600px overflow-hidden"
            :style="`background:url(${caseStudyImg1}) no-repeat; background-size:cover; background-position:center;`"
          ></b-card>
        </b-col>

        <b-col cols="12" class="mt-6">
          <b-row>
            <b-col cols="11" lg="5" xl="4" class="mx-auto mt-n8 mt-md-n9">
              <b-card no-body class="card-body bg-dark p-sm-5" data-bs-theme="dark">
                <ul class="list-group list-group-borderless">
                  <li class="list-group-item mb-3" v-for="(item, idx) in about" :key="idx">
                    <small>{{ item.title }}</small>
                    <p class="heading-color lead mt-1 mb-0">{{ item.description }}</p>
                  </li>

                  <li class="list-group-item d-grid mb-0">
                    <a href="https://www.rtl-theme.com/nephos-html-template/?aff=eltheme" target="_blank" class="btn btn-lg btn-primary mb-0 flex-centered"
                      >مشاهده وب‌سایت پروژه
                      <BIconBoxArrowUpRight class="ms-2 rtl:-scale-x-100" />
                    </a>
                  </li>
                </ul>
              </b-card>
            </b-col>

            <b-col lg="7" class="ms-auto ps-5 mt-6 mt-lg-0">
              <h4 class="mb-3">بررسی اجمالی</h4>
              <p class="lead">
                ایده‌ها بذرهای نوآوری هستند. آنها می‌توانند از تجربیات شخصی، مشاهدات، یا تمایل به حل یک مشکل ناشی شوند.
              </p>
              <p>
                زمانی که یک ایده ریشه می‌گیرد، نیاز به پرورش و تصفیه دارد. این مرحله شامل تحقیق، طوفان فکری، و جمع‌آوری بازخورد است. انجام تحلیل بازار، بررسی راه‌حل‌های موجود، و همکاری با دیگران می‌تواند به تصفیه بیشتر ایده کمک کند. هدف این است که درک عمیق‌تری از قابلیت اجرایی، تأثیر بالقوه و قابلیت بازار ایده به‌دست آورید.
              </p>
              <ul class="list-inline mb-6 hstack gap-1">
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

              <h4 class="mb-3">چالش</h4>
              <p>
                تبدیل ایده‌ها به واقعیت یک فرآیند تحول‌آفرین است که نوآوری و پیشرفت را به حرکت درمی‌آورد. این با شناخت قدرت و پتانسیل یک ایده آغاز می‌شود. از طریق پرورش، برنامه‌ریزی، و استراتژی‌سازی، ایده‌ها تصفیه و به طرح‌های عملی تبدیل می‌شوند. چالش‌ها به‌عنوان فرصت‌هایی برای رشد پذیرفته می‌شوند و پشتکار کلید عبور از موانع می‌شود.
              </p>
              <ul class="list-group list-group-borderless">
                <li class="list-group-item d-flex icons-center">
                  <BIconCheckCircle class="text-primary me-2" />سرورهای ویندوزی نگهداری شده
                </li>
                <li class="list-group-item d-flex icons-center">
                  <BIconCheckCircle class="text-primary me-2" />ایستگاه‌های کاری ویندوز پشتیبانی شده
                </li>
                <li class="list-group-item d-flex icons-center">
                  <BIconCheckCircle class="text-primary me-2" />برنامه‌ای برای چرخش تنظیم کنید و یک سیستم ضد ویروس تنظیم کنید.
                </li>
                <li class="list-group-item d-flex icons-center">
                  <BIconCheckCircle class="text-primary me-2" />ماشین‌آلات/سرورهای طراحی شده و
 کارکنان آموزش دیده
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="12" class="mt-6">
          <b-row class="g-4 g-xl-6">
            <b-col sm="4" v-for="(image, idx) in lightBoxImages" :key="idx">
              <CustomGLightbox :link="image" data-glightbox data-gallery="image-popup">
                <img
                  :src="image"
                  class="rounded"
                  :class="idx == lightBoxImages.length - 2 ? 'mt-sm-6' : ''"
                  alt="blog-img"
                />
              </CustomGLightbox>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="12">
          <b-row class="g-4 mt-7">
            <b-col lg="5">
              <h4 class="mb-3">نتیجه</h4>
              <p class="lead mb-4">
                دو تا ادوارد را اطمینان حاصل کنند که از کجا آمده است. کسی که هنوز ارزشمند است، ده پسر معجزه را نشان می‌دهند. هفته‌ها نظرش را به‌طور قدیمی با اشک‌های غمگین بیان کرد. افزودنی‌ها می‌توانند مشکوک باشند که به‌طور پنهانی تأمین شده‌اند.
              </p>
              <a
                href="https://www.rtl-theme.com/nephos-html-template/?aff=eltheme"
                class="btn btn-link heading-color text-primary-hover p-0 mb-0 icons-center"
                target="_blank"
                >مشاهده وب‌سایت پروژه
                <BIconBoxArrowUpRight class="ms-2 rtl:-scale-x-100" />
              </a>
            </b-col>

            <b-col lg="7" xl="6" class="ms-auto">
              <p>
                تبدیل ایده‌ها به واقعیت اغلب نیاز به همکاری با دامنه وسیعی از افراد دارد. همکاری با متخصصان، جستجوی مشاوره، و ساختن شبکه‌ای از افراد هم‌فکر می‌تواند بینش‌ها و پشتیبانی ارزشمندی فراهم کند.
              </p>

              <b-row class="row-cols-2 row-cols-md-3 mt-lg-6 g-4 g-lg-5">
                <b-col>
                  <h2 class="mb-0">22<span class="text-primary mb-0">%</span></h2>
                  <p class="mb-0">افزایش زمان صرف شده در وب‌سایت</p>
                </b-col>

                <b-col>
                  <h2 class="mb-0">4.5<span class="text-primary mb-0">M</span></h2>
                  <p class="mb-0">این پروژه را در شبکه‌های اجتماعی ما مشاهده کنید</p>
                </b-col>

                <b-col>
                  <h2 v-if="lang==='en'" class="mb-0">{{ currency }}12.8<span class="text-primary mb-0">M</span></h2>
                  <h2 v-else-if="lang==='fa'" class="mb-0 text-nowrap">12.8 <span class="text-primary mb-0 fs-6">میلیون</span> <small class="fs-6">{{ currency }}</small></h2>
                  <p class="mb-0">مجموع مبلغ جمع‌آوری شده در تأمین مالی تا کنون</p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="12" class="mt-6">
          <b-card no-body class="card-body bg-light p-sm-5">
            <h5 class="display-4 opacity-3 text-primary lh-0 mb-0">
              <BIconQuote class="rtl:-scale-x-100" />
            </h5>
            <q class="fs-5 heading-color"
              >دو ماه پایان تغییر را به زیبایی که آرزوها اهمیت دارند، وابسته بود. نمایش جان واقعی پارک بنابراین استراحت می‌کنیم. ناآگاهانه اقامتگاه مناسبت هم برای افکار بر آن غلبه کرد. مودبانه این الینور به وابستگی است.</q
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
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import CustomGLightbox from '@/components/CustomGLightbox.vue'
import { BIconBoxArrowUpRight, BIconCheckCircle, BIconQuote } from 'bootstrap-icons-vue'
import { about } from '@/views/portfolio/CaseStudyV1/data'
import { currency } from '@/helpers'

import avatar2 from '@/assets/images/avatar/02.jpg'
import masonryImg5 from '@/assets/images/portfolio/masonry/05.jpg'
import masonryImg6 from '@/assets/images/portfolio/masonry/06.jpg'
import masonryImg8 from '@/assets/images/portfolio/masonry/08.jpg'
import caseStudyImg1 from '@/assets/images/portfolio/case-study-01.jpg'

const lang: string | undefined = inject('lang')

const lightBoxImages = [masonryImg8, masonryImg6, masonryImg5]
</script>
