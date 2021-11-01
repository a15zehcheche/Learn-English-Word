import { createStore } from 'vuex'
import { mapState } from 'vuex'

const store = createStore({
  state() {
    return {
      courses: [
        {
          child_list: [
            {
              class_id: "250815",
              word_num: "345",
              title: "新初中人教版 八年级上",
              course_num: "18"
            },
            {
              class_id: "358176",
              word_num: "492",
              title: "新初中人教版 八年级下",
              course_num: "25"
            }
          ],
          word_num: "837",
          title: "新初中人教版",
          course_num: "43"
        },
        {
          child_list: [
            {
              class_id: "136000",
              word_num: "200",
              title: "BEC高级",
              course_num: "10"
            },
            {
              class_id: "630791",
              word_num: "929",
              title: "BEC中级",
              course_num: "47"
            }
          ],
          word_num: "1129",
          title: "BEC商务英语",
          course_num: "57"
        }
      ]
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  computed: mapState({
    // arrow functions can make the code very succinct!
    course: state => state.courses,
    // passing the string value 'count' is same as `state => state.count`
    courseAlias: 'courses',

    // to access local state with `this`, a normal function must be used
    coursetPlusLocalState (state) {
      return state.courses + this.localCourses
    }
  })
})

export default store;