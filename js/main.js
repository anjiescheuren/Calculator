//document ready function
$(function () {

  //make a variable = 0;
  var total = 0;

  $('#clear').on('click', function() {
    $('#total').text(0);
  });

  $('#total').text(0);

  //addition function
    //get user input
    //put input in a variable
  $('#add').on('click', function() {
    var value1 = parseInt($('#userInput').val());
      total = total + value1;

    //on click of equal button
      //perform math variable
      //return output
    $('#equal').on('click', function() {
      var value2 = parseInt($('#userInput').val());
      var newTotal = total + value2;

    $('#total').text(newTotal);
    });
  });

  //subtraction function
    //get user input
    //put input in a variable
  $('#subtract').on('click', function() {
    var value1 = parseInt($('#userInput').val());
      total = total + value1;

    //on click of equal button
      //perform math variable
      //return output
    $('#equal').on('click', function() {
      var value2 = parseInt($('#userInput').val());
      var newTotal = total - value2;

    $('#total').text(newTotal);

    });
  });

  //multiplication funtion
    //get user input
    //put input in a variable
  $('#multiply').on('click', function() {
    var value1 = parseInt($('#userInput').val());
      total = total + value1;

    //on click of equal button
      //perform math variable
      //return output
    $('#equal').on('click', function() {
      var value2 = parseInt($('#userInput').val());
      var newTotal = total * value2;

    $('#total').text(newTotal);
    });
  });

  //division function
    //get user input
    //put input in a variable
  $('#divide').on('click', function() {
    var value1 = parseInt($('#userInput').val());
      total = total + value1;

   //on click of equal button
      //perform math variable
      //return output
    $('#equal').on('click', function() {
      var value2 = parseInt($('#userInput').val());
      var newTotal = total / value2;

    $('#total').text(newTotal);

    });
  });



});
