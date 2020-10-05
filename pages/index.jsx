import { useSession } from 'next-auth/client';
import Preloader from '../components/Preloader';

const index = () => {
  const [session, loading] = useSession();

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className='container'>
      {session ? (
        <div className='card black white-text'>
          <div className='card-image'>
            <img
              src={session.user.image}
              alt={session.user.name}
              className='responsive-img'
              style={{ height: '20rem', width: '20rem' }}
            />
            <span className='card-title'>{session.user.name}</span>
          </div>
        </div>
      ) : (
        <p className='flow-text center red-text'>You must login first.</p>
      )}
    </div>
  );
};

export default index;
