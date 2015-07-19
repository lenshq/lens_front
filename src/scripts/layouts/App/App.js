import React, { Component } from 'react';
import { RouteHandler } from 'react-router';
import DocumentTitle from 'react-document-title';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <DocumentTitle title='Lens'>
        <div className='app'>
          <RouteHandler />
        </div>
      </DocumentTitle>
    );
  }
}
