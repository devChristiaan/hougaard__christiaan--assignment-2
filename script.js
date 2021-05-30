$(function(){

//Add item to list
function listItem(item){
  $(".todolist").append(`<li><input type='checkbox' class="form-checkbox h-4 w-4">${item}</li><a href='#' class='remove'>×</a>`)
}

// Removes item from DOM
$(document).on("click", "a.remove" , function() {
  $(this).parent().remove();
});

// Removes/Addes Muted text class and checks unchecks Item
$(document).on("click", "ul li" , function() {
  if($(this).hasClass('text-muted')){
    $(this).removeClass('text-muted')
    $(this).children().prop("checked", false)
    return
  }
  $(this).addClass('text-muted')
  $(this).children().prop("checked", true)
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