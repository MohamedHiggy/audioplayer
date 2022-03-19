<template>
  <div class="video-page">
    <div class="video-top-header mb-5">
      <button v-if="!is_recording"
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
          <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
          Loading...
        </span>
        <span v-if="startRecord && !isLoading">Cancel</span>
      </button>
      <button v-if="cameraOpen && !is_recording"
        class="start-record-btn btn-info btn"
        @click="startRecording">
        Start
      </button>
      <div class="btn btn-primary" v-if="is_recording">
        <span class="badge badge-light"> 50 sec </span>
      </div>
      <button class="btn-info btn" @click="stopRecording" v-if="is_recording">
        <span>Stop Record</span>
      </button>
    </div>

    <div class="video-content" v-if="startRecord">
      <video ref="camera" autoplay :width="100" :height="100" muted></video>
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
      video_src: null,
      seconds: 0,
      seconds_interval: null,
      is_recording: false
    };
  },
  beforeDestroy() {
    this.stopCameraStream()
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

      navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
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
    startRecording() {
      this.is_recording = true
      this.video_src = null;
      this.seconds = 0;
      this.supported_types = [];
      const constraints = (window.constraints = {
        audio: true,
        video: true,
      });
      const VIDEO_TYPES = ["webm", "ogg", "mp4", "x-matroska"];
      const VIDEO_CODECS = [
        "vp9",
        "vp9.0",
        "vp8",
        "vp8.0",
        "avc1",
        "av1",
        "h265",
        "h.265",
        "h264",
        "h.264",
        "opus",
      ];
      VIDEO_TYPES.forEach((videoType) => {
        const type = `video/${videoType}`;
        VIDEO_CODECS.forEach((codec) => {
          const variations = [
            `${type};codecs=${codec}`,
            `${type};codecs:${codec}`,
            `${type};codecs=${codec.toUpperCase()}`,
            `${type};codecs:${codec.toUpperCase()}`,
            `${type}`,
          ];
          variations.forEach((variation) => {
            if (MediaRecorder.isTypeSupported(variation))
              this.supported_types.push(variation);
          });
        });
      });

      navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
          let mediaRecorder = new MediaRecorder(stream, {
            mimeType: MediaRecorder.isTypeSupported("video/mp4;codecs=h264")
              ? "video/mp4;codecs=h264"
              : this.supported_types[0],
          });

          mediaRecorder.start(1000);
          this.$refs.camera.srcObject = stream;

          let chunksArr = [];
          mediaRecorder.ondataavailable = function (blob) {
            chunksArr.push(blob.data);
          };
          this.chunks = chunksArr;

          this.seconds_interval = setInterval(() => {
            if (this.seconds >= 15) {
              this.is_min_seconds = true;
            }
            this.seconds += 1;
          }, 1000);

        })
        .catch((error) => {
          console.log(error);
        });
    },
    stopRecording() {
      this.is_recording = false
      this.startRecord = false
      clearInterval(this.seconds_interval);
      this.stopCameraStream()
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
