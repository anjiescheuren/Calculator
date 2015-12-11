//document ready function
$(function () {

  //make a variable = 0;
  var total = 0;

//clear window, stop addition
  $('#clear').on('click', function() {
  $('#total').text(0);
  });

  $('#one').on('click', function() {
    $('#userInput').text(1);

    });

  $('#total').text(0);

  //addition function
    //get user input
    //put input in a variable
  $('#add').on('click', function() {
    var value1 = parseInt($('#userInput').val());
    var newTotal = total + value1;

    //on click of equal button
      //perform math variable
      //return output
    $('#equal').on('click', function() {
      var value2 = parseInt($('#userInput').val());
      var finalTotal = newTotal + value2;

    $('#total').text(finalTotal);

    });
  });

  //subtraction function
    //get user input
    //put input in a variable
  $('#subtract').on('click', function() {
    var value1 = parseInt($('#userInput').val());
    var newTotal = total + value1;

    //on click of equal button
      //perform math variable
      //return output
    $('#equal').on('click', function() {
      var value2 = parseInt($('#userInput').val());
      var finalTotal = newTotal - value2;

    $('#total').text(finalTotal);

    });
  });

  //multiplication funtion
    //get user input
    //put input in a variable
  $('#multiply').on('click', function() {
    var value1 = parseInt($('#userInput').val());
    var newTotal = total + value1;

    //on click of equal button
      //perform math variable
      //return output
    $('#equal').on('click', function() {
      var value2 = parseInt($('#userInput').val());
      var finalTotal = newTotal * value2;

    $('#total').text(finalTotal);
    });
  });

  //division function
    //get user input
    //put input in a variable
  $('#divide').on('click', function() {
    var value1 = parseInt($('#userInput').val());
    var newTotal = total + value1;

   //on click of equal button
      //perform math variable
      //return output
    $('#equal').on('click', function() {
      var value2 = parseInt($('#userInput').val());
      var finalTotal = newTotal / value2;

    $('#total').text(finalTotal);

    });
  });



});
