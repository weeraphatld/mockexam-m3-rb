document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateCode();
});

function validateCode() {
    const input = document.getElementById('password').value;
    const decoded = atob('c3R1ZGVudHJiMjU2Nw=='); 
    if (input === decoded) {
        Swal.fire({
            title: 'เข้าสู่ระบบสำเร็จ!',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
        }).then(() => {
            window.location.href = 'home.html';
        });
    } else {
        Swal.fire({
            title: 'รหัสผ่านไม่ถูกต้อง',
            icon: 'error',
            showConfirmButton: false,
            timer: 2000
        });
    }
}
