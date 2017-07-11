function openModal(){
  var modalOverlay = document.createElement('div');
  var modalContent = document.getElementById('modal-content');
  modalOverlay.setAttribute('id', 'modal-overlay');
  modalOverlay.setAttribute('onclick', 'closeModal()');
  document.querySelector('body').appendChild(modalOverlay);
  modalContent.style.display = "inline";
}

function closeModal(){
  var modalOverlay = document.getElementById('modal-overlay');
  modalOverlay.parentNode.removeChild(modalOverlay);
  var modalContent = document.getElementById('modal-content');
  modalContent.style.display = "none";
}

function addSection(){
  var from = document.section.from.value;
  var to = document.section.to.value;
  if(!from || !to){
    return;
  }
  if(from > to){
    window.alert('開始ナンバーは終了ナンバーより小さい数字を入力してください。');
    return;
  }
  if(to > 15){
    window.alert('現在の登録機器は1~15番までです。');
    return;
  }

  var menu =  document.querySelector('.menu');
  var newSection = document.createElement('li');
  newSection.classList.add('menu-item');
  if(menu.childElementCount == 0){
    newSection.classList.add('active');
  }
  newSection.setAttribute('onclick', 'addActive(event, true)');
  newSection.innerHTML = ''+
    '<span class="cross" onclick="removeSection(event)">×</span>'+
    '<span class="from">'+ from +'</span> ~ <span class="to">'+ to +'</span>';
  menu.appendChild(newSection);

  closeModal();
  document.section.reset();
}

function removeSection(e){
  var currentMenuItem = e.target.parentNode;
  // TODO: 現在のactiveを消したら他の要素をactiveにする
  // if(currentMenuItem.className = 'active'){
  //   currentMenuItem.nextElementSibling.classList.add('active');
  // }
  currentMenuItem.parentNode.removeChild(currentMenuItem);
}

function addActive(e, isMenu){
  removeActive(isMenu);
  if(e.target.tagName == 'LI'){
    e.target.classList.add('active');
  }else{
    e.target.parentNode.classList.add('active');
  }
  update();
}

function removeActive(isMenu){
  if(isMenu){
    var items =  document.querySelectorAll('.menu-item');
  }else{
    var items =  document.querySelectorAll('.unit');
  }
  for(var i=0; i<items.length; i++){
    items[i].classList.remove('active');
  }
}

function update(){
  var js = document.querySelector('.js');
  js.parentNode.removeChild(js);

  var ele = document.createElement("script");
  ele.classList.add('js');
  ele.type = "text/javascript";
  ele.src = "./js/min/script.js";
  document.body.appendChild(ele);
}
