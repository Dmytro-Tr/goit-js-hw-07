const body = document.body;
const button = document.querySelector('.change-color');
const span = document.querySelector('.color');

button.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  button.style.color = body.style.backgroundColor;
  span.textContent = body.style.backgroundColor;
});

// Для генерування випадкового кольору використовуй функцію
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//-----style-----
const widget = document.querySelector('.widget');
widget.style.display = 'flex';
widget.style.flexDirection = 'column';
widget.style.textAlign = 'center';

button.style.border = 'none';
button.style.borderRadius = '8px';
button.style.padding = '8px 16px';
button.style.width = '148px';
button.style.height = '40px';
button.style.background = '#4e75ff';
button.style.color = '#ffffff';
button.style.margin = '0 auto';
button.style.boxShadow = '0px 0px 10px 2px #ffffff';
