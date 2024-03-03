<template>
  <div>
    <button id="upload_widget" @click="this.uploadImg()" class="cloudinary-button">Upload files</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cloudName: "dzh9im6wd",
      uploadPreset: "hpn_app",
      uploadClick : ''
    };
  },
  mounted(){
    this.uploadClick = window.cloudinary.createUploadWidget(
        {
          cloudName: this.cloudName,
          uploadPreset: this.uploadPreset,
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
          }
        }
      );
  },
  methods: {
    uploadImg() {
        this.uploadClick.open();
    },
  },
};
</script>

<style></style>
