function editSection(){
  var menu =  document.querySelector('.menu');
  var section = document.createElement('li');
  section.classList.add('menu-item')
  section.textContent = 'hoge';
  menu.appendChild(section);
}
