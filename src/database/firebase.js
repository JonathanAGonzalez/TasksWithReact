import firebase from "firebase/app";
import "firebase/firestore";

// CONFIGURACION DE LA BASE DE DATOS EN FIREBASE
const firebaseConfig = {};

// INICIALIZAMOS LA BASE DE FIREBASE CON EL METODO INITIALIZEAPP Y LE PASAMOS LA CONFIG
firebase.initializeApp(firebaseConfig);

export default firebase;
