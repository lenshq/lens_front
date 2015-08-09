import React from 'react';

import './styles.css';

export default class Index {
  render() {
    return (
      <section className='page page--index'>
        <header className='promo'>
          <div className='promo__content'>
            <h1 className='promo__title'>LensHQ</h1>
            <p className='promo__desc'>
              Smart profiling tool for Rails apps.
            </p>
          </div>
          <a href={`${settings.apiRoot}/auth/github`} className='button button--bordered'>
            <span className='icon icon--large icon--github'></span>
            <span className='button__label'>Sign in with GitHub</span>
          </a>
        </header>
      </section>
    );
  }
}
