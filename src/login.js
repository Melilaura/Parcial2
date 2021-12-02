import { initializeApp } from 'firebase/app';
import {getFirebaseConfig} from './firebase-config.js';
import {getDatabase, ref, set, onValue, push} from "firebase/database";
import {getAuth, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword} from 'firebase/auth';

//alert("hello hello");

//Inicializar firebase
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);
const auth = getAuth();

//Elementos
const email = document.getElementById("emailText");
const password = document.getElementById("passwordText");
const loginBtn = document.getElementById("loginButton");

//Ingresar
function login (e, event){
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredentials) => {
        
        
        window.location.href = "index.html";
    })
    .catch((error) => {
        console.log(error.message);
        alert("Email o contraseña invalidos, intente denuevo");
    });
}

loginBtn.addEventListener("click", login);

