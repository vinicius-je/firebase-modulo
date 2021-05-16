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
const ref = storage.ref('/fotos/leon-ell-f6HbVnGtNnY-unsplash.jpg');

// back to root folder
ref.root.listAll().then(res => {
    console.log(res)
});

// reference to the sibling file in the root folder
// ref.parent.child("profile.jpg").getDownloadURL().then(url => { console.log(url)});

// reference to the file inside the photo folder
// const fileRef = ref.child("leon-ell-f6HbVnGtNnY-unsplash.jpg")
// fileRef.getDownloadURL().then(url => { console.log(url)})

// const fileParent = fileRef.parent;

// fileParent.listAll().then(res => {
//     console.log(res)
//  })

// ref.listAll().then(res => {
//    res.items[0].getDownloadURL().then(url => {
//        console.log(url)
//    })
// })