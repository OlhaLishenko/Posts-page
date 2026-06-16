import './App.scss';
import AppContainer from './components/AppContainer/AppContainer';
import { images } from './global-assets/static';

export const App = () => (
  <div className="app">
    <div className="app__bg">
      <img
        className="app__bg-image"
        src={images.bgElementHeader}
        alt="Background Element"
      />
    </div>
    <AppContainer />
    <div className="app__bg app__bg--main">
      <img
        className="app__bg-image app__bg-image--main"
        src={images.bgElementMain}
        alt="Background Element"
      />
    </div>
  </div>
);
