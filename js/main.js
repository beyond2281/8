$(document).ready(function(){
  var button = $("#button");
  var modal = $("#modal");
  var close = $("#close");
  var row = $("#row")

  button.on("click", function(){
    modal.addClass("modal_active");
  });

  close.on("click", function(){
    modal.removeClass("modal_active");
  });

  row.on('click', function(){
    $('html, body').animate({scrollTop:0}, '100');
  });

});










// var button = document.querySelector("#button");
// var modal = document.querySelector("#modal");
// var close = document.querySelector("#close");

// button.addEventListener("click", function() {
//     modal.classList.add("modal_active");
    
// });
// close.addEventListener("click", function() {
//     modal.classList.remove("modal_active");
// });

// setTimeout(function(){
//   document.getElementById('modal').style.display = 'none';
// }, 3000);