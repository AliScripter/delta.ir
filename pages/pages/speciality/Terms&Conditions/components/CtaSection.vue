<template>
  <section class="pt-0">
    <b-container>
      <div class="bg-dark rounded p-4 p-sm-6" data-bs-theme="dark">
        <b-row class="align-items-center">
          <b-col md="6">
            <h2>بیایید عملکرد شما را خودکار و ساده کنیم</h2>
            <p class="mb-0">
              اجازه دهید IT شما را مدیریت کنیم تا بتوانید به کارهایی که بهترین هستید برگردید و ما به آینده نگاه کنیم.
            </p>
          </b-col>
          <b-col md="6" class="text-end">
            <router-link :to="{ name: 'contact.v1' }" class="btn btn-lg btn-primary mb-0"
              >شروع کنید</router-link
            >
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>
