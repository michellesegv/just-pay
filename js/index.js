var name = false;
var password = false;

$('input').on('keyup', (e) => {

  /* Active or not button 'enter' */
  if (name == 'true' && password == true) {
    $('#button-start').removeClass('disabled');
    $('#button-start').addClass('waves-effect waves-light button');
  } else {
    $('#button-start').removeClass('waves-effect waves-light button');
    $('#button-start').addClass('disabled');
  }

  /* Actually input */
  var actuallyInput = $(e.target);

  /* Validate name */
  if (actuallyInput.attr('id') == 'name' && e.keyCode != 20 && e.keyCode != 9) {
    if (actuallyInput.val().length >= 2 && /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(actuallyInput.val())) {
      name = true;
      actuallyInput.removeClass('red-border');
    } else {
      name = false;
      actuallyInput.addClass('red-border');
    }
  }

  /* Validate password */
  if (actuallyInput.attr('id') == 'password' && e.keyCode != 20 && e.keyCode != 9) {
    if (actuallyInput.val().length) {
      password = true;
      $('#password').removeClass('red-border');
    } else {
      password = false;
      $('#password').addClass('red-border');
    }
  }
});

$('#button-start').on('click', (e) => {
  localStorage.setItem('name', $('#name').val());
  localStorage.setItem('password', $('#password').val());
});
