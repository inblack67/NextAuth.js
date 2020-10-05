import React from 'react';

const about = () => {
  return (
    <div className='container center'>
      <p className='flow-text'>
        Next<span className='red-text'>Auth</span>
      </p>
      <p className='flow-text'>Github Authentication In Next.js</p>
      <hr />
      <br />
      <a
        href='https://github.com/inblack67/NextAuth.js'
        rel='noopener noreferrer'
        target='_blank'
      >
        <i className='fab fa-github fa-2x red-text'></i>
      </a>
    </div>
  );
};

export default about;
