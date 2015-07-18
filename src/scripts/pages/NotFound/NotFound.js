import React from 'react';
import DocumentTitle from 'react-document-title';

export default class NotFound {
  render() {
    return (
      <DocumentTitle title='Page not found'>
        <section className='page'>
          <h1>There is no such page</h1>
        </section>
      </DocumentTitle>
    );
  }
}
