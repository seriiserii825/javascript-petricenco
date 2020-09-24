function timer() {
	const deadline = '2020-11-17';

	function getTimeRemaining(endtime) {
		const total = Date.parse(endtime) - Date.parse(new Date());
		const days = Math.floor(total / (1000 * 60 * 60 * 24));
		const hours = Math.floor((total / (1000 * 60 * 60) % 24));
		const minutes = Math.floor((total / (1000 * 60) % 60));
		const seconds = Math.floor((total / (1000) % 60));

		return {total, days, hours, minutes, seconds};
	}

	function addZero(num) {
		if (num > 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	function setClock(selector, endtime) {
		const timer = document.querySelector('.timer');
		const days = timer.querySelector('#days');
		const hours = timer.querySelector('#hours');
		const minutes = timer.querySelector('#minutes');
		const seconds = timer.querySelector('#seconds');
		const timerInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const time = getTimeRemaining(endtime);
			days.innerHTML = addZero(time.days);
			hours.innerHTML = addZero(time.hours);
			minutes.innerHTML = addZero(time.minutes);
			seconds.innerHTML = addZero(time.seconds);
		}
	}

	setClock('.timer', deadline);
}

export default timer;
