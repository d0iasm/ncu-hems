function editSection(){
  var menu =  document.querySelector('.menu');
  var section = document.createElement('li');
  section.classList.add('menu-item');
  section.textContent = 'hoge';
  menu.appendChild(section);
}

function menuClick(){
  var menuItem =  document.querySelector('.menu-item');
  menuItem.classList.remove('active');
  menuItem.classList.add('active');
  console.log("hoge");
}
