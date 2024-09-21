<template>
  <section class="position-relative z-index-2 pt-0">
    <b-container class="position-relative">
      <div
        class="bg-dark rounded position-relative overflow-hidden p-4 p-sm-6"
        :style="`background:url(${backgroundImg}) no-repeat; background-size:cover; background-position:center;`"
      >
        <b-row class="align-items-center position-relative">
          <b-col md="6" xl="7" class="mb-4 mb-xl-0">
            <h2 class="text-white">به خبرنامه ما مشترک شوید</h2>
            <p class="text-white mb-0">
              ما همیشه به شدت تلاش کرده‌ایم تا بهترین تجربه را برای مشتریان خود فراهم کنیم.
            </p>
          </b-col>

          <b-form class="col-md-6 col-xl-4 ms-xl-auto">
            <b-form-input class="mb-3" type="email" placeholder="آدرس ایمیل خود را وارد کنید" />
            <router-link to="#" class="btn btn-primary mb-0 d-grid">هم‌اکنون اشتراک شوید!</router-link>
          </b-form>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import backgroundImg from '@/assets/images/bg/15.jpg'
</script>
