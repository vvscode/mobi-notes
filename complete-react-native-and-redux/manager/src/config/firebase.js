import firebase from 'firebase';

export const initFirebase  = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyAiqfw_jDEfhaNDM_ZkPy7nRpdUULQiWCw",
    authDomain: "manager-dd5ea.firebaseapp.com",
    databaseURL: "https://manager-dd5ea.firebaseio.com",
    projectId: "manager-dd5ea",
    storageBucket: "",
    messagingSenderId: "1070481889709"
  });
}