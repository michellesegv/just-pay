((_) => {
	$('#name-contact').text(localStorage.getItem('nameContact'));
	$('#phone-contact').text(localStorage.getItem('phoneContact'));
	$('#amount').text(localStorage.getItem('amount'));
	$('#date').text(localStorage.getItem('datePay'));
	$('#hour').text(localStorage.getItem('hourPay'));
})()
