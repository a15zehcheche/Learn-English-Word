<template>
  <div class="d-flex justify-content-center">{{ minute }}:{{ second }}</div>
  <div class="d-flex">
    <div v-if="this.time != 0">
      <button v-if="clockStatus" @click="startTime()">start</button
      ><button v-else @click="stopTime()">stop</button>
    </div>
    <button @click="restartTime()">restart</button>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      interval: null,
      time: 5 * 60,
      clockStatus: true,
    };
  },
  mounted() {
    this.startTime();
    this.clockStatus = false;
  },
  methods: {
    startTime() {
      this.clockStatus = !this.clockStatus;
      this.interval = setInterval(() => {
        this.time -= 1;
        if (this.time == 0) {
          clearInterval(this.interval);
          this.clockStatus = !this.clockStatus;
        }
      }, 1000);
    },
    stopTime() {
      clearInterval(this.interval);
      this.clockStatus = !this.clockStatus;
    },
    restartTime() {
      this.time = 5 * 60;
      if (this.time == 0) {
        this.time = 5 * 60;
      }
      if (this.clockStatus) {
        this.startTime();
      }
    },
  },
  computed: {
    minute() {
      return String(parseInt(this.time / 60, 10)).padStart(2, "0");
    },
    second() {
      return String(this.time % 60).padStart(2, "0");
    },
  },
};
</script>

<style>
</style>