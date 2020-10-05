import Link from 'next/link';
import Preloader from './Preloader';
import { Fragment, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/client';
import axios from 'axios';

const Navbar = () => {
  const [session, loading] = useSession();

  const authLinks = (
    <Fragment>
      <li>
        <div>
          {session && session.user && (
            <Fragment>
              Welcome <span className='red-text'>{session.user.name}</span>
            </Fragment>
          )}
        </div>
      </li>
      <li>
        <a onClick={signOut}>Logout</a>
      </li>
      <li>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <a onClick={() => signIn('github')}>Sign In With Github</a>
      </li>
      <li>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </li>
    </Fragment>
  );

  if (loading) {
    return <Preloader />;
  }

  return (
    <nav className='black'>
      <div className='nav-wrapper'>
        <div className='container'>
          <Link href='/'>
            <a className='brand-logo'>
              Next<span className='red-text'>Auth</span>
            </a>
          </Link>
          <ul className='right'>{session ? authLinks : guestLinks}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
