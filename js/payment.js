
((_) => {
  
  $('#name-contact').text(localStorage.getItem('nameContact'));
  $('#phone-contact').text(localStorage.getItem('phoneContact'));

  $('#amount').on('keypress', (e) =>{
    var asciiCode = e.keyCode;
    console.log(asciiCode);
    if (asciiCode>=48 && asciiCode<= 57 && $('#amount').val().length<4) {
      return true;
    } else {
      return false;
    }
  });
  
  $('#amount').on('keyup', (e) =>{
    if ($('#amount').val().length) {
      console.log('soy true');
      $('#button-just-pay').removeClass('disabled');
      $('#button-just-pay').addClass('waves-effect waves-light button');
    } else {
      $('#button-just-pay').removeClass('waves-effect waves-light button');
      $('#button-just-pay').addClass('disabled');
    }
  });
  
  $('#button-just-pay').on('click', (e) => {
    const now = new Date();
    const date = now.getDate() + '/' + (now.getMonth() +1) + '/' + now.getFullYear();
    const hour = now.getHours() + ':' + now.getMinutes();
    localStorage.setItem('hourPay', hour);
    localStorage.setItem('datePay', date);
    localStorage.setItem('amount', $('#amount').val());
  });
  
})()
