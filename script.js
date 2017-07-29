$(document).ready(function () {

  $('.btn-add-income').click(function() {
    var income = prompt("How much cash do you have?");

    $('#cashOnHand').html(income);
  });

  $('.btn-add-expense').click(function() {
    var expense = prompt("Enter a new expense");
    $('#expenseList').append("<li>"+expense+"</li>");

  })


});
