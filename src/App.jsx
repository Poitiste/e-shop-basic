import './App.css';
import { Outlet } from 'react-router-dom';
import NavigationBar from './_commons/NavigationBar/NavigationBar'
import 'materialize-css/dist/css/materialize.min.css';
import UserContext from './_components/UserContext';
import { useState } from 'react';
//import logo from './assets/logo_iti.png';

function App() {
  const [currentUser, setCurrentUser] = useState('not connected');

  return (
    <div id='container'>
      <div className="render-children">
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
          <NavigationBar />
          <Outlet />
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default App;