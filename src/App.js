import React, { Component } from 'react';
import RecruitersJSON from './json/recruiters.json';
import RecruitersList from './RecruitersList';
import './App.css';
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><span role="img" aria-label="Poop Emoji">💩</span> Recruitment Companies</h1>
        </header>
        <RecruitersList recruiters={RecruitersJSON} />
      </div>
    );
  }
}

export default App;