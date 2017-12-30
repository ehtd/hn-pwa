import React from 'react';

const Story = (props) => {
	const data = props.data;

	const kids = data.kids || [];
	return (
		<ul className="">
			<li>{props.index}</li>
			<li>{data.title}</li>
			<li>{kids.length}</li>
		</ul>
	);
}

export default Story;


