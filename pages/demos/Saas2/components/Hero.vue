<template>
  <section class="overflow-hidden pt-xl-8 mb-n6 parallax-wrap" id="parallax1">
    <b-container class="position-relative zindex-5 pt-5">
      <b-row class="justify-content-xl-start justify-content-center flex-xl-nowrap">
        <b-col xl="6" class="ps-xl-5 mb-8 mb-xl-0">
          <span class="text-primary fw-bold text-uppercase">عملکرد خود را بهبود ببخشید</span>
          <h1 class="mt-4">رشد خود را با راه‌حل‌های قدرتمند SaaS تقویت کنید</h1>
          <p class="mt-4">
            همکاری با بیش از 500 شرکت Fortune و شرکت‌های متوسط با راه‌حل‌های نیروی کار منحصر به فرد و قابل مقیاس.
          </p>
          <div class="d-flex gap-3 gap-sm-4 flex-wrap mt-4 mt-md-5">
            <b-button variant="dark" size="lg" class="mb-0" type="button"
              >ویژگی‌ها را کشف کنید</b-button
            >
            <router-link
              class="icon-link icon-link-hover heading-color text-primary-hover mb-0"
              to=""
              >تماس با فروش
              <BIconArrowRight class="rtl:-scale-x-100" />
            </router-link>
          </div>

          <hr class="my-4 my-sm-6" />

          <b-row class="g-4">
            <b-col sm="6">
              <figure class="mb-3">
                <img :src="trustPilotImg" class="light-mode-item h-30px" alt="Client-img" />
                <img :src="trustPilotLightImg" class="dark-mode-item h-30px " alt="Client-img" />
              </figure>
              <img :src="trustpilotStar" class="h-20px mb-3" alt="Rating-img" />
              <p class="mb-0">
                امتیاز کل <span class="text-secondary text-opacity-25">|</span
                ><span class="fw-bold heading-color"> ۳۰۵ بازخورد</span>
              </p>
            </b-col>

            <b-col sm="6">
              <img :src="googleImg" class="mb-3 h-40px" alt="google icon" />
              <ul class="list-inline mb-2">
                <li class="list-inline-item me-1" v-for="(_star, idx) in new Array(4)" :key="idx">
                  <font-awesome-icon :icon="faStar" class="text-warning" />
                </li>
                <li class="list-inline-item">
                  <font-awesome-icon :icon="faStarHalfAlt" class="text-warning rtl:-scale-x-100" />
                </li>
              </ul>
              <p class="mb-0">
                امتیاز کل <span class="text-secondary text-opacity-25">|</span
                ><span class="fw-bold heading-color"> ۱۴۵ بازخورد</span>
              </p>
            </b-col>
          </b-row>
        </b-col>

        <b-col
          xl="10"
          class="d-flex position-relative aos z-index-2"
          :class="rtl ? '-rotate-343' : 'rotate-343'"
          data-aos="zoom-in-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <figure class="position-absolute top-0 start-0 ms-9">
            <svg
              class="opacity-2"
              width="148"
              height="140"
              viewBox="0 0 148 140"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="fill-primary"
                d="m9.95 131.41c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
              ></path>
              <circle class="fill-primary" cx="25.86" cy="131.41" r="2.95"></circle>
              <circle class="fill-primary" cx="44.71" cy="131.41" r="2.95"></circle>
              <circle class="fill-primary" cx="63.57" cy="131.41" r="2.95"></circle>
              <circle class="fill-primary" cx="82.43" cy="131.41" r="2.95"></circle>
              <circle class="fill-primary" cx="101.29" cy="131.41" r="2.95"></circle>
              <circle class="fill-primary" cx="120.14" cy="131.41" r="2.95"></circle>
              <path
                class="fill-primary"
                d="m141.95 131.41c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m9.95 113.61c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
              ></path>
              <circle class="fill-primary" cx="25.86" cy="113.61" r="2.95"></circle>
              <circle class="fill-primary" cx="44.71" cy="113.61" r="2.95"></circle>
              <circle class="fill-primary" cx="63.57" cy="113.61" r="2.95"></circle>
              <circle class="fill-primary" cx="82.43" cy="113.61" r="2.95"></circle>
              <circle class="fill-primary" cx="101.29" cy="113.61" r="2.95"></circle>
              <circle class="fill-primary" cx="120.14" cy="113.61" r="2.95"></circle>
              <path
                class="fill-primary"
                d="m141.95 113.61c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m9.95 95.81c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
              ></path>
              <circle class="fill-primary" cx="25.86" cy="95.81" r="2.95"></circle>
              <circle class="fill-primary" cx="44.71" cy="95.81" r="2.95"></circle>
              <circle class="fill-primary" cx="63.57" cy="95.81" r="2.95"></circle>
              <circle class="fill-primary" cx="82.43" cy="95.81" r="2.95"></circle>
              <circle class="fill-primary" cx="101.29" cy="95.81" r="2.95"></circle>
              <circle class="fill-primary" cx="120.14" cy="95.81" r="2.95"></circle>
              <path
                class="fill-primary"
                d="m141.95 95.81c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m9.95 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m28.8 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m47.66 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m66.52 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m85.37 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.64 0.01 2.95 1.33 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m104.23 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m123.09 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m141.95 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m9.95 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m28.8 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m47.66 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m66.52 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m85.37 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.64 0 2.95 1.32 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m104.23 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m123.09 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m141.95 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m9.95 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m28.8 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m47.66 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m66.52 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m85.37 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.64 0 2.95 1.32 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m104.23 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m123.09 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m141.95 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m9.95 24.62c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
              ></path>
              <circle class="fill-primary" cx="25.86" cy="24.62" r="2.95"></circle>
              <circle class="fill-primary" cx="44.71" cy="24.62" r="2.95"></circle>
              <circle class="fill-primary" cx="63.57" cy="24.62" r="2.95"></circle>
              <circle class="fill-primary" cx="82.43" cy="24.62" r="2.95"></circle>
              <circle class="fill-primary" cx="101.29" cy="24.62" r="2.95"></circle>
              <circle class="fill-primary" cx="120.14" cy="24.62" r="2.95"></circle>
              <path
                class="fill-primary"
                d="m141.95 24.62c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"
              ></path>
              <path
                class="fill-primary"
                d="m9.95 6.82c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95c0-1.62 1.32-2.94 2.95-2.94s2.95 1.32 2.95 2.94z"
              ></path>
              <circle class="fill-primary" cx="25.86" cy="6.82" r="2.95"></circle>
              <circle class="fill-primary" cx="44.71" cy="6.82" r="2.95"></circle>
              <circle class="fill-primary" cx="63.57" cy="6.82" r="2.95"></circle>
              <circle class="fill-primary" cx="82.43" cy="6.82" r="2.95"></circle>
              <circle class="fill-primary" cx="101.29" cy="6.82" r="2.95"></circle>
              <circle class="fill-primary" cx="120.14" cy="6.82" r="2.95"></circle>
              <path
                class="fill-primary"
                d="m141.95 6.82c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"
              ></path>
            </svg>
          </figure>

          <figure class="position-absolute start-50 bottom-0 ms-n5 rtl:-scale-x-100">
            <svg
              width="120.4px"
              height="124.5px"
              viewBox="0 0 120.4 124.5"
              style="enable-background: new 0 0 120.4 124.5"
              xml:space="preserve"
            >
              <path
                class="fill-mode"
                d="M92.9,58.4c-0.2-4.7-1.8-9-5-12.6c-3-3.3-6.4-6.2-10.4-8.4c-3.4-1.9-7-2.9-10.8-3.3c-3.1-0.4-6,0.2-8.6,1.8 c-6.5,3.8-11.5,9.1-14.6,16.1c-1.1,2.5-1.5,5.1-1.3,7.7c0.3,3.2,0.9,6.4,2.1,9.4c2.1,5.4,5.7,9.4,11.5,11c1.8,0.5,3.5,1,5.3,1.6 c2.1,0.7,4.3,0.8,6.5,0.5c2.4-0.3,4.8-0.8,7.1-1.4c1.8-0.5,3.4-1.5,4.6-2.9c2-2.2,3.9-4.6,5.2-7.3c0.7-1.4,1.3-3,1.6-4.5 c1.1-6.4-0.7-12.1-4.5-17.2c-1.8-2.5-4.3-4.2-7.2-5c-3-0.8-6.1-1.1-9.2-0.8c-4.5,0.4-8.4,2.2-11.4,5.7c-2.1,2.4-3.6,5-4.3,8.1 c-0.6,2.4-0.5,4.8-0.6,7.2c-0.2,5.8,6.2,12.5,12.3,12c2.7-0.2,5.5-0.5,8.2-0.7c5.4-0.5,9.3-4.9,9.8-9.6c0.2-1.9,0.2-3.9,0.1-5.8 c-0.1-2.5-1.3-4.6-3.1-6.3c-3.1-2.9-6.8-4.1-11.1-3.7c-2.4,0.2-4.4,1.2-5.8,3.2c-1.8,2.5-2.8,5.3-3.1,8.3c-0.2,1.9,0.3,3.7,1.9,5 c2.7,2.2,5.8,3.3,9.2,3c1.6-0.1,2.8-0.9,3.8-2.2c1.6-2.1,1.6-4.5,1.1-6.9c-1-4.3-4.6-5.5-8.2-2.9c-0.3,0.2-0.4,0.7-0.6,1.1 c0.1,0.1,0.3,0.3,0.4,0.4c0.9-0.4,1.8-0.9,2.8-1.2c1-0.3,2-0.1,2.8,0.7c1.6,1.8,1.9,5.4,0.5,7.4c-0.9,1.2-2.1,1.9-3.5,1.8 c-2.3-0.1-4.5-0.9-6.4-2.3c-1.3-1-1.8-2.3-1.7-3.9c0.2-1.7,0.7-3.4,1.4-4.9c1.8-3.6,4-4.9,8.1-4.4c0.9,0.1,1.8,0.3,2.7,0.6 c4.5,1.7,6.8,5,6.6,9.8c0,1.4-0.2,2.8-0.5,4.1c-0.9,3.2-2.9,5.5-6.3,6.1c-2.9,0.5-5.9,0.7-8.9,0.9c-5.6,0.4-10.5-5.4-10.3-9.9 c0.1-2.1,0.2-4.1,0.6-6.1c1.5-6.9,7.2-11.6,14.2-11.9c1.7-0.1,3.5,0,5.2,0.2c3.5,0.4,6.4,1.9,8.5,4.7c3.1,4.2,4.6,8.9,4.2,14.2 c-0.3,3.5-2.1,6.2-4,9c-2.1,3-4.7,5-8.4,5.4c-1.1,0.1-2.3,0.4-3.4,0.7c-2,0.5-3.9,0.4-5.8-0.1c-2.3-0.6-4.6-1.3-6.9-2 c-3.1-1-5.4-3-7.1-5.7c-2.7-4.3-3.8-9.1-3.8-14.1c0-2,0.6-3.8,1.5-5.6c2.9-6,7.3-10.5,12.9-14c2.2-1.4,4.7-1.9,7.3-1.6 c4.2,0.4,8.1,1.6,11.6,3.9c3.1,2,5.8,4.5,8.3,7.2c1.7,1.9,2.9,4.1,3.6,6.6c1.5,5,1.1,10.1-0.2,15c-2.2,8-9.4,14.2-17.5,15.9 c-1.7,0.4-3.3,0.9-4.9,1.5c-1.1,0.4-1.6,1.4-1.2,2.1c0.5,0.8,1.4,0.7,2.1,0.5c2.5-0.7,5.1-1.3,7.6-2.2c1.4-0.5,2.8-1.1,4-1.9 c2.9-1.7,5.4-3.9,7.6-6.4c2.6-3,4.5-6.5,5.2-10.4C92.8,65.1,93,61.7,92.9,58.4z"
              ></path>
              <path
                class="fill-primary"
                d="M98.2,97.6c-1.9-3-3.8-6-5.7-9c-0.7-1-1.2-2.2-3-3c0,0.8-0.1,1.3,0,1.7c0.4,0.9,1,1.8,1.5,2.7 c2.8,5,5.7,9.9,9.2,14.5c1,1.2,2.2,2.3,3.4,3.4c0.3,0.3,0.8,0.4,1.2-0.3c-0.5-0.8-1.1-1.8-1.8-2.7C101.4,102.3,99.7,100,98.2,97.6z "
              ></path>
              <path
                class="fill-primary"
                d="M75.3,98c-0.5-1.5-1.2-3-1.9-4.4c-0.1-0.3-0.6-0.4-0.9-0.6c-0.2,0.2-0.3,0.3-0.5,0.5c0.1,0.5,0.2,1.1,0.4,1.6 c1.6,5.3,3.1,10.5,4.8,15.8c0.5,1.6,1.1,3.3,1.7,4.9c0.5,1.3,1.4,1.8,1.9,1.4c0.8-0.6,0.5-1.4,0.2-2.2C79,109.3,77.2,103.6,75.3,98 z"
              ></path>
              <path
                class="fill-primary"
                d="M26.5,69.5c-5.5,1.6-11,3.2-16.5,4.8c-2.1,0.6-4.1,1.4-6.1,2.2c-0.6,0.2-1.1,0.7-1.9,1.2 c5.9-0.4,24.8-6,28.2-8.3C28.8,68.8,27.6,69.2,26.5,69.5z"
              ></path>
              <path
                class="fill-primary"
                d="M55,96.3c-2.2,7.9-4.5,15.8-6.7,23.8c-0.3,1.2-0.4,2.5-0.7,4.4c0.6-0.9,0.8-1.2,0.9-1.5 c2.6-7.8,5.1-15.7,7.6-23.5c0.3-1.1,0.5-2.2,0.6-3.4c0-0.4-0.4-0.9-0.8-1.7C55.5,95.3,55.2,95.8,55,96.3z"
              ></path>
              <path
                class="fill-primary"
                d="M25.2,48.7c0.6,0.3,1.3,0.5,2,0.6c0.5,0.1,1.1-0.1,1.6-0.2c0-0.2,0-0.3,0-0.5c-3-1.4-6-3-9-4.2 c-3.2-1.3-6.4-2.4-9.7-3.5c-3.1-1-6.1-2.3-10-2.8c0.8,0.7,1.1,1.1,1.5,1.3c1.5,0.7,2.9,1.3,4.4,1.9C12.4,43.6,18.9,45.7,25.2,48.7z "
              ></path>
              <path
                class="fill-primary"
                d="M38.2,86.5c-0.7,0.3-1.4,0.8-2,1.3c-5.1,4.5-10.1,9-14.5,14.2c-0.9,1-1.6,2.2-2.5,3.3c0.1,0.1,0.2,0.3,0.4,0.4 c6.7-6.2,13.4-12.3,20.1-18.5c0.1-0.1,0-0.4,0-0.9C39.2,86.4,38.6,86.3,38.2,86.5z"
              ></path>
              <path
                class="fill-primary"
                d="M106.5,77.4c-1.1-1.1-2.4-2.2-3.6-3.1c-0.7-0.5-1.6-0.8-2.5-1c-0.5-0.1-1.2,0-1,1.1c2.1,0.8,3.6,2.5,5.2,4.1 c1.3,1.3,2.4,2.7,3.8,3.9c1.8,1.5,3.8,3,5.7,4.3c1,0.7,2.2,1.3,4.1,0.7c-0.7-0.7-1.1-1.1-1.5-1.4C112.9,83.6,109.6,80.5,106.5,77.4 z"
              ></path>
              <path
                class="fill-primary"
                d="M33.5,27.3c0.7,0.7,1.6,1.3,2.5,1.8c0.5,0.3,1.3,0.4,1.9,0.5c-2.3-2.2-4-4.6-6-6.8c-3.5-3.8-7-7.6-10.5-11.3 c-0.4-0.4-0.7-0.9-1.4-0.6c-0.5,0.6-0.1,1.1,0.3,1.5C24.6,17.4,29.1,22.4,33.5,27.3z"
              ></path>
              <path
                class="fill-primary"
                d="M53.3,20c0.1,1.1,0.3,2.3,0.6,3.4c0.1,0.4,0.7,0.6,1.3,1c-0.1-3.1-0.1-5.8-0.3-8.5c-0.1-2.6-0.4-5.2-0.6-7.9 c-0.4-5-0.6-5.7-2-8c0,0.9-0.1,1.6-0.1,2.2C52.6,8.2,52.9,14.1,53.3,20z"
              ></path>
              <path
                class="fill-primary"
                d="M101.1,56.2c0.2,0.4,0.3,0.7,0.5,0.7c4.9,1.1,9.8,2.2,14.7,3.1c1.3,0.3,2.7,0.4,4.1-0.5 c-0.8-0.3-1.7-0.6-2.5-0.8c-5.2-0.9-10.3-1.9-15.5-2.7C102,56,101.6,56.1,101.1,56.2z"
              ></path>
              <path
                class="fill-primary"
                d="M97.8,36.8c4.7-1.9,8.9-4.8,12.6-8.3c0.3-0.3,0.7-0.6,0.1-1.3c-2.5,1.7-5.1,3.5-7.7,5.1 c-2.6,1.6-5.3,3-8.1,4.6C95.9,37.7,96.8,37.2,97.8,36.8z"
              ></path>
              <path
                class="fill-primary"
                d="M81.6,11.5c0.5-1.6,0.8-3.2,1.2-4.8c-0.3,0.2-0.6,0.3-0.7,0.5c-1.6,4.3-3.2,8.5-4.7,12.8 c-0.2,0.6-0.1,1.3-0.2,1.9C79.1,18.6,80.5,15.1,81.6,11.5z"
              ></path>
              <path
                class="fill-primary"
                d="M82.8,6.5c0,0,0,0.1,0,0.1C82.8,6.6,82.8,6.6,82.8,6.5C82.9,6.6,82.8,6.5,82.8,6.5z"
              ></path>
            </svg>
          </figure>

          <img :src="sassBackground" class="rounded-4 position-relative" alt="" />

          <div class="">
            <img
              :src="decoration1"
              data-depth="0.5"
              class="layer position-absolute top-0 end-0 rounded-3 h-25 shadow me-5"
              alt=""
            />
          </div>

          <img
            :src="decoration2"
            class="rounded-3 shadow position-absolute top-0 start-50 translate-middle mt-7 d-none d-md-block"
            alt=""
          />

          <img
            :src="decoration3"
            data-depth="0.8"
            class="rounded-3 layer shadow position-absolute bottom-0 start-0 ms-8 d-none d-lg-block"
            alt=""
          />

          <img
            :src="decoration4"
            data-depth="0.3"
            class="rounded-3 layer shadow position-absolute bottom-0 end-0 me-9 mb-4 d-none d-sm-block"
            alt=""
          />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, inject } from 'vue'
import AOS from 'aos'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { BIconArrowRight } from 'bootstrap-icons-vue'

import googleImg from '@/assets/images/elements/google.svg'
import sassBackground from '@/assets/images/bg/saas-bg-2.png'
import trustpilotStar from '@/assets/images/elements/trustpilot-star.svg'
import decoration1 from '@/assets/images/elements/saas-decoration/01.png'
import decoration2 from '@/assets/images/elements/saas-decoration/02.png'
import decoration3 from '@/assets/images/elements/saas-decoration/03.png'
import decoration4 from '@/assets/images/elements/saas-decoration/04.png'
import trustpilotImgEN from '@/assets/images/elements/trustpilot.svg'
import trustpilotLightImgEN from '@/assets/images/elements/trustpilot-light.svg'
import trustpilotImgFA from '@/assets/images/elements/trustpilot-fa.svg'
import trustpilotLightImgFA from '@/assets/images/elements/trustpilot-light-fa.svg'

const rtl: boolean | undefined = inject('rtl')
const lang: string | undefined = inject('lang')

const trustPilotImg = lang === 'fa' ? trustpilotImgFA : trustpilotImgEN;
const trustPilotLightImg = lang === 'fa' ? trustpilotLightImgFA : trustpilotLightImgEN;

onMounted(() => {
  AOS.init()

  document.addEventListener('mousemove', (event: MouseEvent) => {
    document
      .querySelectorAll<HTMLElement>('.parallax-wrap .layer')
      .forEach((shift: HTMLElement) => {
        const position: any = shift.getAttribute('data-depth')
        if (position) {
          const x = (window.innerWidth - event.pageX * position) / 90
          const y = (window.innerHeight - event.pageY * position) / 90
          shift.style.transform = rtl ? `translateX(-${x}px) translateY(${y}px)` : `translateX(${x}px) translateY(${y}px)`
        }
      })
  })
})
</script>
