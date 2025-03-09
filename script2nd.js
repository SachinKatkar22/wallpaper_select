let btn=document.querySelector("#btn");
let boxs=document.querySelector(".boxs");
let nameinput=document.querySelector(".nameinput");
let passwordinput=document.querySelector(".passwordinput");
let name_user=document.getElementById("name_user");
let password_user=document.getElementById("password_user");

let storagename;
let storagepasswors;
btn.addEventListener("click",function(){ 
    boxs.classList.add("remove");
    localStorage.setItem("name",nameinput.value);
    localStorage.setItem("password",passwordinput.value);
    storagename=localStorage.getItem('name');
    storagepasswors=localStorage.getItem('password');
    name_user.innerHTML=storagename;
  password_user.innerHTML=storagepasswors ; 
  
   
})


   

    




