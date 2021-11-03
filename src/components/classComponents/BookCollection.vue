<template>
  <div class="book-box w-100 pt-3">
    <div class="card">
      <div class="card-header">{{ book.title }}</div>
      <div class="card-body">
        <blockquote
          class="blockquote mb-0 d-flex flex-wrap justify-content-evenly"
        >
          <Book
            v-for="(child, index) in book.child_list"
            :key="index"
            :child="child"
          />
        </blockquote>
        <footer class="footer">
          books {{ book.book_num }} - Word {{ book.word_num }}
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Book from "./Book";

export default {
  props: {
    book: Object,
  },
  components: {
    Book,
  },
};
</script>

<style>
</style>