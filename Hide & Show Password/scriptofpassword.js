let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

// eyeicon.addEventListener('click',function(){
//     if(password.type == "password"){
//         password.type = "text"
//         eyeicon.src = "eye-open.png"
//     }
//     else if(password.type == "text"){
//         password.type = "password"
//         eyeicon.src = "eye-close.png"
//     }
// })

// eyeicon.onclick = function () {
//   if (password.type == "password") {
//     password.type = "text";
//     eyeicon.src = "eye-open.png";
//   } else {
//     password.type = "password";
//     eyeicon.src = "eye-close.png";
//   }
// };


eyeicon.addEventListener('mousedown',function(){
  password.type = "text"
  eyeicon.src = "eye-open.png"
})

eyeicon.addEventListener('mouseup',function(){
  password.type = "password";
  eyeicon.src = "eye-close.png";
})