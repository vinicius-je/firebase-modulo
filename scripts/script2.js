var firebaseConfig = {
    apiKey: "AIzaSyAikw2NQl--YoSXEjhiBSpuePjaqsasdasdasd78P70",
    authDomain: "teste.firebaseapp.com",
    projectId: "teste",
    storageBucket: "teste.appspot.com",
    messagingSenderId: "986087836346",
    appId: "1:986087836346:web:b993fada61ddd2bc7asdasdasd09083",
    measurementId: "G-825EMHasdasdasd57XH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

let auth = firebase.auth();

function createUser(){

    let newUserEmail = "novoteste@teste.com";
    let newUserPwd = "123abc";

    auth.createUserWithEmailAndPassword(newUserEmail, newUserPwd).then(user=>{
        console.log(user);
    }).catch(err=>{
        console.log(err);
    })

}

function login(){

    let userEmail = "novoteste@teste.com";
    let userPwd = "123abc";

    auth.setPersistence(firebase.auth.Auth.Persistence.NONE).then(() => {
        auth.signInWithEmailAndPassword(userEmail, userPwd)
        .then(loggedUser => {
            console.log(auth.currentUser);
        }).catch(err => {
            console.log(err);
        })
    }).catch(err => {
        console.log(err);
    })

}

auth.onAuthStateChanged(user => {
    if(user){
        console.log(user);
    }else{
        console.log("Ninguém logado");
    }
})

function logout(){

    auth.signOut()
    .then(() => {
        console.log("Usuário foi deslogado")
    }).catch(err => {
        console.log(err);
    })
}

// Sessão do usuário

function read(){

    db.collection("lista").get().then(snapshot => {
        snapshot.forEach(item => {
            console.log(item.data());
        })
    }).catch(err => {
        console.log(err);   
    })

}

function write(){

    db.collection("lista").add({
        title: "Novo Objeto",
        numero: Math.random()
    }).then(doc => {
        console.log(doc)
    }).catch(err => {
        console.log(err);
    })
    
}

function login(){

    let userEmail = "teste@email.com";
    let userPwd = "123abc";

    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
        auth.signInWithEmailAndPassword(userEmail, userPwd)
        .then(loggedUser => {
            console.log(loggedUser);
            write();
        }).catch(err => {
            console.log(err);
        })
    }).catch(err => {
        console.log(err);
    })

}

login();
ler();


