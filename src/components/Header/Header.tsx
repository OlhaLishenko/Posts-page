import './Header.scss';
import { images } from '../../global-assets/static';
import Calendar from './components/Calendar/Calendar';
import { getCurrentDay } from '../../shared/utils/getCurrentDay';
import { useCallback, useContext, useMemo } from 'react';
import { headerBtnTitle } from '../../shared/variables/textContent';
import { StartCalendarContext } from '../../shared/context/StartCalendarData';

export default function Header() {
  const { from } = useContext(StartCalendarContext);
  const currentData = useCallback(() => getCurrentDay(), []);

  const userInfo = [
    { label: 'posts', value: '870' },
    { label: 'followers', value: '11,787' },
    { label: 'following', value: '112' },
  ];

  const btnTitle = useMemo(() => {
    if (!from) {
      return `${headerBtnTitle} ${currentData()}`;
    }

    const day = String(from.getDate()).padStart(2, '0');
    const month = String(from.getMonth() + 1).padStart(2, '0');
    const year = from.getFullYear();

    return `${headerBtnTitle} ${day}-${month}-${year}`;
  }, [from, currentData]);

  return (
    <header className="header">
      <div className="header__logo-container">
        <img className="header__logo" src={images.logo} alt="Logo" />
      </div>
      <div className="header__info">
        <div className="header__info-title">
          <h1 className="header__info-title-text">monblanproject</h1>
          <button className="header__info-title-btn">{btnTitle}</button>
        </div>
        <ul className="header__list">
          {userInfo.map((item, index) => (
            <li key={index} className="header__list-item">
              <p className="header__list-item header__list-item--value">
                {item.value}
              </p>
              <p className="header__list-item header__list-item--label">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
        <div className="header__calendar">
          <Calendar />
        </div>
      </div>
    </header>
  );
}
