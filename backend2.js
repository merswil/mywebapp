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
  }, 3000);

  document.querySelector('#username').value = '';
  document.querySelector('#password').value = '';
  document.querySelector('#password2').value = '';
  errorMsg.textContent = '';
});



//  The user data is store in the users.json file upon registration using this code

// document.querySelector('.signup-btn').addEventListener('click', () => {
//   const username = document.querySelector('#username').value;
//   const password = document.querySelector('#password').value;
//   const password2 = document.querySelector('#password2').value;
//   const role = document.querySelector('input[name="radio-group"]:checked').id;
//   const errorMsg = document.querySelector('.error-msg');

//   if (password !== password2) {
//     errorMsg.textContent = 'Passwords do not match';
//     return;
//   }

//   const users = JSON.parse(localStorage.getItem('users')) || [];
//   const existingUser = users.find(user => user.username === username);

//   if (existingUser) {
//     errorMsg.textContent = 'Username already exists';
//     return;
//   }

//   const user = { username, password, role };
//   users.push(user);
//   localStorage.setItem('users', JSON.stringify(users));

//   // Write users to file
//   const jsonData = JSON.stringify(users, null, 2);
//   const blob = new Blob([jsonData], { type: 'application/json' });
//   const url = URL.createObjectURL(blob);
//   const a = document.createElement('a');
//   a.href = url;
//   a.download = 'users.json';
//   a.click();

//   document.querySelector('#message').style.display = 'block';
//   setTimeout(() => {
//     document.querySelector('#message').style.display = 'none';
//   }, 5000);

//   document.querySelector('#username').value = '';
//   document.querySelector('#password').value = '';
//   document.querySelector('#password2').value = '';
//   errorMsg.textContent = '';
// });
