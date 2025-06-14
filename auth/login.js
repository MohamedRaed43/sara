import db from "../index.js";
document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    
    let username=document.getElementById("username");
    let password=document.getElementById("password");
      db.collection("auth").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
       if(doc.data().username==username.value && doc.data().password ==password.value){
          ((name,logged_in,value2,value,days)=>{
            const expire=new Date();
              expire.setTime(expire.getTime() + (days*24*60*60*1000))
              document.cookie=`${name}=${value};${logged_in}=${value2};  expires=${expire.toUTCString()}; path=/`;
          })("username",true,username.value,1);
       }
       else{
          let error=document.getElementById("error");
          error.classList.add("error-vis");
          username.classList.add("error-inputs");
          password.classList.add("error-inputs")
       }
      });
    }).catch(console.error);

})