// $(document).ready(function(){
//     $('#submit').click(function(){
//         var user = $('#fname').val();

//         if(user == ""){
//             $('#show_error').html('Please enter your name');
//             $('#show_error').css('color','red');
//             return false;
//         }
//     });
// });


$(function () {
    $("#fname_err_msg").hide();
    $("#lname_err_msg").hide();
    $("#email_err_msg").hide();
    $("#pass_err_msg").hide();
    $("#passw_err_msg").hide();

    var error_fname = false;
    var error_lname = false;
    var error_email = false;
    var error_password = false;
    var error_re_password = false;
    var phone = false;

    $("#fname").focusout(function () {
        check_fname();
    });

    $("#lname").focusout(function () {
        check_lname();
    });

    $("#email").focusout(function () {
        check_email();
    });

    $("#pwd").focusout(function () {
        check_password();
    });

    $("#con_pwd").focusout(function () {
        check_retype_password();
    });

    $("#fname").focusout(function () {
        check_phone();
    });

    function check_fname() {
        var pattern = /^[a-zA-Z]*$/;
        var finame = $("#fname").val();
        if (pattern.test(finame) && finame !== '') {
            $("#fname_err_msg").hide();
            $("#fname").css("border", "2px solid #34f458");
        }
        else {
            $("#fname_err_msg").html("dont use characters");
            $("#fname_err_msg").show();
            $("#fname").css("border", "2px solid #f90a0a");
            error_fname = true;
        }
    }

    function check_lname() {
        var pattern = /^[a-zA-Z]*$/;
        var laname = $("#lname").val();
        if (pattern.test(laname) && laname !== '') {
            $("#lname_err_msg").hide();
            $("#lname").css("border", "2px solid #34f458");
        }
        else {
            $("#lname_err_msg").html("don`t use characters");
            $("#lname_err_msg").show();
            $("#lname").css("border", "2px solid #f90a0a");
            error_lname = true;
        }
    }

    function check_email() {
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email = $("#email").val();
        if (pattern.test(email) && email !== '') {
            $("#email_err_msg").hide();
            $("#email").css("border", "2px solid #34f458");
        }
        else {
            $("#email_err_msg").html("Invalid Email");
            $("#email_err_msg").show();
            $("#email").css("border", "2px solid #f90a0a");
            error_email = true;
        }
    }

    function check_password() {
        var pass_length = $("#pwd").val().length;
        if (pass_length < 8) {
            $("#pass_err_msg").html("Atleast 8 characters");
            $("#pass_err_msg").show();
            $("#pwd").css("border", "2px solid #f90a0a");
            error_password = true;
        }
        else {
            $("#pass_err_msg").hide();
            $("#pwd").css("border", "2px solid #34f458");
        }
    }

    function check_retype_password() {
        var password = $("#pwd").val();
        var retype_password = $("#con_pwd").val();
        if (password !== retype_password) {
            $("#passw_err_msg").html("Password did not match");
            $("#passw_err_msg").show();
            $("#con_pwd").css("border", "2px solid #f90a0a");
            error_re_password = true;
        }
        else {
            $("#passw_err_msg").hide();
            $("#con_pwd").css("border", "2px solid #34f458");
        }
    }

    function check_phone() {
        var pattern = /^[a-zA-Z]*$/;
        var phno = $("#number").val();
        if (phno == '') {
            $("#phone_error").html("Fillout this field");
            // $("#number").removeClass('val').addClass("inval");
            errphno = false;
        }

        else if (pattern.test(phno) == true) {
            $("#phnphone_erroroerr").html("only numeric values allowed");
            // $("#number").removeClass('val').addClass("inval");
            errphno = false;

        }
        else if (phno.length != 10) {
            $("#phone_error").html("invalid number");
            // $("#number").removeClass('val').addClass("inval");
            errphno = false;
        }
        else {
            // $("#number").addClass("val").removeClass("inval");
            $("#phone_error").hide();
            $("#number").css("border", "2px solid #34f458");
            errphno = true;
        }
    }

    $("#form").submit(function () {
        error_fname = false;
        error_lname = false;
        error_email = false;
        error_password = false;
        error_re_password = false;
        phone = false;

        check_fname();
        check_lname();
        check_email();
        check_password();
        check_retype_password();
        check_phone();

        if (error_fname === false && error_lname === false && error_email === false && error_password === false && error_re_password === false && phone === false){
            alert("Registration Successfull");
        }
        else{
            alert("Please fill form correctlly");
            return false;
        }
    })

})
