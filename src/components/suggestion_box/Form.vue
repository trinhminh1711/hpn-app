<template>
  <v-container>
    <img
      width="100"
      height="auto"
      src="https://upload.wikimedia.org/wikipedia/vi/d/df/Logo_H%E1%BB%99i_LHPN_Vi%E1%BB%87t_Nam.png"
      alt=""
    />
    <DocumentView />
    <h2 class="px-4">
      <v-icon class="mr-4" icon="mdi-mailbox-up"></v-icon>HÒM THƯ GÓP Ý
    </h2>
    <p style="text-align: justify" class="my-4 px-4">
      Các hội viên thân mến! GPMB luôn là vấn đề nhạy cảm, phức tạp, tác động
      trực tiếp đến đối tượng sử dụng đất, các thành phần kinh tế, đặc biệt là
      đến đời sống của người dân, hộ gia đình. Huyện đã tập trung chỉ đạo đẩy
      mạnh công tác tuyên truyền, vận động Nhân dân chấp hành nghiêm túc các chủ
      trương của Đảng, chính sách pháp luật của Nhà nước trên các lĩnh vực đất
      đai, bồi thường giải phóng mặt bằng. Qua đó, đã góp phần nâng cao nhận
      thức của các cấp, các ngành, cán bộ và Nhân dân, tạo thuận lợi trong quá
      trình triển khai các dự án, bàn giao mặt bằng đúng thời hạn. Kính mong các
      đ/c tích cực đóng góp ý kiến để cùng thảo luận trong buổi sinh hoạt Chi
      Hội.
    </p>
    <v-col>
      <form @submit.prevent="submit">
        <v-text-field
          v-model="phoneNumber"
          label="Số điện thoại liên hệ"
        ></v-text-field>
        <vue-editor v-model="content"></vue-editor>
        <v-btn
          color="#4f545c"
          variant="flat"
          prepend-icon="mdi-export-variant"
          @click="this.uploadImg()"
          class="cloudinary-button my-5"
        >
          Gửi ảnh thực trạng
        </v-btn>
        <div id="preview">
          <img
            style="width: 200px; margin-bottom: 20px"
            v-if="url"
            :src="url"
          />
        </div>
        <v-btn
          class="mx-2 text-none px-10"
          color="blue"
          variant="flat"
          @click="this.handleSubmit"
        >
          Gửi ý kiến
        </v-btn>
      </form>
    </v-col>
    <v-col class="px-4 mt-5">
      <v-card class="mx-auto" color="grey-lighten-3">
        <v-layout>
          <v-app-bar
            color="teal-darken-4"
            image="https://picsum.photos/1920/1080?random"
          >
            <template v-slot:image>
              <v-img
                gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
              ></v-img>
            </template>

            <template v-slot:prepend>
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template>

            <v-app-bar-title>Ý kiến Hội viên đã đóng góp</v-app-bar-title>

            <v-spacer></v-spacer>
          </v-app-bar>

          <v-main>
            <v-container fluid>
              <v-row dense>
                <v-col
                  v-for="(value, key) in feedbackData"
                  :key="key"
                  cols="12"
                >
                  <v-card class="px-5">
                    <h3 class="my-4">Đ/c: {{ value.UserName }}</h3>
                    <p v-html="value.FeedbackContent"></p>
                    <img
                      class="imgfeedback"
                      :src="value.LinkImage"
                      alt=""
                      srcset=""
                    />
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-main>
        </v-layout>
      </v-card>
    </v-col>
    <v-dialog  max-width="600" v-model="thanksDialog">
      <v-card
        max-width="400"
        prepend-icon="mdi-update"
        text="Cảm ơn Hội viên đã gửi góp ý. Ý kiến của Hội viên sẽ được các cơ quan có thẩm quyền trả lời trong buổi sinh hoạt gần nhất."
        title="Cảm ơn vì góp ý"
      >
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Đồng ý"
            variant="flat"
            color="green"
             @click="this.reloadPage()"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import { VueEditor } from "vue3-editor";
import DocumentView from "./DocumentView.vue";
import * as FeedbackApi from "../../api/feedback";
export default {
  data() {
    return {
      url: null,
      feedbackData: [],
      thanksDialog: false,
      phoneNumber: null,
      nameUser: "Trịnh Quang Minh",
      content: "<p>Nội dung góp ý</p>",
      cloudName: "dzh9im6wd",
      uploadPreset: "hpn_app",
    };
  },
  mounted() {
    this.getAllFeedback();
  },
  components: {
    DocumentView,
    VueEditor,
  },
  methods: {
    handleSubmit: async function () {
      this.thanksDialog = true
      let dataForm = {};
      dataForm.FeedbackContent = this.content;
      dataForm.PhoneNumber = this.phoneNumber;
      dataForm.LinkImage = this.url;
      dataForm.UserName = this.$store.state.fullName;
      await FeedbackApi.postFeedbackUser(dataForm);
    },
    uploadImg() {
      const uploadClick = window.cloudinary.createUploadWidget(
        {
          cloudName: this.cloudName,
          uploadPreset: this.uploadPreset,
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            this.url = result.info.url;
            console.log("Done! Here is the image info: ", result.info);
          }
        }
      );
      uploadClick.open();
    },
    getAllFeedback: async function () {
      const dataFeedback = await FeedbackApi.getFeedback();
      this.feedbackData = dataFeedback.data;
    },
    reloadPage() {
      this.thanksDialog = false;
      window.location.reload();
    }
  },
};
</script>
<style scoped>
#preview {
  display: flex;
}
.imgfeedback {
  width: 400px;
  height: auto;
  display: block;
  margin: 0 auto;
}
.v-card-item {
  padding: 0 !important;
}
</style>
