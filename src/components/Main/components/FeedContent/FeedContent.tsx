import './FeedContent.scss';
import { useContext, useMemo } from 'react';
import { Feed } from '../../../../shared/types/Feed';
import { ViewContext } from '../../../../shared/context/ViewContext';
import classNames from 'classnames';
import FeedActions from '../FeedActions/FeedActions';

type FeedContentType = {
  post: Feed;
};

export default function FeedContent({ post }: FeedContentType) {
  const { view } = useContext(ViewContext);

  const statistics = useMemo(
    () => [
      { id: 1, title: post.today.label, value: post.today },
      { id: 2, title: post.posted.date, value: post.posted },
    ],
    [post],
  );

  return (
    <>
      {statistics.map(item => (
        <div
          className={classNames('feedContent-container', {
            'feedContent-container--grid': view === 'grid',
          })}
          key={item.id}
        >
          <p className="feedContent-content__title">{item.title}</p>
          <FeedActions stasticItem={item} />
        </div>
      ))}
    </>
  );
}
