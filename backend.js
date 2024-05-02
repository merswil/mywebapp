// login page

document.querySelector('#registrationForm').addEventListener('click', () => {
    const username = document.querySelector('#inlineFormInputGroupUsername').value;
    const password = document.querySelector('#exampleInputPassword1').value;
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);
  
    if (user) {
      // Redirect to the appropriate page based on the user's role
      if (user.role === 'team-leader') {
        window.location.href = 'create event.html';
      } else if (user.role === 'Member') {
        window.location.href = 'welcome.html';
      }
    } else {
      alert('Invalid username or password');
    }
  });
  