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

	//Modal
	const btnModalOpen = document.querySelectorAll('[data-modal-open]');
	const btnModalClose = document.querySelector('[data-modal-close]');
	const modal = document.querySelector('.modal');

	function modalClose() {
		document.body.style.overflow = '';
		modal.classList.remove('show');
		modal.classList.add('hide');
	}

	function modalOpen() {
		modal.classList.remove('hide');
		modal.classList.add('show');
		document.body.style.overflow = 'hidden';
	}

	// const modalTimerId = setTimeout(modalOpen, 4000);

	btnModalOpen.forEach(btn => {
		btn.addEventListener('click', modalOpen);
	});

	btnModalClose.addEventListener('click', modalClose);

	modal.addEventListener('click', (e) => {
		if (e.target === modal && modal.classList.contains('show')) {
			modalClose();
			// clearInterval(modalTimerId);
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape') {
			modalClose();
		}
	});

	function showModalOnScroll() {
		if ((document.documentElement.clientHeight + document.documentElement.scrollTop) >= document.documentElement.scrollHeight) {
			modalOpen();
			// window.removeEventListener('scroll', showModalOnScroll);
		}
	}

	// window.addEventListener('scroll', showModalOnScroll);

	//menu

	class MenuCard {
		constructor(src, alt, title, description, price, parentSelector, ...classes) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.description = description;
			this.parentSelector = parentSelector;
			this.curs = 27;
			this.price = price;
			this.exchange();
			this.classes = classes;
		}

		exchange() {
			this.price = this.price * this.curs;
		}

		render() {
			const element = document.createElement('div');

			if (this.classes.length === 0) {
				this.classes = 'menu__item';
				element.classList.add(this.classes);
			} else {
				this.classes.forEach((className) => element.classList.add(className));
			}

			element.innerHTML = `
				<img src=${this.src} alt=${this.alt}>
				<h3 class="menu__item-subtitle">${this.title}</h3>
				<div class="menu__item-descr">${this.description}</div>
				<div class="menu__item-divider"></div>
				<div class="menu__item-price">
					<div class="menu__item-cost">Цена:</div>
					<div class="menu__item-total">
						<span>${this.price}</span>
						грн/день
					</div>
				</div>
			`;
			document.querySelector(this.parentSelector).append(element);
		}
	}

	const getResources = async (url) => {
		const res = await fetch(url);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, error status ${res.status}`);
		}
		return await res.json();
	};
	getResources('http://localhost:5050/menu')
		.then(data => {
			data.forEach(item => {
				new MenuCard(item.img, item.altImg, item.title, item.descr, item.price, '.menu .container', 'menu__item', 'big').render();
			});
		});
	const form = document.querySelector('.order__form');
	const postData = async (url, data) => {
		const res = await fetch(url, {
			method: "POST",
			headers: {
				'Content-type': 'application/json'
			},
			body: data
		});

		return await res.json();
	};


	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const formData = new FormData(form);
		// const json1 = JSON.stringify(Object.fromEntries(formData.entries()));
		const object = {};
		formData.forEach((value, key) => {
			object[key] = value;
		});

		postData('http://localhost:5050/requests', JSON.stringify(object))
			.then(data => console.log(data)).catch(() => console.log('error'));
	});
});