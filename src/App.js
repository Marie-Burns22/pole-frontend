import React from 'react';

import './assets/css/main.css'
import Navbar from './Navbar';
import Foot from './Foot';



import Main from './Main';
import Header from './Header';
import About from './About';


function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
			<Main />
      <Foot />
    </div>
  );
}

export default App;
