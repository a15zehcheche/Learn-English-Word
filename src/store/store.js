import { createStore } from 'vuex'
import { mapState } from 'vuex'
import axios from 'axios'

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
              course_num: "200"
            },
            {
              class_id: "358176",
              word_num: "492",
              title: "新初中人教版 八年级下",
              course_num: "25"
            },
            {
              class_id: "358176",
              word_num: "492",
              title: "新初中人教版 八年级下",
              course_num: "15"
            },
            {
              class_id: "358176",
              word_num: "492",
              title: "新初中人教版 八年级下",
              course_num: "30"
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
  actions:{
    getData(){
      axios.get("google.com")
     /*axios.get('http://rw.ylapi.cn/reciteword/list.u?uid=11936&appkey=43d5fb26627c965d3d976647f0d56aa6').then((response) => {
       console.log(response)
        this.state.courses = response.data.datas
      })*/
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