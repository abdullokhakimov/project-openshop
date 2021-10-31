const navbarBtn = document.querySelector('.navbar__btn');
const navbarNav = document.querySelector('.navbar__nav');

navbarBtn.addEventListener('click', function(){
  if(navbarBtn.classList.contains('active')){
    navbarBtn.classList.remove('active')
    navbarNav.style = 'left: -280px; transition: left 0.3s'
  }else{
    navbarBtn.classList.add('active')
    navbarNav.style = 'left: 0px; transition: left 0.3s'
  }
})
document.addEventListener('mouseup', function(){
  if(navbarBtn.classList.contains('active')){
    navbarBtn.classList.remove('active')
    navbarNav.style = 'left: -280px; transition: left 0.3s'
  }
})
navbarNav.addEventListener('mouseup', function(e){
  e.stopPropagation();
})