import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA4f7CsFK-hcpnsUKYOk2BhRwx6bfus2Uw",
  authDomain: "netflix-build-f6013.firebaseapp.com",
  projectId: "netflix-build-f6013",
  storageBucket: "netflix-build-f6013.appspot.com",
  messagingSenderId: "160567500170",
  appId: "1:160567500170:web:16e418299ab7405cdbfc73",
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

// export { auth };
// export default db;
