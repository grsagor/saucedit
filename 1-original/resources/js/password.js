$(document).ready(function (){
    $(".toggle-password").click(function() {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = document.querySelector('.password');
        var type = input.getAttribute("type");
        if (type == "password") {
            input.setAttribute("type", 'text')
        } else {
            input.setAttribute("type", 'password')
        }
    });
    $(".toggle-password-new").click(function() {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = document.querySelector('.password-new');
        var type = input.getAttribute("type");
        if (type == "password") {
            input.setAttribute("type", 'text')
        } else {
            input.setAttribute("type", 'password')
        }
    });
    $(".toggle-password-confirm").click(function() {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = document.querySelector('.password-confirm');
        var type = input.getAttribute("type");
        if (type == "password") {
            input.setAttribute("type", 'text')
        } else {
            input.setAttribute("type", 'password')
        }
    });
})