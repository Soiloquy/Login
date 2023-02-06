$(function () {
    $("#register").click(function () {
        $('.form-log').css('transform', 'translateX(80%)');
        $('.login-box').addClass('hidden');
        $('.register-box').removeClass('hidden');
    })
    $("#login").click(function () {
        $('.form-log').css('transform', '');
        $('.register-box').addClass('hidden');
        $('.login-box').removeClass('hidden');
    })
})