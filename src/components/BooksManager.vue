<script setup>

import {getBooks} from "../api/books";

</script>


<script>
    export default {
    name: "BooksManager",
    data(){
        return{
            books:[],
        }
    },
    mounted(){
        this.loadBooks();
    },
    methods:{
        async loadBooks(){
            this.books = await getBooks();
        }
    }
}
</script>

<template>
    <main class="">
        <h1 class="">Konyv kezelo rendzser</h1>
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
            <tbody  class="">
                <tr v-for="book in books" :key="book.id" class="">
                    <td class="">{{book.id}}</td>
                    <td class="">{{book.title}}</td>
                    <td class="">{{book.author}}</td>
                    <td class="">{{book.year}}</td>
                    <td class="">-</td>

                </tr>

            </tbody>
        </table>
    </main>
</template>