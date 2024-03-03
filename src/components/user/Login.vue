<template>
  <v-sheet class="mx-auto mt-5" width="400">
    <h2 class="mb-4 text-center">Nhập thông tin Hội viên</h2>
    <v-form ref="form">
      <v-text-field
        v-model="fullName"
        :rules="nameRules"
        label="Họ và tên"
        required
      ></v-text-field>

      <v-select
        v-model="selectWorkPlace"
        :items="items"
        :rules="[(v) => !!v || 'Vui lòng chọn đơn vị sinh hoạt']"
        label="Đơn vị sinh hoạt"
        required
      ></v-select>

      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'Vui lòng xác thực thông tin!']"
        label="Tuyên truyền đến đông đảo Hội viên hơn"
        required
      ></v-checkbox>
      <div class="d-flex flex-column">
        <v-btn class="mt-1" color="success" block @click="validate">
          Đồng ý
        </v-btn>
      </div>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    fullName: "",
    nameRules: [(v) => !!v || "Vui lòng nhập họ tên"],
    selectWorkPlace: "Hội LHPN Quận Ngô Quyền",
    items: [
      "Hội LHPN Phường Cầu Đất",
      "Hội LHPN Phường Cầu Tre",
      "Hội LHPN Phường Đằng Giang",
      "Hội LHPN Phường Đồng Quốc Bình",
      "Hội LHPN Phường Vạn Mỹ",
      "Hội LHPN Phường Máy Chai",
      "Hội LHPN Phường Lạc Viên",
      "Hội LHPN Phường Máy Tơ",
      "Hội LHPN Phường Gia Viên",
      "Hội LHPN Phường Lê Lợi",
      "Hội LHPN Phường Đông Khê",
      "Hội LHPN Phường Máy Tơ",
    ],
    checkbox: false,
  }),

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
      this.$store.state.fullName = this.fullName
      this.$store.state.workPlace = this.selectWorkPlace
      this.$router.push({ path: '/' })
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style></style>
