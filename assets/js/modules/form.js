function form() {
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
}
export default form;