const slider = document.querySelector('.slider');
const sliderItems = document.querySelector('.slider__items');
const slideList = document.querySelectorAll('.slide');
const slideContentBtn = document.querySelectorAll('.slide__content a')

let activeSlide = 0;
let dir = 'X';
let timeMove = 1000;
let moveSlide = 100;

// расположение
slideList.forEach(function(slide, num){
	if(num != activeSlide){
		slide.style.transform = `translate${dir}(${moveSlide}%)`;
	}
	if(num === slideList.length - 1){
		slide.style.transform = `translate${dir}(${-moveSlide}%)`;
	}
})




// mousemove
// let interval = 3000;
// let intervalSlide = setInterval(() => {
// 	activeSlide++;
// }, interval);
// slider.addEventListener('mouseenter', function(){
// 	clearInterval(intervalSlide);
// })
// slider.addEventListener('mouseleave', function(){
// 	intervalSlide = setInterval(() => {
// 		activeSlide++;
// 	}, interval);
// })




// dots
const ul = document.createElement('ul');
ul.classList.add('slider__dots');
slideList.forEach(function(slide, key){
	const li = document.createElement('li');
	ul.appendChild(li);
})
sliderItems.appendChild(ul);
const sliderDots = document.querySelectorAll('.slider__dots li');
sliderDots[activeSlide].classList.add('active');

sliderDots.forEach(function(dot, key){
	dot.addEventListener('click', function(){dotsMove(key)});
})
let active = true;

function dotsMove(dotKey){
	if(active && dotKey !=activeSlide){
		slideList.forEach(function(slide, key){
			slide.style.transition = '0ms';
		})
		active = false;
		sliderDots.forEach(function(dot){
			dot.classList.remove('active');
		})
		let moveLeftOrRight = dotKey > activeSlide ? -moveSlide : moveSlide
		slideList[dotKey].style.transform = `translate${dir}(${-moveLeftOrRight}%)`;
		setTimeout(() => {
			slideList[activeSlide].style.transform = `translate${dir}(${moveLeftOrRight}%)`;
			slideList[activeSlide].style.transition = `${timeMove}ms`;
			sliderDots[activeSlide].classList.remove('active');

			activeSlide = dotKey;

			slideList[activeSlide].style.transform = `translate${dir}(${0}%)`;
			slideList[activeSlide].style.transition = `${timeMove}ms`;
			sliderDots[activeSlide].classList.add('active');
		}, 200);
		setTimeout(() => {
			active = true;
		}, timeMove + 200);
	}
}


