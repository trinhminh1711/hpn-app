<template>
  <div class="mb-5">
  <v-alert
      type="success"
      variant="outlined"
      class="my-5"
    >
        Văn bản đã ban hành
    </v-alert>
    <!-- <PDFViewer
      :source = "'../../../resource/chithi05.pdf'"
      style="height: 90vh; width: 85vw"
      crossorigin="anonymous"
    /> -->
  </div>
</template>

<script>
//import PDFViewer from 'pdf-viewer-vue'
// OR THE FOLLOWING IMPORT FOR VUE 2
// import PDFViewer from 'pdf-viewer-vue/dist/vue2-pdf-viewer'
export default {
  components: {
    // PDFViewer,
  },

  data() {
    return {
     
      url: '',
      base64: '<BASE64_ENCODED_PDF>',
    }
  },
}
</script>