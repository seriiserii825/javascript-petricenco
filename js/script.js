window.addEventListener('DOMContentLoaded', function () {
	const box = document.querySelector('.box');
	const btn = document.querySelector('.box-button');

	const boxFullHeight = box.scrollHeight;
	const boxHeight = box.offsetHeight;
	const boxScrollTop = box.scrollTop;
	const boxOffsetTop = box.offsetTop;

	// btn.addEventListener('click', function (){
	// 	if(box.classList.contains('opened')){
	// 		box.style.height = boxHeight + 'px';
	// 		box.classList.remove('opened');
	// 	}else{
	// 		box.style.height = boxFullHeight + 'px';
	// 		box.classList.add('opened');
	// 	}
	// });

	btn.addEventListener('click', function () {
		document.documentElement.scrollTop = boxOffsetTop;
	});
});