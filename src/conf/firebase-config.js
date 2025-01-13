import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCCISbxumxUVpPk-9xaN654X8qXkRjnAzQ",
    authDomain: "auth-2d153.firebaseapp.com",
    projectId: "auth-2d153",
    storageBucket: "auth-2d153.firebasestorage.app",
    messagingSenderId: "475914428536",
    appId: "1:475914428536:web:e92754fbd33ebbb3e04d8d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
