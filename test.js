import firebase from "firebase/app";
import 'firebase/firestore';

const firestore = firebase.firestore();

// Get specific doc from the spec user, chain:
firestore.collection('users').doc('Qi1yqBkHTZQB6PHWvuRn').collection('cartItems').doc('fEP0wLtLqwUxri00v4py');
firestore.doc('/users/Qi1yqBkHTZQB6PHWvuRn/cartItems/fEP0wLtLqwUxri00v4py');
filestore.collection('/users/Qi1yqBkHTZQB6PHWvuRn/cartItems');