var username = "YASHWANTH";
var password = "paaru";
function fsignup(){
    let inputUsername = document.getElementById("username").value;
    let inputPassword = document.getElementById("password").value;
    console.log(inputUsername);
    console.log(inputPassword);

  if (inputUsername === username && inputPassword ===password )
    {
    console.log("login success")
}
else{
    console.log("login fail")

}
  
}