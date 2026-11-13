<script setup>
import { createBook, getBooks, deleteBook } from "../api/books";
</script>

<script>
export default {
  name: "BooksManager",
  data() {
    return {
      books: [],
      newBook: {
        title: "",
        author: "",
        year: 2000,
      },
    };
  },
  mounted() {
    this.loadBooks();
  },
  methods: {
    async loadBooks() {
      this.books = await getBooks();
    },
    async addBook(book) {
      await createBook(book);
      await this.loadBooks();
    },
    async removeBook(id) {
      await deleteBook(id);
      await this.loadBooks();
    },
    async submitCreateBook() {
      await this.addBook(this.newBook);
    },
  },
};
</script>

<template>
  <main class="">
    <h1 class="">Konyv kezelo rendzser</h1>

    <form
      @submit.prevent="submitCreateBook"
      class="border-2 border-stone-200 p-2 m-2 flex flex-col gap-4"
    >
      <div class="flex flex-col">
        <label for="title">Cim:</label>
        <input
          v-model="newBook.title"
          type="text"
          class="border-2 border-stone-200 p-1"
          name="title"
        />
      </div>

      <div class="flex flex-col">
        <label for="autor">szerzo:</label>
        <input
          v-model="newBook.author"
          type="text"
          class="border-2 border-stone-200 p-1"
          name="author"
        />
      </div>

      <div class="flex flex-col">
        <label for="year">EV:</label>
        <input
          v-model="newBook.year"
          type="number"
          class="border-2 border-stone-200 p-1"
          name="year"
        />
      </div>
      <button
        type="submit"
        class="border-2 border-stone-200 p-2 m-2 flex flex-col gap-4"
      >
        küldes
      </button>
    </form>

    <table class="">
      <thead class="">
        <tr class="">
          <th class="">azonosito</th>
          <th class="">cim</th>
          <th class="">szerzo</th>
          <th class="">ev</th>
          <th class="">muveletek</th>
        </tr>
      </thead>

      <tbody class="">
        <tr v-for="book in books" :key="book.id" class="">
          <td class="">{{ book.id }}</td>
          <td class="">{{ book.title }}</td>
          <td class="">{{ book.author }}</td>
          <td class="">{{ book.year }}</td>
          <td class="">
            <button
              @click="removeBook(book.id)"
              type="button"
              class="my-2 border-2 border-rose-500 p-2 m-2 flex flex-col gap-4"
            >
              torles
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
