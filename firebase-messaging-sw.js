// Import hanya Firebase yang diperlukan untuk service worker
importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js');

// Inisialisasi Firebase pada service worker
const firebaseConfig = {
  apiKey: "AIzaSyCvsUFBOH60KEtaXJJKsJunZaEQH1IdW5g",
  authDomain: "uaspwa-fadlanhs.firebaseapp.com",
  projectId: "uaspwa-fadlanhs",
  storageBucket: "uaspwa-fadlanhs.appspot.com",
  messagingSenderId: "27687025979",
  appId: "1:27687025979:web:9e7a2d3fdf09b55cf80b1e",
  measurementId: "G-992ZP6RNQQ",
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Handle pesan yang diterima saat aplikasi berjalan
messaging.onMessage((payload) => {
  // Logika penanganan pesan disini
  console.log('Message received', payload);
});

// Dan berbagai logika lainnya sesuai kebutuhan service worker
