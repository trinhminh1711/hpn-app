<template>
  <v-card class="mx-auto" width="700">
    <v-list class="py-0" density="compact">
      <v-toolbar color="secondary">
        <v-btn variant="text" icon="mdi-menu"></v-btn>
        <h2 class="ml-5">Phong trào đang triển khai, tuyên truyền</h2>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-list-item
        class="py-4"
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        color="primary"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title v-text="item.text"></v-list-item-title>
        <template v-slot:append>
          <v-btn
            class="flex-grow-1"
            height="40"
            variant="outlined"
            @click="this.load"
          >
            Góp ý
          </v-btn>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    items: [
      { text: "Công tác giải phóng mặt bằng", icon: "mdi-city" },
      { text: "Xây dựng gia đình 5 không 3 sạch", icon: "mdi-home-heart" },
      {
        text: "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh",
        icon: "mdi-flag",
      },
    ],
  }),
  methods: {
    load() {
     this.$router.push({ path: "/form-sugestion" })
    },  
  },
};
</script>
