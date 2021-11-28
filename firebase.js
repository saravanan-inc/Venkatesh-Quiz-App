import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_XCzhyKInEIiQ7rgWhDG0qqGaWYBGzOw",
  authDomain: "venkatest-quizapp-db.firebaseapp.com",
  projectId: "venkatest-quizapp-db",
  storageBucket: "venkatest-quizapp-db.appspot.com",
  messagingSenderId: "619616515116",
  appId: "1:619616515116:web:53b3cb1245eeb042960d89",
  measurementId: "G-G0TR9EHYP4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
