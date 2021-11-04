<template>
  <div class="card border-dark mb-3 w-100" style="max-width: 18rem">
    <div class="card-header">{{ child.title }}</div>
    <div class="card-body text-dark">
      <div class="course_selector">
        <ul class="scrollbar scrollbar-near-moon thin">
          <li
            v-for="(item, index) in courseSelector"
            :key="index"
            @click="select(item)"
          >
            {{ item.text }}
          </li>
        </ul>
      </div>
      <div class="course_class" v-for="n in pages" :key="n">
        <div
          class="class_item card border-dark mb-3"
          @click="go_learn(this.init + n)"
        >
          {{ this.init + n }}
        </div>
      </div>
    </div>
    <footer class="blockquote-footer">
      <span>word {{ child.word_num }}</span>
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      init: 0,
      pages:
        parseInt(this.child.course_num) < 20
          ? parseInt(this.child.course_num)
          : 20,
      courseSelector: [],
    };
  },
  props: {
    child: Object,
  },
  created() {
    for (let i = 0; i < parseInt(this.child.course_num); i += 20) {
      if (parseInt(this.child.course_num) - i < 20) {
        this.courseSelector.push({
          index: i,
          pages: parseInt(this.child.course_num) - i,
          text: `${i + 1}-${parseInt(this.child.course_num)}`,
        });
      } else {
        this.courseSelector.push({
          index: i,
          pages: 20,
          text: `${i + 1}-${i + 20}`,
        });
      }
    }
  },
  computed: mapState([
    // map this.count to store.state.count
    "courses",
  ]),
  methods: {
    select(item) {
      this.init = item.index;
      this.pages = item.pages;
    },
    go_learn(index) {
      this.$store.dispatch("getCourse",{
        bookId:this.child.class_id,
        num:index
      });
      this.$store.dispatch("changeScreen",["LearnScreen",this.child.title],)
    },
  },
};
</script>

<style lang="scss" scoped>
.card-body {
  min-height: 340px;
}
.course_class {
  display: inline-block;
}
.class_item {
  margin: 5px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.class_item:hover {
  background-color: gray;
}
.course_selector {
  ul {
    padding: 0;
    margin-left: 3px;
    display: flex;
    overflow-x: scroll;
    background-color: ghostwhite;
    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 2px grey;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: rgb(0, 167, 233);
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: rgb(0, 111, 155);
    }
    li {
      list-style: none;
      white-space: nowrap;
      margin-right: 10px;
    }
    li:hover {
      background-color: gray;
      cursor: pointer;
    }
  }
}
</style>