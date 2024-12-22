import firebase from "firebase/compat/app";
import 'firebase/compact/auth';
import 'firebase/compact/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCxFKKX-WSkxLQhA1MbBMpcpBM-Kau1xdg',
    authDomain: 'fir-auth-react-js-801005.firebaseapp.com',
    projectId: 'fir-auth-react-js-801005',
    storageBucket: 'fir-auth-react-js-801005.appspot.com',
    messaggingSenderId: '887257062618',
    appId: '1:887257062618:web:39761c078644ce1a6359e3',
    measurementId: 'G-3XGT9Z4EEN',
};

const authapp = firebase.initializeApp(firebaseConfig);
export const auth = authapp.auth();

export default authapp