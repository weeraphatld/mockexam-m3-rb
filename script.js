document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const password = document.getElementById('passwordInput').value;
  if (password === 'studentrb2567') {
    Swal.fire({
      title: 'เข้าสู่ระบบสำเร็จ',
      icon: 'success',
      timer: 2000,
      showConfirmButton: false,
    }).then(() => {
      const loginContainer = document.getElementById('loginContainer');
      const iframeContainer = document.getElementById('iframeContainer');
      const contentFrame = document.getElementById('contentFrame');
      loginContainer.style.display = 'none';
      iframeContainer.style.display = 'block';
      contentFrame.src = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQbCQiPf9yC_6z7KAAzwsExR4dFornWUjKisUvSBu7lK2f-CZlT3-tz6b0ueHAoSf52Iwr45FPbbVAw/pubhtml?gid=0&single=true';
    });
  } else {
    Swal.fire({
      title: 'รหัสผ่านไม่ถูกต้อง',
      icon: 'error',
      timer: 2000,
      showConfirmButton: false,
    }).then(() => {
      document.getElementById('passwordInput').value = '';
    });
  }
});
