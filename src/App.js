// import dependencies
import React from "react";
import { useState, useRef } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import { useCollectionData } from "react-firebase-hooks/firestore";

// import styles
import "./App.css";

// import components

const firestore = firebase.firestore();
const firebaseConfig = {
  apiKey: "AIzaSyCIaA5sid24iepN0IeNf08teDo4jwgRorQ",
  authDomain: "phototagginggame-9564e.firebaseapp.com",
  projectId: "phototagginggame-9564e",
  storageBucket: "phototagginggame-9564e.appspot.com",
  messagingSenderId: "185292172496",
  appId: "1:185292172496:web:f2ef008831b9c7fe05c2d5",
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  return;
}
