import { productsDB } from "./client";
import firebase from "firebase/app";

export const importProducts = () => {
  let items = [
    {
      category: "5F5QRi9gehs36vl8xTB2",
      description: "Zapato de trabajo.",
      img: "./images/placeholder-images-product-5_large.png",
      price: 5300,
      stock: 30,
      title: "Zapato",
    },
    {
      category: "5F5QRi9gehs36vl8xTB2",
      description: "Zapatilla Nike Air",
      img: "./images/placeholder-images-product-5_large.png",
      price: 3300,
      stock: 30,
      title: "Zapatilla Nike",
    },
  ];

  items.forEach(function (obj) {
    productsDB.add({
      category: obj.category,
      description: obj.description,
      img: obj.img,
      price: obj.price,
      stock: obj.stock,
      title: obj.title,
      ts_created: firebase.firestore.Timestamp.fromDate(new Date()),
    });
  });
};
