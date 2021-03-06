$(function(){

//set focus on input field on load
$(document).ready(function (){
  $('.form-control').focus()
})

//Add item to list
function listItem(item){
  $(".todolist").append(`<li><input type='checkbox' class="form-checkbox"><span class="item">${item}</span><a href='#' class='remove'>×</a></li>`)
}

// Removes item from DOM
$(document).on("click", "ul li a.remove" , function() {
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
  $(this).appendTo($('ul'))
});

// Grab todo item from Input field and push to DOM
$('#form').on('keypress',function(e) {
  if(e.which == 13) {
    let todo = $('.form-control').val()
    e.preventDefault()
    if (todo === "") {
      $(this).addClass('alert')
      setInterval(()=>{
        $(this).removeClass('alert')
      }, 3000)
      return
    }
    listItem(todo)
    $('.form-control').val("")
    e.preventDefault()
  }
});

//Drag list elements
$("#sortable").sortable();

})