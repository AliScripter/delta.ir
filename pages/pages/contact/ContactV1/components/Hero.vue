<template>
  <section class="pt-xl-8">
    <b-container>
      <b-row class="g-4 g-xxl-5">
        <b-col xl="9" class="mx-auto">
          <img :src="bg02" class="rounded" alt="contact-bg" />

          <b-row class="mt-n5 mt-sm-n7 mt-md-n8">
            <b-col cols="11" lg="9" class="mx-auto">
              <b-card no-body class="shadow p-4 p-sm-5 p-md-6">
                <b-card-header class="border-bottom px-0 pt-0 pb-5">
                  <nav class="mb-3" aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-dots pt-0">
                      <li class="breadcrumb-item"><a href="#">خانه</a></li>
                      <li class="breadcrumb-item active" aria-current="page">تماس با ما</li>
                    </ol>
                  </nav>

                  <h1 class="mb-3 h3">بیایید برند شما را با هم ارتقا دهیم</h1>
                  <p class="mb-0">شما می‌توانید هر زمان از طریق <a href="#">example@gmail.com</a> با ما تماس بگیرید</p>
                </b-card-header>

                <b-form class="px-0 pb-0 pt-5">
                  <div class="input-floating-label form-floating mb-4">
                    <input
                      type="text"
                      class="form-control bg-transparent"
                      id="floatingName"
                      placeholder="رمز عبور"
                    />
                    <label for="floatingName">نام شما</label>
                  </div>

                  <div class="input-floating-label form-floating mb-4">
                    <input
                      type="email"
                      class="form-control bg-transparent"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">آدرس ایمیل</label>
                  </div>

                  <div class="input-floating-label form-floating mb-4">
                    <input
                      type="text"
                      class="form-control bg-transparent"
                      id="floatingNumber"
                      placeholder="شماره تلفن"
                    />
                    <label for="floatingNumber">شماره تلفن</label>
                  </div>

                  <div class="input-floating-label form-floating mb-4">
                    <textarea
                      class="form-control bg-transparent"
                      placeholder="اینجا نظری بگذارید"
                      id="floatingTextarea2"
                      style="height: 100px"
                    ></textarea>
                    <label for="floatingTextarea2">پیام</label>
                  </div>

                  <b-button size="lg" variant="primary" class="mb-0">ارسال پیام</b-button>
                </b-form>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg02 from '@/assets/images/bg/02.jpg'
</script>
