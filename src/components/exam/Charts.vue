<template>
  <v-container>
    <h2 class="text-center">
      Bảng xếp hạng Hội viên tham gia cuộc thi tìm hiểu về "Công tác giải Phóng
      mặt bằng"
    </h2>
    <v-row class="flex justify-center mt-5">
      <v-data-table :headers="headers" :items="desserts">
        <template v-slot:item.NumberCorrect="{ value }">
          <v-chip :color="getColor(value)">
            {{ value }}
          </v-chip>
        </template>
      </v-data-table>
    </v-row>
  </v-container>
</template>

<script>
import * as questionData from "../../api/exam.js";
export default {
  data() {
    return {
      desserts: [
        {
          FullName: "Frozen Yogurt",
          WorkPlace: 159,
          NumberCorrect: 159,
          CompletionTime: 159,
        },
      ],
      headers: [
        { title: "Họ và tên", key: "FullName" },
        { title: "Đơn vị công tác", key: "WorkPlace" },
        { title: "Số câu trả lời đúng", key: "NumberCorrect" },
        { title: "Thời gian thi", key: "CompletionTime" },
      ],
    };
  },
  mounted() {
    this.getQuestion();
  },
  methods: {
    getColor(NumberCorrect) {
      if (NumberCorrect > 15) return "green";
      else if (NumberCorrect > 50) return "orange";
      else return "red";
    },
    getQuestion: async function () {
      const data = await questionData.getUsersResults();
      this.desserts = data;
      console.log(this.desserts);
    },
  },
};
</script>

<style></style>
