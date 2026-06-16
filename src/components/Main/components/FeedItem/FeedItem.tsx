import { Feed } from '../../../../shared/types/Feed';
import './FeedItem.scss';
import { ViewContext } from '../../../../shared/context/ViewContext';
import { useContext } from 'react';
import classNames from 'classnames';
import FeedContent from '../FeedContent/FeedContent';

type FeedItemType = {
  post: Feed;
};

export default function FeedItem({ post }: FeedItemType) {
  const { view } = useContext(ViewContext);

  return (
    <div
      className={classNames('feed-item', {
        'feed-item--grid': view === 'grid',
      })}
    >
      <div
        className={classNames('feed-item__img-wrapper', {
          'feed-item__img-wrapper--grid': view === 'grid',
        })}
      >
        <img
          className={classNames('feed-item__img', {
            'feed-item__img--grid': view === 'grid',
          })}
          src={post.image}
          alt="post image"
        />
      </div>
      <div
        className={classNames('feed-item__content', {
          'feed-item__content--grid': view === 'grid',
        })}
      >
        <FeedContent post={post} />
        <div
          className={classNames('feed-item__dateInfo', {
            'feed-item__dateInfo--grid': view === 'grid',
          })}
        >
          <p className="feed-item__dateInfo-text">{post.type}</p>
          <p className="feed-item__dateInfo-text">{post.uploadDate}</p>
        </div>
      </div>
    </div>
  );
}
