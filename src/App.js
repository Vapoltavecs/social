import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/header';
import store from '../src/redux/state'
import ImagesPage from './components/pages/imagesPage/images';
import TapePage from './components/pages/tape/tape';
import Profile from './components/pages/profile/profile';
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header registrated={store} />
        <div className = "container">
          <Route path="/friends" render={() => dispatchEvent} />
          <Route path="/galery" render={() => <ImagesPage images={store.getState()} />} />
          <Route path="/tape" render={() => <TapePage data={store.getState()} />} />
          <Route exact path="/" render={() => <TapePage data={store.getState()} />} />
          <Route  path="/profile" render={() => <Profile data={store.getState().User} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
