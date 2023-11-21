import { useSelector, useDispatch } from 'react-redux';
import Login from './components/login';
import AppPage from './components/AppPage';
import './App.css';

function App() {

  const currentUser = useSelector((state) => {
      return state.currentUser
  })

  const dispatch = useDispatch()

  return (
    <div className="App">
      <div className="container">
        {
          currentUser.user ? <AppPage/> : <Login />
        }
      </div>
    </div>
  );
}

export default App;
