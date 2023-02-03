window.addEventListener('load', function () {
    let register_box = document.querySelector('.register-box');
    let login_box = document.querySelector('.login-box');
    let login_but = document.querySelector('#login');
    let register_but = document.querySelector('#register');
    let form = document.querySelector('.form-log');
    register_but.addEventListener('click', () => {
        form.style.transform = 'translateX(80%)';
        login_box.classList.add('hidden');
        register_box.classList.remove('hidden');
    })
    login_but.addEventListener('click', () => {
        form.style.transform = 'translateX(0)';
        register_box.classList.add('hidden');
        login_box.classList.remove('hidden');
    })
})