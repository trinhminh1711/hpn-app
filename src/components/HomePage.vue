<template>
  <v-container class="text-center">
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-btn
          block
          rounded="lg"
          variant="outlined"
          size="x-large"
          class="pd-my-4 mx-lg-auto"
          @click="this.openSelectCampain"
        >
          <v-icon end icon="mdi-file-document-edit mr-5"></v-icon> Thi trực
          tuyến</v-btn
        >
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-btn
          @click="this.openSelectCampain_box"
          class="pd-my-4 mx-lg-auto"
          block
          rounded="lg"
          size="x-large"
        >
          <v-icon end icon="mdi-email mr-5"></v-icon>Hòm thư góp ý</v-btn
        >
      </v-col>
    </v-row>
    <v-dialog v-model="selectCampain">
      <CardCampain />
    </v-dialog>
    <v-dialog v-model="selectCampain_box">
      <CardSuggestion />
    </v-dialog>
  </v-container>
</template>
<script>
import CardCampain from "./card/CardCampain.vue";
import CardSuggestion from "./suggestion_box/CardSuggestion.vue";
export default {
  data() {
    return {
      dialog: false,
      rules: [
        (value) => !!value || "Vui lòng nhập họ tên.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
      nameUser: "",
      workPlace: "",
      selectCampain_box: false,
      selectCampain: false,
    };
  },
  mounted() {

  },
  components: {
    CardCampain,
    CardSuggestion,
  },
  methods: {
    openSelectCampain() {
      this.selectCampain = true;
    },
    openSelectCampain_box() {
      this.selectCampain_box = true;
    },
    sendInforUser() {
      console.log(this.nameUser);
      console.log(this.workPlace);
      this.dialog = false;
    },
  },
};
</script>
