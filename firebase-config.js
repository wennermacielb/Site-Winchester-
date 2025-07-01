// firebase/firebase-config.js
import { initializeApp } from "firebase/app"; // Importa a função para inicializar o app
import { getAuth } from "firebase/auth";     // Importa a função para obter o serviço de autenticação

// Suas configurações do projeto Firebase (já preenchidas com as suas!)
const firebaseConfig = {
  apiKey: "AIzaSyBg_-98uviA44w5vg_5kH08pOeE3wDFC44",
  authDomain: "siteempregosdiarias.firebaseapp.com",
  projectId: "siteempregosdiarias",
  storageBucket: "siteempregosdiarias.firebasestorage.app",
  messagingSenderId: "1026762800780",
  appId: "1:1026762800780:web:3852a4116d3f849cf785a9"
};

// Inicializa o seu aplicativo Firebase
const app = initializeApp(firebaseConfig);

// Obtém a instância de autenticação para ser usada em outras partes do seu código
export const auth = getAuth(app);
