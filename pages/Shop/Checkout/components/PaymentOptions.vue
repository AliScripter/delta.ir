<template>
  <b-card no-body class="bg-transparent">
    <b-card-header class="bg-transparent border-bottom px-0">
      <h5>گزینه‌های پرداخت</h5>
    </b-card-header>

    <b-card-body class="px-0">
      <b-row class="g-4">
        <b-col md="6" lg="12" xl="6" v-for="(item, idx) in paymentOptions" :key="idx">
          <div class="form-check border rounded p-3">
            <div class="d-flex justify-content-between">
              <label class="form-check-label d-flex align-items-start pe-4" :for="`standard${idx}`">
                <img :src="item.image" v-if="item.image" class="w-40px me-3 mt-1" alt="" />
                <span class="w-40px" v-if="item.icon">
                  <component :is="item.icon" class="fs-5 mt-1" />
                </span>
                <span>
                  <span class="d-block fw-semibold heading-color mb-1">{{ item.title }}</span>
                  <span class="d-block small">{{ item.subTitle }}</span>
                </span>
              </label>
              <input
                class="form-check-input"
                type="radio"
                name="payOptions"
                :id="`standard${idx}`"
                checked
              />
            </div>

            <div class="d-flex justify-content-end gap-3 mt-3">
              <a href="#" class="text-body-secondary text-primary-hover small">به‌عنوان پیش‌فرض تنظیم کن</a>
              <router-link
                to="#"
                v-if="item.image"
                class="heading-color text-primary-hover fw-semibold small icons-center"
                v-b-modal.editcard
              >
                <BIconPencilSquare class="me-1" />
                ویرایش
              </router-link>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>

  <b-modal
    hideFooter
    body-class="p-0 m-0"
    title="ویرایش کارت"
    centered
    class="fade"
    id="editcard"
    tabindex="-1"
    aria-labelledby="editCardLabel"
    aria-hidden="true"
  >
    <div class="p-4">
      <b-form class="row g-4">
        <b-col cols="12">
          <b-form-group label="Card Number">
            <div class="position-relative">
              <b-form-input
                type="text"
                maxlength="16"
                v-model="cardNo"
                placeholder="xxxx xxxx xxxx xxxx"
              />
              <img
                :src="visa"
                class="w-40px position-absolute top-50 end-0 translate-middle-y me-2"
                alt=""
              />
            </div>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group label="Expiration date">
            <div class="input-group">
              <b-form-input type="text" maxlength="2" v-model="date" placeholder="ماه" />
              <b-form-input type="text" maxlength="4" v-model="year" placeholder="سال" />
            </div>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group label="CVV / CVC">
            <b-form-input type="text" maxlength="3" v-model="cvv" placeholder="xxx" />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group label="نام روی کارت">
            <b-form-input
              type="text"
              aria-label="name of card holder"
              v-model="name"
              placeholder="نام صاحب کارت"
            />
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-checkbox>کارت و جزئیات را به‌طور ایمن ذخیره کنید</b-form-checkbox>
        </b-col>
      </b-form>
    </div>
    <div class="modal-footer px-4">
      <button type="button" class="btn btn-white border my-0" v-b-modal.editcard>بستن</button>
      <b-button variant="primary" type="button" class="my-0" v-b-modal.editcard
        >ذخیره تغییرات</b-button
      >
    </div>
  </b-modal>
</template>

<script lang="ts" setup>
import { paymentOptions } from '@/views/Shop/Checkout/data'
import { BIconPencilSquare } from 'bootstrap-icons-vue'

import visa from '@/assets/images/elements/visa.svg'

const cardNo = '2456 2588 4589 7895'
const date = '08'
const year = '1403'
const cvv = '565'
const name = 'ژاکلین میلر'
</script>
