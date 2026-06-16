import { useContext } from 'react';
import FeedItem from '../FeedItem/FeedItem';
import { FeedContext } from '../../../../shared/context/FeedContext';
import './FeedList.scss';
import classNames from 'classnames';
import { ViewContext } from '../../../../shared/context/ViewContext';

export default function FeedList() {
  const { feed } = useContext(FeedContext);
  const { view } = useContext(ViewContext);

  return (
    <div
      className={classNames('feedList', {
        'feedList--grid': view === 'grid',
      })}
    >
      {feed.map(post => (
        <FeedItem post={post} key={post.id} />
      ))}
    </div>
  );
}
