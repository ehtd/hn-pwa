import React from 'react';
import '../css/Story.css';

class Story extends React.Component {

	render() {
		const data = this.props.data;

		const kids = data.kids || [];
		return (
			<div className="container-horizontal">
				<div className="circle-container">{this.props.index}</div>
				<div className="title-label"><a href={data.url}>{data.title}</a></div>
				<div className="circle-container">{kids.length}</div>
			</div>
		);
	}
}

export default Story;


