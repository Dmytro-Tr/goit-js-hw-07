const input = document.querySelector('input');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

let sizes = 30;

create.addEventListener('click', createMarcup);
destroy.addEventListener('click', () => {
  input.value = '';
  clear();
});

function clear() {
  boxes.innerHTML = '';
  sizes = 30;
}

function createMarcup() {
  if (input.value < 1 || input.value > 100) {
    // console.log('error');
    return;
  }
  createBoxes(input.value);
}

const fragment = document.createDocumentFragment();

function createBoxes(amount) {
  input.value = '';
  clear();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${sizes}px`;
    box.style.height = `${sizes}px`;
    box.style.backgroundColor = getRandomHexColor();

    fragment.append(box);
    sizes += 10;
  }
  boxes.append(fragment);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//---style---
input.style.width = '150px';
input.style.height = '40px';
input.style.textAlign = 'center';
input.style.borderRadius = '8px';
input.style.marginRight = '16px';

create.style.width = '120px';
create.style.height = '40px';
create.style.textAlign = 'center';
create.style.background = '#4e75ff';
create.style.borderRadius = '8px';
create.style.marginRight = '16px';

destroy.style.width = '120px';
destroy.style.height = '40px';
destroy.style.textAlign = 'center';
destroy.style.background = '#ff4e4e';
destroy.style.borderRadius = '8px';

const controls = document.querySelector('#controls');
controls.style.backgroundColor = '#f6f6fe';
controls.style.borderRadius = '8px';
controls.style.padding = '32px';
controls.style.width = '496px';
controls.style.height = '104px';
controls.style.marginBottom = '16px';

boxes.style.display = 'flex';
boxes.style.flexWrap = 'wrap';
boxes.style.gap = '20px';
boxes.style.backgroundColor = '#f6f6fe';
boxes.style.borderRadius = '8px';
boxes.style.padding = '32px';
