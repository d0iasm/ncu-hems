function addSection(){
  var menu =  document.querySelector('.menu');
  var newSection = document.createElement('li');
  newSection.classList.add('menu-item');
  if(menu.childElementCount == 0){
    newSection.classList.add('active');
  }
  newSection.setAttribute('onclick', 'addActive(event)');
  newSection.innerHTML = ''+
    '<span class="cross" onclick="removeSection(event)">×</span>'+
    '<span class="from">1</span> ~ <span class="to">5</span>';
  menu.appendChild(newSection);
}

function removeSection(e){
  var currentMenuItem = e.target.parentNode;
  // TODO: 現在のactiveを消したら他の要素をactiveにする
  // if(currentMenuItem.className = 'active'){
  //   currentMenuItem.nextElementSibling.classList.add('active');
  // }
  currentMenuItem.parentNode.removeChild(currentMenuItem);
}

function addActive(e){
  removeActive();
  if(e.target.tagName == 'LI'){
    e.target.classList.add('active');
  }else{
    e.target.parentNode.classList.add('active');
  }
}

function removeActive(){
  var menuItems =  document.querySelectorAll('.menu-item');
  for(var i=0; i<menuItems.length; i++){
    menuItems[i].classList.remove('active');
  }
}
