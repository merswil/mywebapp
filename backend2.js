// registration page


document.querySelector('.signup-btn').addEventListener('click', () => {
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  const password2 = document.querySelector('#password2').value;
  const role = document.querySelector('input[name="radio-group"]:checked').id;
  const errorMsg = document.querySelector('.error-msg');

  if (password !== password2) {
    errorMsg.textContent = 'Passwords do not match';
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const existingUser = users.find(user => user.username === username);

  if (existingUser) {
    errorMsg.textContent = 'Username already exists';
    return;
  }

  const user = { username, password, role };
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));

  document.querySelector('#message').style.display = 'block';
  setTimeout(() => {
    document.querySelector('#message').style.display = 'none';
  }, 5000);

  document.querySelector('#username').value = '';
  document.querySelector('#password').value = '';
  document.querySelector('#password2').value = '';
  errorMsg.textContent = '';
});
