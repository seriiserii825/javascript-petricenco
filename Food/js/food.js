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

	let modal = function () {
		const modal = document.querySelector('.modal');
		const modalOpenBtn = document.querySelectorAll('[data-modal-open]');
		const modalCloseBtn = document.querySelector('.modal__close');

		modalOpenBtn.forEach((btn => {
			btn.addEventListener('click', openModal);
		}));

		function openModal() {
			modal.classList.add('show');
			document.body.style.overflow = 'hidden';
			clearInterval(modalTimeOutId);
		}

		function closeModal() {
			modal.classList.remove('show');
			document.body.style.overflow = '';
		}

		modalCloseBtn.addEventListener('click', closeModal);

		modal.addEventListener('click', function (e) {
			if (e.target === modal) {
				closeModal();
			}
		});

		document.addEventListener('keydown', function (e) {
			if (e.code === 'Escape') {
				closeModal();
			}
		});

		let modalTimeOutId = setTimeout(function () {
			openModal();
		}, 5000);

		function showModalByScroll() {
			if (window.pageYOffset + document.documentElement.clientHeight === document.documentElement.scrollHeight) {
				openModal();
				window.removeEventListener('scroll', showModalByScroll);
			}
		}

		window.addEventListener('scroll', showModalByScroll);
	};
	// modal();

	class Card {
		constructor(title, imgPath, alt, content, price, parrent) {
			this.title = title;
			this.imgPath = imgPath;
			this.content = content;
			this.price = price;
			this.priceConvertor = 27;
			this.alt = alt;
			this.exchange();
			this.parrent = parrent;
		}

		exchange(){
			this.price = this.price * this.priceConvertor;
		}

		render(){
			const div = document.createElement('div');
			div.innerHTML = `
			
			`;
		}
	}

	const cards = [
		{
			title: 'Меню "Фитнес"',
			imgPath: "img/tabs/vegy.jpg",
			content: 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
			price: 229
		},
		{
			title: 'Меню “Премиум”',
			imgPath: "img/tabs/elite.jpg",
			content: 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
			price: 550
		},
		{
			title: 'Меню "Постное"',
			imgPath: "img/tabs/post.jpg",
			content: 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
			price: 430
		},
	];

	const menuContainer = document.querySelector('.menu__field .container');
	let html = '';
	for (let card of cards) {
		const cardObject = new Card(card.title, card.imgPath, card.content, card.price);

		html += '<div class="menu__item">';
		html += `<img src="${cardObject.imgPath}" alt="vegy">`;
		html += `<h3 class="menu__item-subtitle">${cardObject.title}</h3>`;
		html += `<div class="menu__item-descr">${cardObject.content}</div>`;
		html += `<div class="menu__item-divider"></div>`;
		html += `<div class="menu__item-price">`;
		html += `<div class="menu__item-cost">Цена:</div>`;
		html += `<div class="menu__item-total"><span>${cardObject.price}</span> грн/день</div>`;
		html += `</div>`;
		html += '</div>';
	}
	menuContainer.innerHTML = html;
});