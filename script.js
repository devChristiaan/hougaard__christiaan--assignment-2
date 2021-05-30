$(function(){

//Add item to list
function listItem(item){
  $(".todolist").append(`<li>${item} <a href='#' class='remove'>×</a></li>`)
}

// Removes item from DOM
$(document).on("click", "a.remove" , function() {
  $(this).parent().remove();
});

// Removes/Addes Muted text class from Item
$(document).on("click", "ul li" , function() {
  if($(this).hasClass('text-muted')){
    $(this).removeClass('text-muted')
    return
  }
  $(this).addClass('text-muted')
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
})    