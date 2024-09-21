<template>
  <footer class="bg-dark pt-6" data-bs-theme="dark">
    <b-container class="position-relative mt-sm-5">
      <div class="bg-light border rounded p-4 p-sm-5 mb-7">
        <div class="d-md-flex align-items-center">
          <div class="icon-lg bg-dark text-white rounded flex-shrink-0 flex-centered">
            <BIconCursor class="fa-xl rtl:-scale-x-100" />
          </div>
          <div class="ms-md-4 my-4 my-md-0">
            <h5>به جامعه فوق‌العاده ما بپیوندید!</h5>
            <p class="mb-0">
              کارها را به اشتراک بگذارید، از دیگران حمایت بخواهید، در اجزا رأی‌گیری کنید، به‌روز بمانید و با دیگران شبکه‌سازی کنید.
            </p>
          </div>
          <a href="#" class="btn btn-white mb-0 ms-auto flex-shrink-0">همین حالا بپیوندید</a>
        </div>
      </div>

      <b-row class="g-4 justify-content-between">
        <b-col lg="5">
          <LogoBox imageClass="h-40px" />

          <p class="mt-4 mb-2">
            یک قالب بوت‌استرپ که هم شیک و هم کاربردی است، برای هر نوع وب‌سایت فناوری یا شرکتی مناسب است.
          </p>
          <ul class="list-inline mb-0 mt-4 d-flex align-items-center gap-1">
            <li class="list-inline-item" v-for="(item, idx) in followOnIcons" :key="idx">
              <a class="btn btn-xs btn-icon btn-light" href="#"
                ><font-awesome-icon :icon="item.icon" class="fa-fw lh-base"
              /></a>
            </li>
          </ul>
        </b-col>

        <b-col lg="6" xxl="4">
          <b-row class="g-4">
            <b-col cols="6">
              <ul class="nav flex-column">
                <li class="nav-item" v-for="(item, idx) in quickLinks" :key="idx">
                  <router-link class="nav-link" :class="!idx && 'pt-0'" :to="{ name: item.link }"
                    >{{ item.name }}
                    <span v-if="item.badge" class="badge text-bg-danger ms-2">{{
                      item.badge
                    }}</span></router-link
                  >
                </li>
              </ul>
            </b-col>

            <b-col cols="6">
              <ul class="nav flex-column">
                <li class="nav-item" v-for="(item, idx) in communityLinks" :key="idx">
                  <router-link class="nav-link" :class="!idx && 'pt-0'" :to="{ name: item.link }"
                    >{{ item.name }}<component :is="item.icon" class="small ms-2 rtl:-scale-x-100"
                  /></router-link>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <hr class="mt-4 mb-0" />

      <div
        class="d-md-flex justify-content-between align-items-center text-center text-lg-start py-4"
      >
        <div class="text-body">
          ©کپی‌رایت {{ currentYear }} میزل. ساخته شده توسط
          <a :href="developedByLink" class="text-body text-primary-hover">{{ developedBy }}</a
          >.
        </div>
        <div class="nav mt-2 mt-lg-0">
          <ul class="list-inline mx-auto mb-0">
            <li class="list-inline-item me-0">
              <router-link class="nav-link py-0" to="">سیاست حفظ حریم خصوصی </router-link>
            </li>
            <li class="list-inline-item me-0">
              <router-link class="nav-link py-0 pe-0" to=""
                >&nbsp;شرایط و ضوابط</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </b-container>
  </footer>
</template>

<script lang="ts" setup>
import { BIconCursor } from 'bootstrap-icons-vue'
import LogoBox from '@/components/topbar/LogoBox.vue'
import { quickLinks, communityLinks, followOnIcons } from '@/assets/data/footer-items'
import { currentYear, developedBy, developedByLink } from '@/helpers'
</script>
