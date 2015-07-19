import React from 'react';
import DocumentTitle from 'react-document-title';

import './Index.css';

export default class Index {
  render() {
    return (
      <DocumentTitle title='Lens ­ smart profiling tool for Rails apps.'>
        <section className='page page--index'>
          <header className='promo'>
            <div className='promo__content'>
              <h1 className='promo__title'>Lens</h1>
              <p className='promo__desc'>
                Smart profiling tool for Rails apps.
              </p>
            </div>
            <a href='#' className='button button--sign-in'>
              <span className='icon icon--github'></span>
              Sign in with GitHub
            </a>
          </header>
        </section>
      </DocumentTitle>
    );
  }
}
