var firebaseConfig = {
    apiKey: "AIzaSyBgPFH9a_S7JBCGbJ_hXndfrTgbHfrRQPs",
    authDomain: "cursodevweb-8e8c5.firebaseapp.com",
    projectId: "cursodevweb-8e8c5",
    storageBucket: "cursodevweb-8e8c5.appspot.com",
    messagingSenderId: "494286336014",
    appId: "1:494286336014:web:7a0398a7a6ac900953cc5f",
    measurementId: "G-GWRC1GQ0S5"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

// reference to root folder
// const ref = storage.ref();

// reference to pasta photos
const ref = storage.ref('/fotos');

ref.listAll().then(res => {

   res.items[0].getDownloadURL().then(url => {
       console.log(url)
   })

})