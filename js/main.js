//document ready function
$(function () {

  //make a variable = 0;
  var total = 0;
  var empty;

  //user input function
  $('#total').text(0);

  //addition function
  $('#add').on('click', function() {
    var value1 = parseInt($('#userInput').val());
      total = total + value1;

    //$('#total').text(0);

    //get user input
    //put input in a variable
    $('#equal').on('click', function() {
      var value2 = parseInt($('#userInput').val());
      var newTotal = total + value2;

    $('.addition').text(newTotal);
    });
  });

  //subtraction function
  $('#subtract').on('click', function() {
    var value1 = parseInt($('#userInput').val());
      total = total + value1;

    //$('#total').text(0);

    //get user input
    //put input in a variable
    $('#equal').on('click', function() {
      var value2 = parseInt($('#userInput').val());
      var newTotal = total - value2;

    $('.subtraction').text(newTotal);

    });
  });

  //multiplication funtion
  $('#multiply').on('click', function() {
    var value1 = parseInt($('#userInput').val());
      total = total + value1;

    //$('#total').text(0);

    //get user input
    //put input in a variable
    $('#equal').on('click', function() {
      var value2 = parseInt($('#userInput').val());
      var newTotal = total * value2;

    $('.multiplication').text(newTotal);
    });
  });

  //division function
  $('#divide').on('click', function() {
    var value1 = parseInt($('#userInput').val());
      total = total + value1;

    //$('#total').text(0);

    //get user input
    //put input in a variable
    $('#equal').on('click', function() {
      var value2 = parseInt($('#userInput').val());
      var newTotal = total / value2;

    $('.division').text(newTotal);

    });
  });

    //on click of equal button
      //perform math variable
      //return output

});
