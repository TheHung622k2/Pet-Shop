document.getElementById('loginButton').addEventListener('click', function () {
    let tenDangNhap = document.getElementById('ten_dn').value.trim();
    let matKhau = document.getElementById('password').value.trim();
    let errorTenDangNhap = document.getElementById('error-ten-dn');
    let errorPassword = document.getElementById('error-password');

    errorTenDangNhap.innerHTML = '';
    errorPassword.innerHTML = '';

    errorTenDangNhap.style.color = "blue";
    errorPassword.style.color = "blue";

    errorTenDangNhap.style.marginTop = "10px";
    errorTenDangNhap.style.marginLeft = "2px";
    errorPassword.style.marginTop = "10px";
    errorTenDangNhap.style.marginLeft = "2px";

    let isValid = true;

    if (!tenDangNhap && !matKhau) {
        errorTenDangNhap.innerHTML = "Vui lòng cung cấp đầy đủ thông tin!";
        errorPassword.innerHTML = "Vui lòng cung cấp đầy đủ thông tin!"
        isValid = false
    }

    if (!tenDangNhap || !matKhau) {
        //
        if(!tenDangNhap && matKhau) {
            if (!matKhau.match(/[a-zA-Z]/) || !matKhau.match(/[0-9]/)) 
            {
                errorTenDangNhap.innerHTML = "Vui lòng cung cấp đầy đủ thông tin!";
                errorPassword.innerHTML = "Mật khẩu phải chứa ít nhất một chữ cái và một chữ số!";
                isValid = false;
            }
            else
            {
                errorTenDangNhap.innerHTML = "Vui lòng cung cấp đầy đủ thông tin!";
                isValid = false;
            }
        } 

        //
        if (tenDangNhap && !matKhau) {
            if (tenDangNhap.length < 6) 
            {
                errorTenDangNhap.innerHTML = "Tên đăng nhập phải có ít nhất 6 kí tự!";
                errorPassword.innerHTML = "Vui lòng cung cấp đầy đủ thông tin!";
                isValid = false;
            }
            else 
            {
                errorPassword.innerHTML = "Vui lòng cung cấp đầy đủ thông tin!";
                isValid = false;
            }
        }
    } 
    if (tenDangNhap && matKhau) {
        if (tenDangNhap.length < 6 && (!matKhau.match(/[a-zA-Z]/) || !matKhau.match(/[0-9]/)))
        {
            errorTenDangNhap.innerHTML = "Tên đăng nhập phải có ít nhất 6 kí tự!";
            errorPassword.innerHTML = "Mật khẩu phải chứa ít nhất một chữ cái và một chữ số!";
            isValid = false;
        }
        if (tenDangNhap.length >= 6 && !matKhau.match(/[a-zA-Z]/) || !matKhau.match(/[0-9]/)) {
            errorPassword.innerHTML = "Mật khẩu phải chứa ít nhất một chữ cái và một chữ số!";
            isValid = false;
        }
        if (tenDangNhap.length < 6 && matKhau.match(/[a-zA-Z]/) && matKhau.match(/[0-9]/)) {
            errorTenDangNhap.innerHTML = "Tên đăng nhập phải có ít nhất 6 kí tự!";
            isValid = false;
        }
    }

    if (isValid) {
        setTimeout(function() {
            alert('Đăng nhập thành công!');
            document.getElementById('ten_dn').value = '';
            document.getElementById('password').value = '';
            window.open('home.html', '_self');
        }, 0);
    }
});
