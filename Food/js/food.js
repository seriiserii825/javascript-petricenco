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

	new MenuCard(
		"img/tabs/vegy.jpg",
		"vegy",
		'Меню "Фитнес"',
		'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
		9,
		'.menu .container'
	).render();
	new MenuCard(
		"img/tabs/elite.jpg",
		"elite",
		'Меню “Премиум”',
		'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
		8,
		'.menu .container',
		'menu__item'
	).render();
	new MenuCard(
		"img/tabs/post.jpg",
		"post",
		'Меню "Постное"',
		'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
		6,
		'.menu .container',
		'menu__item',
		'big'
	).render();
});