<template>
  <div class="video-page">
    <div class="video-top-header mb-5">
      <button
        class="btn"
        :class="{
          'btn-danger': startRecord && !isLoading,
          'btn-info': !startRecord && !isLoading,
          'btn-primary': startRecord && isLoading,
        }"
        @click.prevent="toggleVideoRecord"
        :disabled="isLoading"
      >
        <span v-if="!startRecord && !isLoading">Start Record Video</span>
        <span v-if="startRecord && isLoading">
          <span
            class="spinner-grow spinner-grow-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </span>
        <span v-if="startRecord && !isLoading">Cancel</span>
      </button>

      <button v-if="cameraOpen" class="start-record-btn btn-info btn">
        Start
      </button>

    </div>

    <div class="video-content" v-if="startRecord">
      <video ref="camera" autoplay :width="100" :height="100"></video>
    </div>

  </div>
</template>

<script>
export default {
  layout: "videoLayout",
  data() {
    return {
      startRecord: false,
      isLoading: false,
      cameraOpen: false,
    };
  },
  methods: {
    toggleVideoRecord() {
      if (this.startRecord) {
        this.startRecord = false;
        this.stopCameraStream();
      } else {
        this.startRecord = true;
        this.createCameraElement();
      }
    },
    createCameraElement() {
      this.isLoading = true;

      const constraints = (window.constraints = {
        audio: true,
        video: true,
      });

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          this.isLoading = false;
          this.cameraOpen = true;
          this.$refs.camera.srcObject = stream;
        })
        .catch((error) => {
          this.startRecord = false;
          this.isLoading = false;
          alert("May the browser didn't support or there is some errors.");
        });
    },
    stopCameraStream() {
      this.cameraOpen = false
      if (this.$refs.camera && this.$refs.camera.srcObject) {
        this.$refs.camera.srcObject.getTracks().forEach(function (track) {
          track.stop();
        });
      }
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
