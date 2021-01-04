import './App.css';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import PostGallery from './Components/PostGallery';
import Quiz from './Components/Quiz';
import Login from './Components/Login';
import { Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>App Header</h1>
      <NavBar/>
      <Switch>
        <Route path={'/home'} render={ () => <HomePage/>} />
        <Route path={'/posts'} render={ () => <PostGallery/>} />
        <Route path={'/quiz'} render={ () => <Quiz/>} />
        <Route path={'/login'} render={ () => <Login/>} />
      </Switch>
    </div>
  );
}

export default App;
