$(document).ready(function(){
  $("#save").click(function(event){
    var email=$("#key").val();
  alert(email+ " You are now subscribed to Anita's Kitchen! ");
  $("#save").html("Subscribed!");
  event.preventDefault();
  });

$("#menu-open").click(function(){
$("aside").animate({"left":0},1000);
});
$("#menu-close").click(function(){
$("aside").animate({"left":"-105\%"},1000);


});


});
