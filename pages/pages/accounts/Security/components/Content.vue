<template>
  <form>
    <div
      class="bg-light border rounded-3 d-md-flex justify-content-between align-items-center p-4 mb-3"
    >
      <div>
        <h6>گزارش‌های فعالیت</h6>
        <p class="mb-1 mb-md-0">
          شما می‌توانید تمامی گزارش‌های فعالیت خود را ذخیره کنید، از جمله فعالیت‌های غیرمعمول شناسایی شده.
        </p>
      </div>

      <div class="form-check form-switch form-check-md mb-0">
        <input class="form-check-input" type="checkbox" id="checkPrivacy1" checked />
      </div>
    </div>

    <div
      class="bg-light border rounded-3 p-4 d-md-flex justify-content-between align-items-center mb-4"
    >
      <div>
        <h6>احراز هویت دو مرحله‌ای</h6>
        <p class="small mb-1 mb-md-0">
          حساب خود را با امنیت دو مرحله‌ای محافظت کنید. زمانی که فعال شد، شما نیاز خواهید داشت علاوه بر رمز عبور خود، یک کد ویژه از طریق اپلیکیشن نیز وارد کنید. شما می‌توانید این کد را از طریق اپلیکیشن موبایل دریافت کنید.
        </p>
      </div>

      <div class="form-check form-switch form-check-md mb-0">
        <input class="form-check-input" type="checkbox" id="checkPrivacy13" checked />
      </div>
    </div>

    <LinkedAccount />
  </form>

  <div class="text-center my-5">
    <BIconThreeDots />
  </div>

  <b-row class="g-lg-6">
    <form class="col-md-6 col-lg-12 col-xl-6">
      <b-card no-body class="bg-transparent rounded-3">
        <div class="card-header bg-transparent border-bottom px-0">
          <h6 class="card-header-title mb-0">پروفایل شبکه‌های اجتماعی</h6>
        </div>

        <b-card-body class="px-0">
          <div class="mb-3">
            <label class="form-label"
              ><font-awesome-icon :icon="faFacebook" class="text-facebook me-2" />نام کاربری فیسبوک را وارد کنید</label
            >
            <input class="form-control" type="text" value="جی‌کیو میلر" placeholder="نام کاربری را وارد کنید" />
          </div>

          <div class="mb-3">
            <label class="form-label">
              <BIconTwitter class="text-twitter me-2" />نام کاربری توییتر را وارد کنید
            </label>
            <input class="form-control" type="text" value="جی‌کیو میلر" placeholder="نام کاربری را وارد کنید" />
          </div>

          <div class="mb-3">
            <label class="form-label"
              ><font-awesome-icon :icon="faInstagram" class="text-danger me-2" />نام کاربری اینستاگرام را وارد کنید</label
            >
            <input class="form-control" type="text" value="جی‌کیو میلر" placeholder="نام کاربری را وارد کنید" />
          </div>

          <div class="mb-3">
            <label class="form-label"
              ><font-awesome-icon :icon="faYoutube" class="text-youtube me-2" />آدرس پروفایل یوتیوب خود را اضافه کنید</label
            >
            <input
              class="form-control"
              type="text"
              value="https://www.youtube.com/in/Mizzle-05620abc"
              placeholder="نام کاربری را وارد کنید"
            />
          </div>

          <div class="d-flex justify-content-end mt-4">
            <b-button variant="primary" class="mb-0">ذخیره تغییرات</b-button>
          </div>
        </b-card-body>
      </b-card>
    </form>

    <form class="col-md-6 col-lg-12 col-xl-6">
      <b-card no-body class="bg-transparent rounded-3">
        <div
          class="card-header bg-transparent border-bottom d-flex justify-content-between align-items-center px-0"
        >
          <h6 class="card-header-title mb-0">دستگاه‌ها</h6>
          <button class="btn btn-sm btn-danger-soft mb-0" type="button">
            خروج از تمام دستگاه‌ها
          </button>
        </div>

        <b-card-body class="px-0">
          <div class="d-flex border-bottom pb-4 mb-4">
            <span class="fs-5 heading-color">
              <BIconPhone class="fa-fw" />
            </span>

            <div class="ms-2">
              <p class="heading-color fw-bold mb-0">
                آیفون 12 پرو <span class="badge small text-bg-primary">فعال</span>
              </p>
              <ul class="nav nav-divider small">
                <li class="nav-item">لندن، انگلستان</li>
                <li class="nav-item">۲۳ مهر ساعت ۱:۱۵ بعدازظهر</li>
              </ul>
            </div>

            <b-dropdown
              class="ms-auto"
              variant="link"
              toggle-class="text-primary-hover fs-6 arrow-none m-0 p-0"
              menu-class="min-w-auto shadow"
              end
            >
              <template #button-content>
                <BIconThreeDotsVertical />
              </template>

              <b-dropdown-item> <BIconPencilSquare class="me-2" />ویرایش </b-dropdown-item>
              <b-dropdown-item> <BIconSlashCircle class="me-2" />حذف </b-dropdown-item>
            </b-dropdown>
          </div>

          <div class="d-flex border-bottom pb-4 mb-4">
            <span class="fs-5 heading-color">
              <BIconPhone class="fa-fw" />
            </span>

            <div class="ms-2">
              <p class="heading-color fw-bold mb-0">آیفون SE</p>
              <ul class="nav nav-divider small">
                <li class="nav-item">لندن، انگلستان</li>
                <li class="nav-item">۱۳ مهر ساعت ۴:۱۵ بعدازظهر</li>
              </ul>
            </div>

            <b-dropdown
              class="ms-auto"
              variant="link"
              toggle-class="text-primary-hover fs-6 arrow-none m-0 p-0"
              menu-class="dropdown-menu-end min-w-auto shadow"
              end
            >
              <template #button-content>
                <BIconThreeDotsVertical />
              </template>

              <b-dropdown-item> <BIconPencilSquare class="me-2" />ویرایش </b-dropdown-item>
              <b-dropdown-item> <BIconSlashCircle class="me-2" />حذف </b-dropdown-item>
            </b-dropdown>
          </div>

          <div class="d-flex border-bottom pb-4 mb-4">
            <span class="fs-5 heading-color">
              <BIconLaptop class="fa-fw" />
            </span>

            <div class="ms-2">
              <p class="heading-color fw-bold mb-0">مک‌بوک پرو</p>
              <ul class="nav nav-divider small">
                <li class="nav-item">کالیفرنیا، آمریکا</li>
                <li class="nav-item">۲۰ مهر ساعت ۵:۱۵ بعدازظهر</li>
              </ul>
            </div>

            <b-dropdown
              class="ms-auto"
              variant="link"
              toggle-class="text-primary-hover fs-6 arrow-none m-0 p-0"
              menu-class="dropdown-menu-end min-w-auto shadow"
              end
            >
              <template #button-content>
                <BIconThreeDotsVertical />
              </template>

              <b-dropdown-item> <BIconPencilSquare class="me-2" />ویرایش </b-dropdown-item>
              <b-dropdown-item> <BIconSlashCircle class="me-2" />حذف </b-dropdown-item>
            </b-dropdown>
          </div>

          <div class="d-flex justify-content-end">
            <b-button class="mb-0" variant="dark">نیاز به کمک دارید؟</b-button>
          </div>
        </b-card-body>
      </b-card>
    </form>
  </b-row>
</template>

<script setup lang="ts">
import LinkedAccount from '@/views/pages/accounts/Security/components/LinkedAccount.vue'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import {
  BIconLaptop,
  BIconPencilSquare,
  BIconPhone,
  BIconSlashCircle,
  BIconThreeDots,
  BIconThreeDotsVertical,
  BIconTwitter
} from 'bootstrap-icons-vue'
</script>
