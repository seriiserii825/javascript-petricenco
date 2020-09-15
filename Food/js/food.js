document.addEventListener('DOMContentLoaded', () => {
	//tabs
	let tabs = function () {
		const tabcontent = document.querySelectorAll('.tabcontent');
		const tabheaderItem = document.querySelectorAll('.tabheader__item');
		const tabheaderItems = document.querySelector('.tabheader__items');

		const hideTabs = () => {
			tabcontent.forEach((item) => {
				item.classList.remove('show', 'fade');
				item.classList.add('hide');
			});
			tabheaderItem.forEach(item => {
				item.classList.remove('tabheader__item_active');
			});
		};

		const showTabs = function (i = 0) {
			tabcontent[i].classList.remove('hide');
			tabcontent[i].classList.add('show', 'fade');
			tabheaderItem[i].classList.add('tabheader__item_active');
		};

		hideTabs();
		showTabs();

		tabheaderItems.addEventListener('click', function (e) {
			e.preventDefault();
			const target = e.target;

			tabheaderItem.forEach((item, i) => {
				if (target && (target === item)) {
					hideTabs();
					showTabs(i);
					item.classList.add('tabheader__item_active');
				}
			});
		});

	};
	tabs();

	//timer
	const deadline = '2020-11-17';

	function getTimeRemaining(endtime) {
		const total = Date.parse(endtime) - Date.parse(new Date());
		const days = Math.floor(total / (1000 * 60 * 60 * 24));
		const hours = Math.floor((total / (1000 * 60 * 60) % 24));
		const minutes = Math.floor((total / (1000 * 60) % 60));
		const seconds = Math.floor((total / (1000) % 60));

		return { total, days, hours, minutes, seconds };
	}

	function addZero(num) {
		if(num > 0 && num < 10){
			return `0${num}`;
		}else{
			return num;
		}
	}

	function setClock(selector, endtime){
		const timer = document.querySelector('.timer');
		const days = timer.querySelector('#days');
		const hours = timer.querySelector('#hours');
		const minutes = timer.querySelector('#minutes');
		const seconds = timer.querySelector('#seconds');
		const timerInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock(){
			const time = getTimeRemaining(endtime);
			days.innerHTML = addZero(time.days);
			hours.innerHTML = addZero(time.hours);
			minutes.innerHTML = addZero(time.minutes);
			seconds.innerHTML = addZero(time.seconds);
		}
	}

	setClock('.timer', deadline);
});