<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-center pb-5">
      <div class="position-absolute start-0"><button @click="to_home">back</button></div>

      <h1>list title</h1>
      <div class="position-absolute end-0"><Clock /></div>
    </div>
    <div class="d-flex justify-content-center"><button>learn</button>/<button>review</button></div>
  </div>
  <div>
      <WordList/>
  </div>
</template>

<script>
import clock from "./learnComponents/Clock.vue";
import wordList from "./learnComponents/WordList.vue";

export default {
  components: {
    Clock: clock,
    WordList: wordList,
  },
  methods: {
    to_home() {
      this.$store.dispatch("changeScreen", "ClassHome");
    },
  },
};
</script>

<style>
</style>