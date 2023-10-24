import firebase from '@react-native-firebase/app';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDx-2puIGm-YZKSTB_L5XfYwx1fNnK2HLc',
  authDomain: 'vegatise-1bad9.firebaseapp.com',
  projectId: 'vegatise-1bad9',
  storageBucket: 'vegatise-1bad9.appspot.com',
  messagingSenderId: '1093917437851',
  appId: '1:1093917437851:web:a5cbea81d7dce743c63b3e',
  measurementId: 'G-YKBDQBMYYL',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
