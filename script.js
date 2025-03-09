let donwload_img=document.querySelector("#donwload");
let Next_img=document.querySelector("#Next_img");
let box=document.querySelector(".box");
let imga=document.querySelector("#imga");
let dowbtn=document.querySelector("#dowbtn");
let text=document.querySelector(".text");
text.addEventListener("click",function(){
   window.location.href="index2nd.html";
})

Next_img.addEventListener("click",function(){
   box.classList.remove("complete");
   setTimeout(function(){
      box.classList.add("complete");
   },2000)
   fetch("https://dog.ceo/api/breeds/image/random")
   .then((response) => response.json())
   .then((json)=>{
      imga.src=json.message
      dowbtn.href=json.message
      console.log(json.message)
   })
   .catch((err) => {
      console.log(err);
   })

  })