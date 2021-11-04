<template>
  <div>
    <div class="word-box">
      <template v-for="(n,index) in word" :key="n">
        <div class="chines-word">{{ n.name }}</div>
        <div class="">--------</div>
        <div class="english-word">
          {{ n.desc
          }}<audio :id="`sound`+index" >
            <source :src="n.sound" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <button @click="playSound(index)">Play</button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState([
    // map this.count to store.state.count
    "word",
  ]),
  methods:{
    playSound(id){
      document.getElementById("sound"+id).play();
    }
  }
};
</script>

<style>
.word-box {
  display: grid;
  grid-template-columns: auto 50px auto;
}
.chines-word {
  justify-self: end;
}
.english-word {
  justify-self: start;
}
</style>