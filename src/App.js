import React, { Component } from 'react';
import domains from './json/recruiters.json';
import Header from './Header';
import FilterableRecruitersList from './FilterableRecruitersList';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <FilterableRecruitersList domains={domains} />
      </div>
    );
  }
}

export default App;