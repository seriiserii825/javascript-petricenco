document.addEventListener('DOMContentLoaded', () => {
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

	}
	tabs();

	let timer = function () {
		const deadline = '2020-08-20';

		const setTimer = function (deadline) {
			const newDate = new Date();
			const timeRemaining = Date.parse(deadline) - Date.parse(newDate);
			const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
			const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
			const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
			const seconds = Math.floor((timeRemaining / 1000) % 60);

			if (timeRemaining <= 0) {
				clearInterval(timerInterval);
			}

			return {
				timeRemaining: timeRemaining,
				days: days,
				hours: hours,
				minutes: minutes,
				seconds: seconds
			};
		};

		function addZero(num) {
			if (num >= 0 && num < 10) {
				return `0${num}`;
			} else {
				return num;
			}
		}

		function updateTimer() {
			const days = document.querySelector('#days');
			const hours = document.querySelector('#hours');
			const minutes = document.querySelector('#minutes');
			const seconds = document.querySelector('#seconds');

			const getData = setTimer(deadline);

			days.innerHTML = addZero(getData.days) + '';
			hours.innerHTML = addZero(getData.hours) + '';
			minutes.innerHTML = addZero(getData.minutes) + '';
			seconds.innerHTML = addZero(getData.seconds) + '';
		}

		updateTimer();

		let timerInterval = setInterval(function () {
			updateTimer();
		}, 1000);

	};
	timer();
});
