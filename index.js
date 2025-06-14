 const targetDate = new Date('2023-10-07T00:00:00');

    function updateCountdown() {
      const now = new Date();
      const diff = now-targetDate ;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      document.getElementById('countdown').textContent = `عدد ايام الحرب ${days}`;
    }

    updateCountdown();
    setInterval(updateCountdown, 86400000); // update every day

    /// Your Firebase config (replace with your real config!)
    const firebaseConfig = {
      apiKey: "AIzaSyAX_5EfiF4Eaibpo1C8_M05K764HTpv180",
      authDomain: "sara-database-95ed1.firebaseapp.com",
      projectId: "sara-database-95ed1",
      storageBucket: "sara-database-95ed1.appspot.com",
      messagingSenderId: "626283901292",
      appId: "1:626283901292:web:d1c7a8e3b77bd409894349"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Initialize Firestore
     const db = firebase.firestore();

    // db.collection("messages").add({
    //   name: "You",
    //   message: "Happy Birthday!"
    // }).then(() => {
    //   console.log("Message added!");
    // }).catch(console.error);

    // Read test data
    // db.collection("messages").get().then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     console.log(doc.id, "=>", doc.data());
    //   });
    // }).catch(console.error);