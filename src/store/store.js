import { createStore } from 'vuex'
import { mapState } from 'vuex'
import axios from 'axios'

const store = createStore({
  state() {
    return {
      screenComponest:"ClassHome",
      books:  require('./list.json').datas,
      word:  require('./wordlist.json').datas
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions:{
    getCourse(state,{bookId,num}){
      console.log(`book ${bookId} - ${num}`)
      /*axios.get('http://rw.ylapi.cn/reciteword/wordlist.u?uid=11936&appkey=43d5fb26627c965d3d976647f0d56aa6&class_id=250815&course=1').then((response) => {
       console.log(response)
        this.state.course = response.data.datas
      })*/
    },
    getData(){
      axios.get("http://www.baidu.com")
     /*axios.get('http://rw.ylapi.cn/reciteword/list.u?uid=11936&appkey=43d5fb26627c965d3d976647f0d56aa6').then((response) => {
       console.log(response)
        this.state.books = response.data.datas
      })*/
      let i=0;
      this.state.books.forEach(course =>{
        i += parseInt(course.course_num);
      })
      console.log(i)
    },
    changeScreen(state,screen){
      this.state.screenComponest = screen;
    }
  },
  computed: mapState({
    // arrow functions can make the code very succinct!
    book: state => state.books,
    word: state => state.word,
    // passing the string value 'count' is same as `state => state.count`
    bookAlias: 'books',
    wordAlias: 'word',

    // to access local state with `this`, a normal function must be used
    booktPlusLocalState (state) {
      return state.books + this.localbooks
    }
  })
})

export default store;