import firebase from "firebase/app";
import "@firebase/firestore";
import { toast } from "react-toastify";
//import "@firebase/storage";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDstNqfY0ONuhZTux27lTPwdSt0lOGCdNo",
  authDomain: "store-jmv.firebaseapp.com",
  projectId: "store-jmv",
  storageBucket: "store-jmv.appspot.com",
  messagingSenderId: "907971436997",
  appId: "1:907971436997:web:53c5fa1409e0b61277ebac",
});

export const getFirebase = () => {
  // Initialize Firebase
  return firebaseConfig;
};

//Funciones de firebase
// export const getFirestore = () => {
//   return firebase.firestore(firebaseConfig);
// }

// export const getStorage = () => {
//   return firebase.storage()
// }

export const productsDB = firebase
  .firestore(firebaseConfig)
  .collection("products");
const categoriesDB = firebase
  .firestore(firebaseConfig)
  .collection("categories");
const ordersDB = firebase.firestore(firebaseConfig).collection("orders");

export const getCategories = () => {
  return categoriesDB
    .get()
    .then((response) => {
      return response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
    })
    .catch((res) => {
      let error = `😱 Ha ocurrido un error al obtener las categorías: ${res}`;
      toast.error(error);
      console.log(error);
      return [];
    });
};

export const getProducts = () => {
  return productsDB
    .where("stock", ">", 0)
    .get()
    .then((response) => {
      return response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
    })
    .catch((res) => {
      let error = `😱 Ha ocurrido un error al obtener los productos: ${res}`;
      toast.error(error);
      console.log(error);
      return [];
    });
};

export const getProductById = (id) => {
  return productsDB
    .doc(id)
    .get()
    .then((response) => {
      if (!response.exists) return null;
      return { id: response.id, ...response.data() };
    })
    .catch((res) => {
      let error = `😱 Ha ocurrido un error al obtener el producto por id: ${res}`;
      toast.error(error);
      console.log(error);
      return {};
    });
};

export const getProductsByCategory = (id) => {
  return productsDB
    .where("category", "==", id)
    .get()
    .then((response) => {
      return response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
    })
    .catch((res) => {
      let error = `😱 Ha ocurrido un error al obtener los productos por categoría: ${res}`;
      toast.error(error);
      console.log(error);
      return [];
    });
};

export const getCategoryById = (id) => {
  return categoriesDB
    .doc(id)
    .get()
    .then((response) => {
      if (!response.exists) return null;
      return { id: response.id, ...response.data() };
    })
    .catch((res) => {
      let error = `😱 Ha ocurrido un error al obtener la categoría por id: ${res}`;
      toast.error(error);
      console.log(error);
      return {};
    });
};

const generateOrder = (order) => {
  ordersDB
    .add(order)
    .then(({ id }) => {
      toast.success(`😎 La orden #${id} ha sido generada con éxito.`, {
        autoClose: 10000,
        closeOnClick: true,
        pauseOnHover: true,
      });
    })
    .catch((res) => {
      let error = `😱 Ha ocurrido un error al generar la orden: ${res}`;
      toast.error(error);
      console.log(error);
      return {};
    });
};

export const updateStock = async (newOrder) => {
  const db = firebase.firestore(firebaseConfig);

  const productsToUpdate = db.collection("products").where(
    firebase.firestore.FieldPath.documentId(),
    "in",
    newOrder.detail.map((element) => element.idProduct)
  );

  const query = await productsToUpdate.get();
  const batch = db.batch();
  const outOfStock = [];

  query.docs.forEach((docSnapshot, index) => {
    if (docSnapshot.data().stock >= newOrder.detail[index].qty) {
      batch.update(docSnapshot.ref, {
        stock: docSnapshot.data().stock - newOrder.detail[index].qty,
      });
    } else outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
  });

  if (outOfStock.length === 0) {
    await batch.commit();
    generateOrder(newOrder);
    return "ok";
  } else {
    let aux = outOfStock
      .map((element) => {
        return element.title;
      })
      .join(", ");
    let error = `😱 Alguno de los productos seleccionados no tienen stock: ${aux}.`;
    toast.error(error, {
      autoClose: false,
    });
    console.log(error);
    return "error";
  }
};
