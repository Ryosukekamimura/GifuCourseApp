import firebase from "firebase";
import {firebaseConfig} from "~/src/plugins/config";
!firebase.apps.length?firebase.initializeApp(firebaseConfig):firebase.app();
export default firebase

