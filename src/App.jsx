import { useSelector, useDispatch } from 'react-redux';
import WebFont from 'webfontloader';
import './App.css';
import Login from './components/login';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['JetBrains Mono']
      }
    });
  })
  
  const dispatch = useDispatch()
  

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
