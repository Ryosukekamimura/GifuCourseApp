import firebase from "firebase";
import {firebaseConfig} from "~/src/plugins/config";
!firebase.apps.length?firebase.initializeApp(firebaseConfig):firebase.app();
export default firebase

export const firestore = firebase.firestore()
export const storage = firebase.storage()
