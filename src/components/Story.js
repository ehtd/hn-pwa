import React from 'react';

class Story extends React.Component {

	constructor() {
		super();

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {

	}

	render() {
		const data = this.props.data;

		const kids = data.kids || [];
		return (
			<ul className="">
				<li>{this.props.index}</li>
				<li><a href={data.url} onClick={this.handleClick}>{data.title}</a></li>
				<li>{kids.length}</li>
			</ul>
		);
	}
}

export default Story;


