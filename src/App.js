import React from 'react';

import './assets/css/main.css'
import Navbar from './Navbar';
import Foot from './Foot';
import Intro from './Intro';
import Header from './Header';

import Main from './Main';


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Intro />
			<Main />
      <Foot />
    </div>
  );
}

export default App;
