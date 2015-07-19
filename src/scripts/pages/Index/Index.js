import React from 'react';
import DocumentTitle from 'react-document-title';

import Header from './Header';
import Footer from './Footer';

import './Index.css';

export default class Index {
  render() {
    return (
      <DocumentTitle title='Index'>
        <section className='page page--index'>
          <Header />
          <Footer />
        </section>
      </DocumentTitle>
    );
  }
}
