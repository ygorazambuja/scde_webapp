import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyAVMTGvPg-gAyNHNkqh98oaEJ7qCKG1Uaw',
    authDomain: 'eefrs-2020.firebaseapp.com',
    databaseURL: 'https://eefrs-2020.firebaseio.com',
    projectId: 'eefrs-2020',
    storageBucket: 'eefrs-2020.appspot.com',
    messagingSenderId: '557665189690',
    appId: '1:557665189690:web:4bcfcb97e05749b13c9a03',
    measurementId: 'G-RVY63SQD96',
};

export const firebaseImpl = firebase.initializeApp(firebaseConfig);
export const firebaseDatabase = firebase.database();
