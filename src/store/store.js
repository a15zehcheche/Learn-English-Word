import { createStore } from 'vuex'
import { mapState } from 'vuex'
import axios from 'axios'

const store = createStore({
  state() {
    return {
      courses:  require('./list.json').datas
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions:{
    getData(){
      axios.get("http://www.baidu.com")
     /*axios.get('http://rw.ylapi.cn/reciteword/list.u?uid=11936&appkey=43d5fb26627c965d3d976647f0d56aa6').then((response) => {
       console.log(response)
        this.state.courses = response.data.datas
      })*/
      let i=0;
      this.state.courses.forEach(course =>{
        i += parseInt(course.course_num);
      })
      console.log(i)
      
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