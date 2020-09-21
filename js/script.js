//https://jsonplaceholder.typicode.com/

// function showJsonData(data) {
// 	console.log(data);
// 	let ul = document.createElement('ul');
// 	data.forEach((item) => {
// 		ul.innerHTML += `
// 			<li>
// 				<strong>${item.id}</strong> ${item.title}
// 				<ul>
// 					<li>${item.body}</li>
// 				</ul>
// 			</li>
// 		`;
// 	});
// 	document.body.append(ul);
// }

// fetch('https://jsonplaceholder.typicode.com/photos')
// 	.then(response => response.json())
// 	.then(json => showJsonData(json));


// function showJsonPhotos(data) {
// 	let ul = document.createElement('ul');
// 	data.some((item, i) => {
// 		ul.innerHTML += `
// 			<li>
// 				<img src="${item.url}" alt="">
// 			</li>
// 		`;
// 		return i === 10;
// 	});
// 	document.body.append(ul);
// }
//
// fetch('https://jsonplaceholder.typicode.com/photos')
// 	.then(response => response.json())
// 	.then(json => showJsonPhotos(json));


fetch('https://jsonplaceholder.typicode.com/posts',{
		method: "POST",
		body: JSON.stringify({name: 'Alex'}),
		headers: {
			'Content-type': 'application/json'
		}
	})
	.then((response) => response.json())
	.then(json => console.log(json));