import { useState } from 'react';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import LoginPopup from './components/LoginPopup';

function App() {

  const [loginPopup, setLoginPopup] = useState<boolean>(true);

  return (
    <>
      <NavBar setLoginPopup={setLoginPopup} loginPopup={loginPopup} />
      <Hero setLoginPopup={setLoginPopup} loginPopup={loginPopup} />
      <LoginPopup setLoginPopup={setLoginPopup} loginPopup={loginPopup}/>
    </>
  );
}

export default App;
