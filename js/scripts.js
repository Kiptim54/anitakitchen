//quite frankly this is from a youtube tutorial I don'
var inputValue="";
var submit=document.getElementById("submit");
var email= document.getElementById("email");

submit.onekeyup= function(event){
  inputValue=event.target.value;
}

submit.onclick= function(event){
  console.log("inputValue");
  alert("input");
};
