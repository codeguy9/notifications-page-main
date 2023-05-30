let button = document.getElementsByTagName('button')
let tab = document.querySelector('.selected-tab')

button.addEventListener('click', () => {
  tab.classList.add('inactive');
})