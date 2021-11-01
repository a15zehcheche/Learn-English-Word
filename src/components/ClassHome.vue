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
    <div v-if="courses" class="container-fluid pt-5">
      <div
        class="course-box w-100"
        v-for="(course, index) in courses"
        :key="index"
      >
        <div class="card">
          <div class="card-header">{{ course.title }}</div>
          <div class="card-body">
            <blockquote class="blockquote mb-0 d-flex justify-content-around">
              <div
                v-for="(child, index) in course.child_list"
                :key="index"
                class="card border-dark mb-3 w-100"
                style="max-width: 18rem"
              >
                <div class="card-header">{{ child.title }}</div>
                <div class="card-body text-dark">
                  <div
                    class="course_class"
                    v-for="n in parseInt(child.course_num)"
                    :key="n"
                  >
                    <div class="class_item card border-dark mb-3">
                      {{ n }}
                    </div>
                  </div>
                </div>
                <footer class="blockquote-footer">
                  <span>word {{ child.word_num }}</span>
                </footer>
              </div>
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

export default {
  name: "HelloWorld",
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
.course_class{
  display: inline-block;
}
.class_item {
  height: 40px;
  width: 40px;
}
</style>
