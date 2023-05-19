
import {initializeApp} from 'firebase/app';
import { getStorage, getDownloadURL, ref } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCUhbcP6MawvBRJoccg6AAdEhhYgSwS7ig",
    authDomain: "furniture-shop-3c925.firebaseapp.com",
    projectId: "furniture-shop-3c925",
    storageBucket: "furniture-shop-3c925.appspot.com",
    messagingSenderId: "540402071639",
    appId: "1:540402071639:web:37b42f1694c7b5b9710b12"
};


initializeApp(firebaseConfig);
const storage = getStorage();

export const getFurnitureImage = (id) => getDownloadURL(ref(storage, `furnitures/${id}`));