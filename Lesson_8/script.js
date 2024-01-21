const userEmailEl = document.getElementById('user-email');

const userPasswordEl = document.getElementById('user-password');

const btnLogin = document.querySelector('.btn-login');

const handleSubmit = () => {
  const userEmail = userEmailEl.value;
  const userPassword = userPasswordEl.value;

  if (userEmail === '') {
    alert('Please fill your email!');
  } else if (userPassword === '') {
    alert('Please fill password!');
  } else {
    alert('Login Success!');
    console.log(`Your email: ${userEmail}`);
    console.log(`Your password: ${userPassword}`);
  }
};

btnLogin.addEventListener('click', handleSubmit);
