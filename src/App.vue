<template>
  <v-app>
    <v-container class="d-flex justify-center">
      <v-app-bar :elevation="3">
        <h3 style="color:#3bb9e0" class="text-center pr-5 text-subtitle-1">Hội Liên hiệp Phụ nữ Việt Nam Quận Ngô Quyền</h3>
        <img style="width:60px" src="http://res.cloudinary.com/dzh9im6wd/image/upload/v1709372209/HPN_App/tbjlwo3kytcbpndcyaow.png" alt="">
        <template v-slot:prepend>
          <v-btn
            @click="this.$router.push({ path: '/' })"
            class="my-5"
            color="blue"
            prepend-icon="mdi-arrow-left"
            variant="flat"
          >
            Thoát
          </v-btn>
        </template>
      </v-app-bar>
    </v-container>
    <v-container class="mt-5">
      <router-view />
    </v-container>
  </v-app>
</template>

<script setup>
//
</script>
<style scoped>
#btn-back {
  width: 400px;
  padding: 20px 0;
  display: flex;
  align-items: center;
  text-align: center;
}
</style>
