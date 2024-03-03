<template>
  <v-card class="mx-auto" width="700">
    <v-list class="py-0" density="compact">
      <v-toolbar color="secondary">
        <v-btn variant="text" icon="mdi-menu"></v-btn>
        <h2 class="ml-5">Phong trào đang triển khai, tuyên truyền</h2>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-list-item class="py-4" v-for="(item, i) in items" :key="i" :value="item" color="primary">
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>
    <v-btn :loading="loading" class="flex-grow-1" height="48" variant="tonal" @click="load"> Tham gia thi </v-btn>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    items: [
      { text: "Công tác giải phóng mặt bằng", icon: "mdi-city" },
      { text: "Xây dựng gia đình 5 không 3 sạch", icon: "mdi-home-heart" },
      { text: "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh", icon: "mdi-flag" },
    ],
  }),
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => ((this.loading = false), this.$router.push({ path: "/exam" })), 2000);
    },
  },
};
</script>
