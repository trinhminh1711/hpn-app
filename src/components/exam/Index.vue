<template>
  <v-container>
    <v-alert
      class="mb-5"
      color="primary"
      theme="dark"
      icon="$vuetify"
      prominent
    >
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <span class="font-weight-black mx-4">Họ và tên:</span>
          <span>{{ this.$store.state.fullName }}</span>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <span class="font-weight-black mx-4">Đơn vị:</span>
          <span>{{ this.$store.state.workPlace }}</span>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-icon class="" icon="mdi-timer"></v-icon>
           <span class="mx-2" >Thời gian làm bài:</span>
          <span id="minutes">{{ timerMinuteComputed }}</span>
          <span id="middle">:</span>
          <span id="seconds">{{ timerSecondComputed }}</span>
        </v-col>
      </v-row>
    </v-alert>

    <v-row align="center" justify="center">
      <v-col
        v-for="(i, index) in question"
        :key="index"
        cols="12"
        sm="12"
        md="12"
      >
        <v-card class="mx-auto w-100" variant="outlined">
          <v-card-item>
            <div>
              <div class="text-caption">
                <span>Câu hỏi {{ index + 1 }}:</span> {{ i.content }}
              </div>
            </div>
            <v-radio-group v-model="selectedanswer[index]">
              <v-radio :label="i.answer1" :value="i.answer1"></v-radio>
              <v-radio :label="i.answer2" :value="i.answer2"></v-radio>
              <v-radio v-if="i.answer3" :label="i.answer3" :value="i.answer3"></v-radio>
              <v-radio
                v-if="i.answer4"
                :label="i.answer4"
                :value="i.answer4"
              ></v-radio>
            </v-radio-group>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-btn
          @click="this.submitExam"
          variant="elevated"
          color="primary"
          block
          rounded="0"
          size="x-large"
        >
          <v-icon icon="mdi-check-bold" class="mx-2"></v-icon>Nộp bài</v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-dialog
        v-model="dialog"
        transition="dialog-bottom-transition"
        fullscreen
        style="background"
      >
        <v-card id="congratulations">
          <v-toolbar>
            <v-btn icon="mdi-close" @click="dialog = false"></v-btn>

            <v-toolbar-title>Kết quả bài thi</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                text="Đồng ý"
                variant="text"
                @click="this.$router.push({ path: '/rank-users' })"
              ></v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <h2 style="font-size: 32px" class="text-center mt-2">
            <v-icon icon="mdi-octagram-outline"></v-icon> Chúc mừng bạn đã hoàn
            thành bài kiểm tra <br />
            Số câu trả lời đúng của bạn
          </h2>
          <p style="text-align:center; font-size:100px ; color:green">{{ this.scoresUser }}</p>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>
<script>
import * as questionData from "../../api/exam.js";
export default {
  data() {
    return {
      nameUser: "Trịnh Quang Minh",
      workPlace: "Chi Hội phụ nữ phường Cầu Đất",
      question: "",
      selectedanswer: [],
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      scoresUser: 0,
      usersRank: [],
      totalTime: (30 * 60),
      timerMinute: 1,
      timerSecond: 10,
    };
  },
  mounted() {
    this.getQuestion();
    this.startTimer();
  },
  methods: {
    submitExam: async function () {
      const userSelect = this.selectedanswer;
      this.question.forEach(function (aswerUser, i) {
        aswerUser.userSelected = userSelect[i];
      });
      const scores = await questionData.postExamUser(this.question);
      this.scoresUser = scores.equal;
      this.dialog = true;
      let userResult = {};
      userResult.FullName = this.$store.state.fullName;
      userResult.WorkPlace = this.$store.state.workPlace;
      userResult.NumberCorrect = this.scoresUser;
      userResult.Completion = this.secondsToMinutes(1800 - this.totalTime);
      await questionData.postUserResults(userResult);
    },
    getQuestion: async function () {
      const data = await questionData.getQuestion();
      this.question = data.data;
    },
    goHomePage() {
      this.$router.push({ path: "/" });
    },
    startTimer() {
      this.timer = setInterval(() => this.countdown(), 1000);
    },
    padTime: function (time) {
      return (time < 10 ? "0" : "") + time;
    },
    secondsToMinutes(time){
    return Math.floor(time / 60)+':'+Math.floor(time % 60);
    },
    countdown() {
      if(this.totalTime>0)
      {
       this.totalTime--;
      }
      else
      {
        this.submitExam();
        clearInterval(this.timer);
      }
    },
  },
  computed: {
    timerMinuteComputed: function () {
      return this.padTime(Math.floor(this.totalTime / 60));
    },
    timerSecondComputed: function () {
      return this.padTime(this.totalTime - this.timerMinuteComputed * 60);
    },
  },
};
</script>
<style scoped>
#congratulations {
  background: lightblue url("../../../resource/img/congratulations.png")
    no-repeat center;
  background-size: 100% 100%;
}
#minutes, #seconds
{
  font-size: 20px;
}
</style>
