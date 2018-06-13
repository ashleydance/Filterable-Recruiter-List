import React, { Component } from 'react';

class Searchbar extends Component {
	render() {
		return (
      <form>
        <input
          type="text"
          placeholder="Filter List..."
          value={this.props.filterText}
          onChange={this.props.handleChange}
        />
      </form>
		);
	}
}

export default Searchbar;