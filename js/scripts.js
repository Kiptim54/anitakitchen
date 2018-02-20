$(document).ready(function(){
  $("#save").click(function(event){
    var email=$("#key").val();
  alert(email+ " You are now subscribed to Anita's Kitchen! ");
  event.preventDefault();
  });
});
