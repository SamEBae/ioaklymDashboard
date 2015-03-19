$(document).ready(function() {
    $('#username').focus();

    $('#submit').click(function() {

        event.preventDefault(); // prevent PageReLoad

       	var ValidEmail = $('#username').val() === 'ioaklym'; // User validate
		var ValidPassword = $('#password').val() === 'dashboard'; // Password validate

        if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
            $('.valid').css('display', 'block');
            window.location = "dashboard.html"; // go to home.html
        }
        else {
            $('.error').css('display', 'block'); // show error msg
        }
    });
});