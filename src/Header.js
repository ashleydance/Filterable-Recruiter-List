import React, { Component } from 'react';

function Header() {
  return (
    <header className="App-header">
      <div class="navigation">
        <a href="https://github.com/ashleydance/filterable-recruiter-list" target="_blank">
          Github Link
        </a>
        <p>Created by <a href="https://ashleydance.co.uk" target="_blank">Ashley Dance</a></p>
      </div>
      <h1 className="App-title">
        <span role="img" aria-label="Poop Emoji">💩</span>
        Recruiters
      </h1>
      <p>An filterable list of Recruiters to avoid. <br />Shoutout to <a href="https://github.com/alexmbird/uk-it-recruiter-domains" target="_blank">Alex Hewson</a> for the list.</p>
    </header>
  )
}

export default Header;