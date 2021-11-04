import { createStore } from 'vuex'
import { mapState } from 'vuex'
import axios from 'axios'
import {apiList,apiWordList} from "../const"

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
     /* axios.get(`${apiWordList(bookId,num)}`).then((response) => {
       console.log(response)
        this.state.word = response.data.datas
      })*/
    },
    getData(){
      axios.get("http://www.baidu.com")
     /*axios.get(`apiList()`).then((response) => {
       console.log(response)
        this.state.books = response.data.datas
      })*/
      let i=0;
      this.state.books.forEach(course =>{
        i += parseInt(course.course_num);
      })
      console.log(i)
      console.log(apiWordList(12322,1))
      console.log(apiList())
    
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