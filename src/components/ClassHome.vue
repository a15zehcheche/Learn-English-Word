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
    <div v-if="courses" class="container-fluid">
      <div
        class="course-box w-100 pt-5"
        v-for="(course, index) in courses"
        :key="index"
      >
        <div class="card">
          <div class="card-header">{{ course.title }}</div>
          <div class="card-body">
            <blockquote
              class="blockquote mb-0 d-flex flex-wrap justify-content-evenly"
            >
              <Book v-for="(child, index) in course.child_list" :key="index" :child="child" />
            </blockquote>
            <footer class="footer">
              Courses {{ course.course_num }} - Word {{ course.word_num }}
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Book from "../components/classComponents/Book"

export default {
  name: "HelloWorld",
   components: {
    Book
  },
  props: {},
  mounted() {},
  methods: {},
  computed: mapState([
    // map this.count to store.state.count
    "courses",
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
