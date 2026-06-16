import { FeedContext } from '../../shared/context/FeedContext';
import { useContext, useEffect } from 'react';
import './Main.scss';
import FeedList from './components/FeedList/FeedList';
import { ViewContext } from '../../shared/context/ViewContext';
import GridIcon from '@/assets/icons/btn-grid.svg?react';
import ListIcon from '@/assets/icons/btn-list.svg?react';
import classNames from 'classnames';

export default function Main() {
  const { setFeed } = useContext(FeedContext);
  const { view, setView } = useContext(ViewContext);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}feed.json`)
      .then(response => response.json())
      .then(data => setFeed(data));
  }, []);

  return (
    <main className="main">
      <div className="main__container">
        <div className="main__btn-controls">
          <button className="main__btn" onClick={() => setView('grid')}>
            <GridIcon
              className={classNames('main__btn-icon', {
                'main__btn-icon--active': view === 'grid',
              })}
            />
          </button>
          <button className="main__btn" onClick={() => setView('list')}>
            <ListIcon
              className={classNames('main__btn-icon', {
                'main__btn-icon--active': view === 'list',
              })}
            />
          </button>
        </div>
        <FeedList />
        <button className="main__btn-bottom">LOAD MORE</button>
      </div>
    </main>
  );
}
