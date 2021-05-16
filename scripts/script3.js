// var firebaseConfig = {
//     apiKey: "AIzaSyBgPFH9a_S7JBCGbJ_hXndfrTgbHfrRQPs",
//     authDomain: "cursodevweb-8e8c5.firebaseapp.com",
//     projectId: "cursodevweb-8e8c5",
//     storageBucket: "cursodevweb-8e8c5.appspot.com",
//     messagingSenderId: "494286336014",
//     appId: "1:494286336014:web:7a0398a7a6ac900953cc5f",
//     measurementId: "G-GWRC1GQ0S5"
// };

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

// reference to root folder
const ref = storage.ref();

// reference to pasta photos
// const ref = storage.ref('/fotos/leon-ell-f6HbVnGtNnY-unsplash.jpg');

// back to root folder
ref.root.listAll().then(res => {
    console.log(res)
});

// reference to the sibling file in the root folder
ref.parent.child("profile.jpg").getDownloadURL().then(url => { console.log(url)});

// reference to the file inside the photo folder
const fileRef = ref.child("leon-ell-f6HbVnGtNnY-unsplash.jpg")
fileRef.getDownloadURL().then(url => { console.log(url)})

const fileParent = fileRef.parent;

fileParent.listAll().then(res => {
    console.log(res)
 })

ref.listAll().then(res => {
   res.items[0].getDownloadURL().then(url => {
       console.log(url)
   })
})

// Upload
const ref = storage.ref('/fotos');

// Upload by input
const fileInput = document.getElementById("fileInput");

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    ref.child(file.name).put(file).then((snapshot) => {
        console.log(snapshot)
    });
})

//Metadata
// new metadata format
const newMetaDate = {
    contentType: 'image/jpeg'
}

// get metadata
ref.child('Foto.jpg').getMetadata().then(metaData => {
    console.log(metaData);
}).catch(error => console.log(error))

ref.child('Foto.jpg').updateMetadata(newMetaDate).then(metaData => {
    console.log(metaData);
}).catch(error => console.log(error))

// add file in base64 format to the database
ref.child('Foto.jpg').putString(fileBase64, "base64").then((snapshot) => {
    console.log(snapshot)
})



