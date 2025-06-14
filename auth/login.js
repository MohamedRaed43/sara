    import db from '../index';

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