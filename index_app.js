<script type="module">
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
    import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-database.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyAYfJLPdsZEJZBG4fe_iiC0zUt1rVmq3VU",
        authDomain: "wiitycliques.firebaseapp.com",
        databaseURL: "https://wiitycliques-default-rtdb.asia-southeast1.firebasedatabase.app/",
        projectId: "wiitycliques",
        storageBucket: "wiitycliques.appspot.com",
        messagingSenderId: "728732831863",
        appId: "1:728732831863:web:dc65be187ff45aaf683672",
        measurementId: "G-2ZCS2MP69G"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getDatabase(app)
    const dbRef = ref(db)

    get(child(dbRef, `users`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
</script>

let college="NIT Hamirpur";

function dataget()