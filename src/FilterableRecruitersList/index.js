import React, { Component } from 'react';
import Searchbar from './Searchbar';
import RecruitersList from './RecruitersList';

class FilterableRecruitersList extends Component {

  constructor(props) {
    super(props);
		this.state = {filterText: ''};
		this.handleChange = this.handleChange.bind(this);
  }

	handleChange(event) {
		this.setState({filterText: event.target.value});
	}

	render() {
		return (
			<div>
				<Searchbar filterText={this.state.filterText} handleChange={this.handleChange}/>
				<RecruitersList
					filterText={this.state.filterText}
					domains={this.props.domains}
				/>
			</div>
		);
	}
}

export default FilterableRecruitersList;