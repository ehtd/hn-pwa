import fetchURL from './fetcher';

export default class ContentProvider {
	constructor(baseURL, contentPath) {
		this.state = {
			fetching: false,
			itemIDs: [],
			items: {},
			baseURL: baseURL,
			contentPath: contentPath
		}
	}

	fetchItem(id) {
		return new Promise((resolve, reject) => {
			fetchURL(`${this.state.baseURL}item/${id}.json`)
			.then((story) => {
				this.state.items[id] = story;
				resolve();
			})
			.catch((error) => {
				console.log("failed to download: ",id);
				reject();
			});
		});
	}

	createQueue(ids, start, end) {
		return ids.map((id) => this.fetchItem(id));
	}

	load() {
		const url = this.state.baseURL+this.state.contentPath;
		return new Promise((resolve, reject) => {
			fetchURL(url)
			.then((ids) => {
				this.state.itemIDs = ids;
	
				const max = 20;
				const list = ids.slice(0, max);
				const queue = this.createQueue(list);
	
				Promise
				.all(queue)
				.then(() => {
					const data = ids.slice(0,max).map((id) => this.state.items[id]);
					resolve(data);
				})
				.catch((error) => {
					reject(error);
				});
			})
			.catch((error) => {
				reject(error);
			})
		});
	}
}