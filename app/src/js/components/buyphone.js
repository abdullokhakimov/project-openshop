const mainImg = document.querySelector('.buyphone__main-img img');
const tabImg = document.querySelectorAll('.buyphone__tabs__img img');

tabImg.forEach(function(img){
	img.addEventListener('click', function(){
		mainImg.src=`${img.src}`;
	})
})