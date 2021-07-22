import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Login from './mainComponents/Login';
import User from './mainComponents/User';

function App() {

  // function clickBtn() {
  //   localStorage.setItem('used', "used");
  //   history.push('/login')
  // }
  const history = useHistory();
  return (
    <div className="App">
      {/* {
        localStorage.getItem('used') ?
          <>
          </>
          :
          <>
          <button onClick={clickBtn} className="btn btn-primary a">Login</button>
          </>
      } */}
      <BrowserRouter>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/user">
          <User />
        </Route>

      </BrowserRouter>

    </div>
  );
}

export default App;
