import { initializeApp } from 'firebase/app';
import {getFirebaseConfig} from './firebase-config.js';
import {getDatabase, ref, set, onValue, push} from "firebase/database";

import { bookCard } from "./book.js";

//Inicializar firebase
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);
const db = getDatabase();

//Elementos
const bookList = document.getElementById("bookList");

//tomar database
function getBooks()
{
    const dbRef = ref(db, 'books/');

    onValue(dbRef, (snapshot) =>
    {
        const data = snapshot.val();
        Books(data);
    });
}

//dibujar la tarjeta
function Books(data)
{
    if(data)
    {
        bookList.innerHTML = "";
        Object.keys(data).forEach((key, index) =>{
            const book = new bookCard(data[key]);  
            bookList.appendChild(book.draw());
        });
    }
}


getBooks();

