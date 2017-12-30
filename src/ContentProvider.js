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
			})
		});
	}

	createQueue(ids, start, end) {
		return ids.slice(start, end).map((id) => this.fetchItem(id));
	}

	load() {
		const url = this.state.baseURL+this.state.contentPath
		fetchURL(url)
    .then((ids) => {
      const queue = this.createQueue(ids, 0, 20);

			Promise
      .all(queue)
      .then(() => {
				console.log('Downloaded all.')
			})
      .catch((error) => {
        console.log(error);
        // reject(Error('Failed to upload slots'));
      });
    })
    .catch((error) => {
      console.log(error);
    })
	}
}