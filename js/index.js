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
    let wx = document.querySelectorAll('#wx');
    let qq = document.querySelectorAll('#qq');
    let cover = document.querySelector('.cover_log');
    let erwei = document.querySelector('#erwei_code');
    for (let i = 0; i < wx.length; i++) {
        wx[i].addEventListener('click', () => {
            cover.style.display = 'block';
            erwei.innerHTML = '这是微信二维码';
        })
    }
    for (let i = 0; i < qq.length; i++) {
        qq[i].addEventListener('click', () => {
            cover.style.display = 'block';
            erwei.innerHTML = '这是QQ二维码';
        })
    }
    let fork = cover.querySelector('p');
    fork.addEventListener('click', () => {
        cover.style.display = 'none';
    })
    let count = document.querySelector('.yux').querySelector('p');
    count.addEventListener('click', () => {
        count.style.color = 'grey';
        var num = 60;
        countDown();
        var time = setInterval(countDown, 1000)
        function countDown() {
            num--;
            count.innerHTML = '发送邮件' + num;
            if (num <= 0) {
                clearInterval(time);
                count.innerHTML = '发送邮件';
            }
        }
    })
    let text = document.querySelector('#username');
    let password = document.querySelector('#pw');
    var login = document.querySelector('.login-box').querySelector('button');
    login.addEventListener('click', () => {
        if (text.value == '' || text.value == ' ') {
            this.alert('用户名不能为空');
        }
        else if (password.value == '' || password.value == ' ') {
            this.alert('密码不能为空');
        }
    })
})