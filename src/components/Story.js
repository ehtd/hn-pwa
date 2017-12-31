import React from 'react';
import '../css/Story.css';

class Story extends React.Component {

	render() {
		const data = this.props.data;
		const name = `circle-${this.props.index % 10}`;
		const kids = data.kids || [];
		return (
			<div className="container-horizontal">
				<div className={name}>{this.props.index}</div>
				<div className="title-label"><a href={data.url}>{data.title}</a></div>
				<div className={name}>{kids.length}</div>
			</div>
		);
	}
}

export default Story;


