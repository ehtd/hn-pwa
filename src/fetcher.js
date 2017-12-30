
export default function fetchURL(url) {
	return new Promise((resolve, reject) => {
		fetch(url)
		.then((resp) => resp.json())
		.then((data) => {
			resolve(data);
		})
		.catch( (error) => {
			reject(error);
		});
	});
}

