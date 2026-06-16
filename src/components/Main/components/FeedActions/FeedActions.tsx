import { useContext } from 'react';
import { icons } from '../../../../global-assets/static';
import { Feed } from '../../../../shared/types/Feed';
import { ViewContext } from '../../../../shared/context/ViewContext';
import classNames from 'classnames';
import './FeedActions.scss';

type FeedActionsType = {
  stasticItem: {
    id: number;
    title: string;
    value: Feed['today'] | Feed['posted'];
  };
};

export default function FeedActions({ stasticItem }: FeedActionsType) {
  const { view } = useContext(ViewContext);

  return (
    <div
      className={classNames('feedActions', {
        'feedActions--grid': view === 'grid',
      })}
    >
      <div className="feedActions__item">
        <img className="feedActions__item-icon" src={icons.like} alt="likes" />
        <span className="feedActions__item-value">
          {stasticItem.value.likes}
        </span>
      </div>
      <div className="feedActions__item">
        <img
          className="feedActions__item-icon"
          src={icons.comment}
          alt="comments"
        />
        <span className="feedActions__item-value">
          {stasticItem.value.comments}
        </span>
      </div>
    </div>
  );
}
