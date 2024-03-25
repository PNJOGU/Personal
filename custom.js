$(document).ready(function(){  
$("#toggleon").click(function(){
  $('.mobileNav').css("display","flex");
})

$("#toggleOff").click(function(){
  $('.mobileNav').css("display","none");
})

$("#submit").click(function(){
  let comment= $("#comment").val();
  $(".commentDiv").text(comment);
})
$("#reset").click(function(){
  $("#comment").val("");
})
})
