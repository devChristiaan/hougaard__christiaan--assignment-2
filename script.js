$(function(){

const toDoItems = {
  "done" : false,
  "todo" : 'mowe the lawn'
}


$('#form').on('keypress',function(e) {
  if(e.which == 13) {
    let todo = $('.form-control').val()
    $('.form-control').val("")
    console.log(todo);
    e.preventDefault()
  }
});




})    