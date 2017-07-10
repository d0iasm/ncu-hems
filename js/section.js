(function() {
  // var hoge = document.getElementById("hoge");
  // var menuItems =  document.querySelector('.menu-item');
  var menuItems = document.getElementsByClassName('menu-item');
  menuItems.addEventListener("click", menuClick(event), false);
  // document.getElementById("hoge").addEventListener("click", function( event ) {
  //   console.log("hoge");
  //   event.target.textContent = "click count: " + event.detail;
  // }, false);
})

function addSection(){
  var menu =  document.querySelector('.menu');
  var section = document.createElement('li');
  section.classList.add('menu-item');
  section.textContent = 'hoge';
  menu.appendChild(section);
}

function removeSection(e){
  var currentMenuItem = e.target.parentNode;
  currentMenuItem.parentNode.removeChild(currentMenuItem);
}

function removeAction(){
  var menuItems =  document.querySelectorAll('.menu-item');
  for(var i=0; i<menuItems.length; i++){
    menuItems[i].classList.remove('active');
  }
}

function menuClick(e){
  // var menuItems =  document.querySelectorAll('.menu-item');
  // menuItem.classList.remove('active');
  // menuItem.classList.add('active');
  // div.classList.toggle("visible");
  // for(var i=0; i<menuItems.length; i++){
  //   menuItems[i].classList.toggle('active');
  // }
  console.log("hoge");
  console.log(e.target);
}
