<template>
  <section>
    <b-container>
      <b-row>
        <b-col lg="3" class="mb-6 mb-lg-0">
          <h5 class="mb-sm-4 icons-center"><BIconBoxes class="me-2" />شروع کنید</h5>
          <ul class="nav gap-2 flex-column">
            <li class="nav-item" v-for="(item, idx) in helpData" :key="idx">
              <a class="nav-link icon-link icon-link-hover py-2" href="#"
                >{{ item }}
                <BIconArrowRight class="ms-2 rtl:-scale-x-100" />
              </a>
            </li>
          </ul>
        </b-col>

        <b-col lg="8" class="ms-auto">
          <h5 class="mb-3">Gulp و سفارشی‌سازی با node.js</h5>
          <p class="mb-3">
            فرض کنید که صبحانه را حل کرده و یا به طور کامل. ترک عیب‌دار است که تنظیمات رقت‌انگیز انجام داده و او را به خوبی پشتیبانی کرد.
          </p>

          <div class="d-flex align-items-center">
            <div class="avatar flex-shrink-0 me-3">
              <img class="avatar-img rounded-circle" :src="avatar03" alt="avatar" />
            </div>
            <div>
              <h6 class="mb-0">سم لانسون</h6>
              <ul class="nav nav-divider mb-0 small">
                <li class="nav-item"><BIconCalendar class="me-2 mb-1" />5 ماه پیش</li>
                <li class="nav-item"><BIconClock class="me-2 mb-1" />15 دقیقه مطالعه</li>
              </ul>
            </div>
          </div>

          <hr class="my-5" />
          <p>
            من اشتباهات زیادی مرتکب شدم، جوی می‌گوید که حذف دردناک به پایان رسید. وضعیت ترک کرده فکر پایان است. رسیدن به دور، او پیر و محبوب او را به طور ضعیف‌تر کردند. بلیط‌ها به او توجه دارند. دیدگاه چهار به این گفته که آیا مردان عزیز خجالتی را یافتند.
            <b> استعداد مردان، ویکت، اضافه کردن باغ.</b>
          </p>
          <a href="#!" class="btn btn-primary mb-0">دانلود Node JS</a>
          <h6 class="mt-4">فهرست مطالب</h6>
          <p>سن او به طرز جدی و بسیار کامل است.</p>
          <div class="alert alert-warning" role="alert">
            <strong>یادداشت: </strong>او برای بالاترین رتبه‌های اداری و پاسخ‌گویی به یک تلاش در مرتع.
            هیچ کشفی در روزنامه با سهمیه شمالی ستایش نشده است.
            <a class="alert-link" href="#!">مشاهده بیشتر</a>
          </div>
          <p>
            نگه‌داری در پارک نزدیک به پای من. دعوت به درک احساسات متناوب، بی‌طراوت درون. تغییر اصول غم‌انگیز قدیمی. آیا به سرعت مهربانی درست است. احترام مقاله رنگ‌آمیزی شده، او دفاتر و سالن‌های پذیرایی است.
          </p>
          <ul>
            <li>
              نقض بی‌پروایی او هر چیزی را انجام می‌دهد. رابطه جنسی به طول انجامید، واقعا خواسته شده است. دور پیشرفته، گفتن شوخی پایان یافته است.
            </li>
            <li>بی‌طراوت کافی درک بی‌پروایی، تصمیم‌گیری قاطع او.</li>
            <li>
              پیشنهاد اصلی دورتر از خجالت کلنل من.
              <strong> این به شما کمک می‌کند تا در صورت لزوم درب‌هایی را باز کنید.</strong>
            </li>
            <li>
              اولین شوخی‌ها به ایجاد مقیاس منجر شد. موضوعات او زیبایی‌های آینده را دنبال کرد.
            </li>
            <li>پیشنهاد خنده‌دار، هر پسر قانونی را در نظر بگیرید. نیاز به بالا بردن موضوع بود.</li>
            <li>
              <i>
                به احساسات مختلف و غیرممکن. برای حساب ثروت نوشته شده آماده کنید.
                دعوت به هیچ گذرگاهی نکرده است.</i
              >
            </li>
            <li>
              پست نه، بنابراین معامله بد اجاره به واقعیت. اما او آماده است که حداقل زندگی را در تضاد قرار دهد.
            </li>
          </ul>
          <p class="mb-0">
            بهبود یافته خود ممکن است برکت منحصر به فرد خانگی باشد. خانه دیده شده هیچگاه رابطه جنسی ندارد. هیچ گاه بازدید نشده، جاذبه به خارج از موضوع کلبه من. نگه‌داری در پارک نزدیک به پای من. دعوت به درک احساسات متناوب، بی‌طراوت درون.
            <u> تغییر اصول غم‌انگیز قدیمی. </u> آیا به سرعت مهربانی درست است.
            احترام مقاله رنگ‌آمیزی شده، او دفاتر و سالن‌های پذیرایی است.
          </p>

          <div
            class="bg-light border rounded d-lg-flex align-items-center justify-content-between text-center p-3 mt-4"
          >
            <h6 class="m-0">آیا این مقاله مفید بود؟</h6>
            <small class="py-3 py-lg-0 d-block">20 از 45 نفر این را مفید دانستند</small>
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

<script setup lang="ts">
import { helpData } from '@/views/pages/speciality/HelpDetails/data'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { BIconArrowRight, BIconBoxes, BIconCalendar, BIconClock } from 'bootstrap-icons-vue'

import avatar03 from '@/assets/images/avatar/03.jpg'
</script>
