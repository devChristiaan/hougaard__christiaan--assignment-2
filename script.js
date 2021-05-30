$(function(){

const toDoItems = {
  "done" : false,
  "todo" : 'mowe the lawn'
}

class ToDo {
  constructor (item) {
    this.done = false
    this.todo = item
  }
}


// Grab todo from Input and push to Object
$('#form').on('keypress',function(e) {
  if(e.which == 13) {
    let todo = $('.form-control').val()
    $('.form-control').val("")
    e.preventDefault()
  }
});




})    