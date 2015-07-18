import React, { Component } from 'react';
import { RouteHandler } from 'react-router';
import DocumentTitle from 'react-document-title';

import Logo from '../../widgets/Logo';
import Header from '../../widgets/Header';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <DocumentTitle title='Lens'>
        <div className='app'>
          <Logo />
          <Header />
          <div className='app__content'>
            <RouteHandler />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
