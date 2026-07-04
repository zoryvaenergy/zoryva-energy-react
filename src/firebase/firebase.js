import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBrFqby2QPaMfNWbav6yTjOpN9wl5YscAI",
  authDomain: "zoryvaenergy.firebaseapp.com",
  databaseURL: "https://zoryvaenergy-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "zoryvaenergy",
  storageBucket: "zoryvaenergy.firebasestorage.app",
  messagingSenderId: "677968876877",
  appId: "1:677968876877:web:93a271112dc8f45ebed304",
  measurementId: "G-ZK3XKS56BW"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export default app;