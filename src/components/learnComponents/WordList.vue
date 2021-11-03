<template>
  <div>
      <div v-for="n in word" :key="n" class="d-flex justify-content-evenly">
          <div class="w-50">{{n.name}}</div>
          <div class="w-50">{{n.desc}}</div>
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
}
</script>

<style>

</style>