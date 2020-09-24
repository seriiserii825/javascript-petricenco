function modal() {
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
}

// window.addEventListener('scroll', showModalOnScroll);
export default modal;