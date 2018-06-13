import React, { Component } from 'react';

class RecruitersList extends Component {
	render() {

    let filteredDomains = this.props.domains.filter(
      domain => {
        return domain.startsWith(this.props.filterText.toLowerCase()) === true;
      }
    );

	  return (
      <ul className="recruiters-list">
        {filteredDomains.map((element, index) =>
          <li key={element}>{element}</li>
        )}
      </ul>
		);
	}
}

export default RecruitersList;