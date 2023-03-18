import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import {
  faTrashAlt,
  faSquareCaretUp,
  faSquareCheck,
  faStarHalf,
} from '@fortawesome/free-regular-svg-icons';

interface FooterProps {
  // Define the props here
}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <div className='py-5 bg-slate-100 dark:bg-slate-800'>
      <footer className='flex flex-col w-11/12 mx-auto'>
        <ul className='social-media-icons'>
          <li>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noopener noreferrer'>
              <FontAwesomeIcon
                icon={faAnglesDown}
                className='text-slate-800 dark:text-slate-100'
              />
            </a>
          </li>
          <li>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noopener noreferrer'>
              <FontAwesomeIcon
                icon={faTrashAlt}
                className='text-slate-800 dark:text-slate-100'
              />
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/'
              target='_blank'
              rel='noopener noreferrer'>
              <FontAwesomeIcon
                icon={faSquareCaretUp}
                className='text-slate-800 dark:text-slate-100'
              />
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/'
              target='_blank'
              rel='noopener noreferrer'>
              <FontAwesomeIcon
                icon={faSquareCheck}
                className='text-slate-800 dark:text-slate-100'
              />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/'
              target='_blank'
              rel='noopener noreferrer'>
              <FontAwesomeIcon
                icon={faStarHalf}
                className='text-slate-800 dark:text-slate-100'
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
