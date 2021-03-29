import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/header';
import ImagesPage from './components/pages/imagesPage/images';
import TapePage from './components/pages/tape/tape';
import Profile from './components/pages/profile/profile';
function App(props) {
  return (
    <BrowserRouter>
      <div className="app">
        <Header registrated={props.store} />
        <div className = "container">
          <Route path="/friends" render={() => dispatchEvent} />
          <Route path="/galery" render={() => <ImagesPage images={props.state} />} />
          <Route path="/tape" render={() => <TapePage data={props.state} />} />
          <Route exact path="/" render={() => <TapePage data={props.state} />} />
          <Route  path="/profile" render={() => <Profile data={props.state.User} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
