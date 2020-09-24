function cards() {
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
}

export default cards;