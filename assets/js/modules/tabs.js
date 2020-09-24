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

export default tabs;