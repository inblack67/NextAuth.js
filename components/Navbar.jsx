import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='black'>
      <div className='nav-wrapper'>
        <div className='container'>
          <Link href='/'>
            <a className='brand-logo'>
              Next<span className='red-text'>Auth</span>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
