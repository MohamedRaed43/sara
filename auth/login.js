    // import db from '../index.js';
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
document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    
    let username=document.getElementById("username");
    let password=document.getElementById("password");
      db.collection("auth").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
       if(doc.username==username.value && doc.password ==password){
          ((name,vlaue,days)=>{
            const expire=new Date();
              expire.setTime(expire.getTime() + (days*24*60*60*1000))
              document.cookie=`${name}=${value}; expires=${expire.toUTCString()}; path=/`;
          })("username",username.value,1);
       }
       else{
          let error=document.getElementsByClassName(".error")[0];
          error.classList.toggle("error-vis");
          username.classList.toggle("error-inputs");
          password.classList.toggle("error-inputs")
       }
      });
    }).catch(console.error);

})