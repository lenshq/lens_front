import React from 'react';

import './Header.css';

export default class Header {
  render() {
    return (
      <header className='header'>
        <div className='header__content'>
          <div className='promo'>
            <h1 className='promo__title'>Lens</h1>
            <p className='promo__desc'>Smart profiling tool for Rails apps.</p>
          </div>
          <a href='#' className='button button--sign-in'>
            <span className='icon icon--github'></span>
            Sign in with GitHub
          </a>
        </div>
      </header>
    );
  }
}
