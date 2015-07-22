import React from 'react';
import DocumentTitle from 'react-document-title';

import './Index.css';

export default class Index {
  render() {
    return (
      <DocumentTitle title='LensHQ ­ smart profiling tool for Rails apps.'>
        <section className='page page--index'>
          <header className='promo'>
            <div className='promo__content'>
              <h1 className='promo__title'>LensHQ</h1>
              <p className='promo__desc'>
                Smart profiling tool for Rails apps.
              </p>
            </div>
            <a href='#' className='button button--bordered'>
              <span className='icon icon--large icon--github'></span>
              <span className='button__label'>Sign in with GitHub</span>
            </a>
          </header>
        </section>
      </DocumentTitle>
    );
  }
}
