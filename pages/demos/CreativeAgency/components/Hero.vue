<template>
    <section class="pt-xl-8 pb-0">
        <b-container class="pt-2 pt-sm-5">
            <b-row class="g-4 g-xxl-5">
                <b-col xl="6">
                    <h1 class="mb-0 lh-base">
                        تبدیل ایده‌ها به
                        <span class="position-relative"
                            >واقعیت‌های
                            <span
                                class="position-absolute top-50 start-50 translate-middle z-index-n1 ms-n2 d-none d-sm-block rtl:-scale-x-100"
                            >
                                <svg
                                    width="182"
                                    height="53"
                                    viewBox="0 0 182 53"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        class="fill-primary"
                                        d="M3.39646 26.6791C5.18665 34.7553 18.564 38.9851 25.9087 41.4254C46.0791 47.4215 67.3652 48.7695 88.3693 49.6062C104.15 50.0478 119.955 49.7573 135.662 48.1885C149.211 46.7243 164.06 45.5158 174.924 36.9051C179.694 33.0239 179.89 27.2834 175.537 22.9954C164.011 11.8166 134.166 7.57514 117.871 4.98378C99.9319 2.36919 81.7603 3.171 63.7112 4.27494C75.4946 4.49573 87.278 5.19295 98.9755 6.57578C103.978 7.27301 109.202 8.35371 113.297 11.3053C109.484 10.457 105.535 10.4338 101.649 10.1084C74.3665 7.19166 45.6622 4.62355 19.2875 13.5713C13.5245 15.8256 2.88147 19.5442 3.39646 26.6791ZM0 25.7727C1.02997 10.1897 38.4891 5.03027 51.6213 4.43763C49.4878 4.29818 47.3543 4.07739 45.233 3.78688C48.7766 2.79915 52.3938 2.04382 56.06 1.60224C63.466 0.939879 70.9088 0.753952 78.327 0.323997C91.0913 -0.349987 103.88 0.0102456 116.571 1.56738C132.45 4.10063 191.085 11.3983 180.797 34.918C178.664 38.8573 174.642 41.4603 170.645 43.5403C160.86 48.6068 149.591 49.8618 138.691 51.1285C122.42 52.7902 106.063 53.3131 89.7058 52.825C65.575 51.907 40.8311 50.501 18.0981 42.1459C10.8025 39.1943 0.122616 34.3834 0 25.7727Z"
                                    />
                                </svg>
                            </span>
                        </span>
                        دیجیتال
                    </h1>

                    <p class="mb-0 mt-4 mt-xl-5">
                        ایده‌های شما نیروی محرکه پشت کسب‌وکار شما هستند و آژانس
                        دیجیتال ما اینجاست تا آن ایده‌ها را به واقعیت‌های
                        دیجیتال ملموس تبدیل کند.
                    </p>

                    <div class="d-flex gap-1 gap-sm-3 flex-wrap mt-4 mt-xl-5">
                        <b-button variant="dark" type="button"
                            >شروع کنید</b-button
                        >
                        <b-button variant="outline-dark" type="button"
                            >شروع دوره آزمایشی 14 روزه</b-button
                        >
                    </div>

                    <ul
                        class="list-inline d-flex flex-wrap gap-2 gap-sm-4 mb-0 mt-4 mt-xl-5"
                    >
                        <li class="list-inline-item heading-color icons-center">
                            <BIconStopwatch class="me-1" />
                            پشتیبانی 24/7
                        </li>
                        <li class="list-inline-item heading-color icons-center">
                            <BIconFire class="me-1" />
                            به‌روزرسانی‌های رایگان
                        </li>
                        <li class="list-inline-item heading-color icons-center">
                            <BIconLifePreserver class="me-1" />
                            دسترسی به اسناد ممتاز
                        </li>
                    </ul>
                </b-col>

                <b-col xl="6" class="text-center rtl:-scale-x-100">
                    <img :src="heroFinance" alt="hero-img" />
                </b-col>
            </b-row>

            <hr class="border-primary opacity-2 mt-sm-7 my-5" />
            <b-row>
                <b-col md="6" xl="7" class="mb-5 mb-md-0">
                    <p class="mb-0">
                        <BIconShieldCheck class="mb-1" />
                        | ما به فراتر رفتن و عبور از محدودیت‌ها اعتقاد داریم. ما
                        به
                        <b class="text-primary fs-6">19k</b> رسیدیم
                    </p>

                    <Swiper
                        class="mt-2 mt-md-4"
                        :modules="[Autoplay]"
                        :loop="true"
                        :slidesPerView="2"
                        :spaceBetween="30"
                        :autoplay="{
                            delay: 2000,
                            disableOnInteraction: false,
                        }"
                        :breakpoints="{
                            576: { slidesPerView: 3 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 },
                        }"
                        wrapperClass="align-items-center"
                    >
                        <SwiperSlide
                            v-for="(image, idx) in clientImages"
                            :key="idx"
                        >
                            <a :href="image.href" target="_blank"
                                ><img
                                    :src="image.img"
                                    class="px-3"
                                    :class="!idx && 'ps-0'"
                                    alt="client-img"
                            /></a>
                        </SwiperSlide>
                    </Swiper>
                </b-col>

                <b-col md="6" lg="5" xl="3" class="ms-auto text-md-end">
                    <p class="mb-0 me-2">
                        اعتماد شده توسط مشتریان
                        <span class="badge bg-dark">فعال</span>
                    </p>

                    <div class="d-flex justify-content-md-end mt-2 mt-md-4">
                        <div>
                            <div class="d-flex justify-content-md-end">
                                <h4 class="purecounter mb-0">
                                    <Vue3autocounter
                                        ref="counter"
                                        :startAmount="0"
                                        :endAmount="15"
                                        suffix="k+"
                                        :duration="3"
                                    />
                                </h4>
                            </div>
                            <p class="mb-0">کاربران فعال</p>
                        </div>

                        <div class="vr mx-3 mx-sm-4"></div>
                        <div>
                            <div class="d-flex justify-content-md-end">
                                <h4 class="purecounter mb-0">
                                    <Vue3autocounter
                                        ref="counter"
                                        :startAmount="0"
                                        :endAmount="56"
                                        :duration="3"
                                    />
                                </h4>
                                <span class="h4 mb-0">+</span>
                            </div>
                            <p class="mb-0">پروژه‌های تکمیل شده</p>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script lang="ts" setup>
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import Vue3autocounter from 'vue3-autocounter';
import {
    BIconFire,
    BIconLifePreserver,
    BIconShieldCheck,
    BIconStopwatch,
} from 'bootstrap-icons-vue';

import heroFinance from '@/assets/images/elements/hero-finance.svg';
import client1Img from '@/assets/images/client/logo-tailwise.svg';
import client2Img from '@/assets/images/client/logo-listkit.svg';
import client3Img from '@/assets/images/client/logo-nephos.svg';
import client4Img from '@/assets/images/client/logo-vulk.svg';
import client5Img from '@/assets/images/client/logo-ideko.svg';

const clientImages = [
    {
        href: 'https://www.rtl-theme.com/tailwise-html-template/?aff=eltheme',
        img: client1Img,
    },
    {
        href: 'https://www.rtl-theme.com/listkit-html-template/?aff=eltheme',
        img: client2Img,
    },
    {
        href: 'https://www.rtl-theme.com/nephos-html-template/?aff=eltheme',
        img: client3Img,
    },
    {
        href: 'https://www.rtl-theme.com/vulk-web-application/?aff=eltheme',
        img: client4Img,
    },
    {
        href: 'https://www.rtl-theme.com/ideko-html-template/?aff=eltheme',
        img: client5Img,
    },
];
</script>
