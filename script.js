$(function(){

//Add item to list
function listItem(item){
  item = `<li>${item}</li>`
  $(".todolist").append(item)
}

// Grab todo from Input and push to DOM
$('#form').on('keypress',function(e) {
  if(e.which == 13) {
    let todo = $('.form-control').val()
    listItem(todo)
    $('.form-control').val("")
    e.preventDefault()
  }
});




})    