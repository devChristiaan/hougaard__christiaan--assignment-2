$(function(){

//Add item to list
function listItem(item){
  $(".todolist").append(`<li>${item} <a href='#' class='remove'>×</a></li>`)
}

// Removes item from DOM
$(document).on("click", "a.remove" , function() {
  $(this).parent().remove();
});

// Grab todo item from Input field and push to DOM
$('#form').on('keypress',function(e) {
  if(e.which == 13) {
    let todo = $('.form-control').val()
    listItem(todo)
    $('.form-control').val("")
    e.preventDefault()
  }
});

$("ul li").click(function(){
  this.addClass('text-muted')
})
})    