<template>
  <div class="container-fluid">
    <nav
      class="
        navbar navbar-expand-lg navbar-light
        bg-light
        d-flex
        justify-content-center
      "
    >
      <form class="d-flex search-form">
        <input class="form-control me-2" type="search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </nav>
    <div v-if="books" class="container-fluid">
      <BookCollection
        class="book-box w-100 pt-5"
        v-for="(book, index) in books"
        :key="index"
        :book="book"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BookCollection from "../components/classComponents/BookCollection.vue"

export default {
  name: "HelloWorld",
   components: {
    BookCollection
  },
  props: {},
  mounted() {},
  methods: {},
  computed: mapState([
    // map this.count to store.state.count
    "books",
  ]),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  margin-right: var(--bs-gutter-x, -0.75rem);
  margin-left: var(--bs-gutter-x, -0.75rem);
}

.search-form {
  width: 100%;
  padding-right: 2.75em;
  padding-left: 2.75em;
}

.card {
  height: 100%;
}

</style>
