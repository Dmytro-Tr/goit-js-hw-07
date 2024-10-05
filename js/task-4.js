const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }

  const elements = event.target.elements;
  const info = {
    email: elements.email.value,
    password: elements.password.value,
  };

  console.log(info);
  event.target.reset();
}

//-----style-----

loginForm.style.display = 'flex';
loginForm.style.flexDirection = 'column';
loginForm.style.justifyContent = 'center';
loginForm.style.alignItems = 'center';
loginForm.style.gap = '24px';

const button = document.querySelector('button');
button.style.borderRadius = '8px';
button.style.border = 'none';
button.style.width = '86px';
button.style.height = '40px';
button.style.backgroundColor = '#4e75ff';
button.style.color = '#fff';
