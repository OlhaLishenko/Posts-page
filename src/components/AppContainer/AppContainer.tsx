import './AppContainer.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { FeedProvider } from '../../shared/context/FeedContext';
import { ViewProvider } from '../../shared/context/ViewContext';
import { StartCalendarProvider } from '../../shared/context/StartCalendarData';

function AppContainer() {
  return (
    <FeedProvider>
      <StartCalendarProvider>
        <ViewProvider>
          <div className="app-container">
            <Header />
            <Main />
          </div>
        </ViewProvider>
      </StartCalendarProvider>
    </FeedProvider>
  );
}

export default AppContainer;
