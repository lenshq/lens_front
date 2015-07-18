import React from 'react';
import { Link } from 'react-router';

import './Header.css';

export default class Header {
  render() {
    return (
      <header className='header'>
        <div className='container header__content'>
          <Link to='index' className='header__title'>Lens</Link>
          <p className='header__desc'>Profiling tool for Rails apps.</p>
        </div>
      </header>
    );
  }
}
