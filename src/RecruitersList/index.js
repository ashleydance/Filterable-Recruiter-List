import React, { Component } from 'react';
import Searchbar from './Searchbar';

class RecruitersList extends Component {

	render() {

		const items = [];

		this.props.recruiters.forEach(element => {
			items.push(
				<div>{element}</div>
			);
		});

		return (
				<div>
						<Searchbar />
						{items}
				</div>
		);
	}
}

export default RecruitersList;