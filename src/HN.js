import { ContentEnum } from './ContentEnum';
import ContentProvider from './ContentProvider';

export default class HN {
	constructor(contentType) {
		const baseURL = 'https://hacker-news.firebaseio.com/v0/';

		let contentPath = '';
		switch(contentType) {
			case ContentEnum.TOP:
				contentPath = 'topstories.json';
				break;

			case ContentEnum.NEW:
				contentPath = 'newstories.json';
				break;

			case ContentEnum.ASK:
				contentPath = 'askstories.json';
				break;

			case ContentEnum.SHOW:
				contentPath = 'showstories.json';
				break;

			case ContentEnum.JOBS:
				contentPath = 'jobstories.json';
				break;

			default:
				break;
		}

		this.contentProvider = new ContentProvider(baseURL, contentPath);
	}

	fetch() {
		this.contentProvider.load();
	}
}