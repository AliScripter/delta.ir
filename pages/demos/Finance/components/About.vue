<template>
  <Section class="pb-0">
    <b-container>
      <b-row class="align-items-center">
        <b-col lg="6" xl="5">
          <div class="position-relative mb-5 mb-lg-0">
            <img :src="about19" class="rounded" alt="" />
            <div
              class="bg-body rounded-pill d-flex align-items-center gap-3 position-absolute top-0 start-0 p-2 m-4"
            >
              <div class="avatar flex-shrink-0">
                <img class="avatar-img rounded-circle" :src="avatar8" alt="avatar" />
              </div>
              <div class="me-3">
                <h6 class="mb-0">دنیس بارنت</h6>
                <p class="mb-0 small">مدیر عامل و مدیر بلاگ‌زین</p>
              </div>
            </div>
          </div>
        </b-col>

        <b-col lg="6" class="ms-auto">
          <h2 class="mb-4">توانمندسازی آینده مالی با هم</h2>
          <p class="mb-4">
            با تعهد به صداقت، تخصص و خدمات شخصی‌سازی شده، ما تلاش می‌کنیم روابط پایداری
            را بر اساس اعتماد و موفقیت مشترک ایجاد کنیم.
          </p>
          <router-link :to="{ name: 'about.v1' }" class="btn btn-dark mb-0"
            >بیشتر درباره ما بدانید</router-link
          >
          <hr class="my-5 my-xl-7" />

          <div class="d-flex flex-wrap gap-4 gap-xl-7">
            <div>
              <h3 class="mb-0">99<span class="text-primary">%</span></h3>
              <p>رضایت مشتری</p>
            </div>

            <div>
              <h3 class="mb-0">1.5<span class="text-primary">x</span></h3>
              <p>رشد شرکت</p>
            </div>

            <div>
              <h3 class="mb-0">120<span class="text-primary">+</span></h3>
              <p>کاربران جدید هفتگی</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </Section>
</template>

<script lang="ts" setup>
import about19 from '@/assets/images/about/19.jpg'
import avatar8 from '@/assets/images/avatar/08.jpg'
</script>
