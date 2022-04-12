import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCTYa98ZlVFKPER4Yu3pWflyzlOVnbwxU0",
    authDomain: "linkedin-clone-react-d19c7.firebaseapp.com",
    projectId: "linkedin-clone-react-d19c7",
    storageBucket: "linkedin-clone-react-d19c7.appspot.com",
    messagingSenderId: "572080140005",
    appId: "1:572080140005:web:6d6fd5d4e8be839621ae0c",
    measurementId: "G-NXCFTHQ8FV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

const storage=firebase.storage()

export { auth, provider,storage };

export default db