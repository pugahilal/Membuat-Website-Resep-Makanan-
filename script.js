// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging.js";

// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDJetH1tybRHyb0oJojMBDXrl4G18eHVgw",
    authDomain: "resep-makanan-indonesia-5094d.firebaseapp.com",
    projectId: "resep-makanan-indonesia-5094d",
    storageBucket: "resep-makanan-indonesia-5094d.firebasestorage.app",
    messagingSenderId: "906727411866",
    appId: "1:906727411866:web:b9184d01a3b7b671064f23",
    measurementId: "G-XBMZH5YL3G"
  };

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Messaging
const messaging = getMessaging(app);

// Minta izin pengguna untuk menerima notifikasi
getToken(messaging, { vapidKey: "YOUR_VAPID_KEY" })
  .then((currentToken) => {
    if (currentToken) {
      console.log("Token berhasil didapatkan:", currentToken);
      // Kirim token ke server Anda untuk menyimpan
    } else {
      console.log("Gagal mendapatkan token. Pastikan notifikasi diaktifkan.");
    }
  })
  .catch((err) => {
    console.error("Error mendapatkan token:", err);
  });

// Tangkap notifikasi saat aplikasi sedang aktif
onMessage(messaging, (payload) => {
  console.log("Notifikasi diterima:", payload);
  alert(payload.notification.title + "\n" + payload.notification.body);
});