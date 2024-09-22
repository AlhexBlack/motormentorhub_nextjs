import Link from 'next/link';
import '@/styles/pages.module.css';

function NotFound() {
  return (
    <div className='notFoundPage'>
      <h1 className='four'>404</h1>
      <h3 className='nothing'>There's NOTHING here...</h3>
      <p className='exist'>...maybe the page you're looking for is not found or never existed</p>
      <button className='backHome'>
        <Link href="/">Go Back to Home</Link>
      </button>
    </div>
  );
}

export default NotFound;
