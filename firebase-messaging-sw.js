importScripts("https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging.js");

// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDJetH1tybRHyb0oJojMBDXrl4G18eHVgw",
    authDomain: "resep-makanan-indonesia-5094d.firebaseapp.com",
    projectId: "resep-makanan-indonesia-5094d",
    storageBucket: "resep-makanan-indonesia-5094d.firebasestorage.app",
    messagingSenderId: "906727411866",
    appId: "1:906727411866:web:b9184d01a3b7b671064f23",
  };
  

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);

// Inisialisasi Messaging
const messaging = firebase.messaging();

// Tangani notifikasi di background
messaging.onBackgroundMessage((payload) => {
  console.log("Notifikasi Background:", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon,
  });
});
