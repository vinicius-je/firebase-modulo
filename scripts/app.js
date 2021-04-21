/* var firebaseConfig = {
    apiKey: "AIzaSyCOiSZ9nD_7J3y8FvB4sFweIQCanSgIjTU",
    authDomain: "colegio.firebaseapp.com",
    projectId: "colegio",
    storageBucket: "colegio.appspot.com",
    messagingSenderId: "9123123123123146421312342144423339asdasdasd15924",
    appId: "1:9124124241246412312412124343915123123132924:web:3ee91241412fsa112961c1cf702aade81",
    measurementId: "A-V123123G33222WE21237B1233P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const TURMA = "turmaA";

let db = firebase.firestore(); */

// Ler todos os dados de uma coleção
db.collection("turmaA").get()
    .then((snapshot) => {
        snapshot.forEach((doc)=>{
            let aluno = doc.data();
            console.log(aluno.nome);
        })
    })



// Ler dados específicos
let docRef = db.collection("turmaA").doc("k83XWe7D3I6gP2JDCUGo")

docRef.get().then((doc) => {
    console.log(doc.data());
})


//Selecionar dados específicos dos documentos
db.collection("turmaA").where("notas.nota1", ">" , 5).get()
    .then(snapshot => {
        snapshot.forEach((doc) => {
            let aluno = doc.data();
            console.log(aluno.nome, aluno.sobrenome)
        })
    })
    

// Criando e alterando documentos
db.collection(TURMA).add({
    nome: "Marcos",
    sobrenome: "Santos",
    notas: {
        nota1: 9.6,
        nota2: 7.5
    }
}).then((doc) => {
    console.log("Documento inserido com sucesso: ", doc)
}).catch(err => {
    console.log(err);
})


db.collection(TURMA).doc("lCP49qhUZP2YpwSPwK5i").update({

    faltas: firebase.firestore.FieldValue.increment(1)

}
).then(() => {
    console.log("Documento inserido com sucesso: ")
}).catch(err => {
    console.log(err);
})


// Atualização em tempo real

db.collection("turmaA").onSnapshot((snapshot) => {
    snapshot.forEach((doc)=>{
        let aluno = doc.data();
        console.log(aluno);
    })
})


let docRef = db.collection("turmaA").doc("k83XWe7D3I6gP2JDCUGo")

docRef.onSnapshot((doc) => {
    console.log(doc.data());
})

db.collection("turmaA").where("notas.nota1", ">" , 5).onSnapshot(snapshot => {
        snapshot.forEach((doc) => {
            let aluno = doc.data();
            console.log(aluno.nome, aluno.sobrenome)
        })
    })



db.collection(TURMA).doc("lCP49qhUZP2YpwSPwK5i").delete().then(() => {
    console.log("Deletado com sucesso: ")
}).catch(err => {
    console.log(err);
})