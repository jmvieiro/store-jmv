import firebase from "firebase/app";
import "@firebase/firestore";
//import "@firebase/storage";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDstNqfY0ONuhZTux27lTPwdSt0lOGCdNo",
    authDomain: "store-jmv.firebaseapp.com",
    projectId: "store-jmv",
    storageBucket: "store-jmv.appspot.com",
    messagingSenderId: "907971436997",
    appId: "1:907971436997:web:53c5fa1409e0b61277ebac"
  });

export const getFirebase =() =>{
  // Initialize Firebase
  return firebaseConfig;
}

//Funciones de firebase
// export const getFirestore = () => {
//   return firebase.firestore(firebaseConfig);
// }

// export const getStorage = () => {
//   return firebase.storage()
// }


export const productsDB = firebase.firestore(firebaseConfig).collection("products");
export const categoriesDB = firebase.firestore(firebaseConfig).collection("categories");
