//import './App.css';
import React from 'react';
import Title from './Title';
import Footer from './Footer';
import Gallery from './Gallery';
import Image from './Image'

function App() {
  

  return (
    <div className="App">
      <div className='Title'>
        <Title />
      </div>
      <div className='UploadAndImg'>
          <Gallery/>
      </div>
      <div>
        <Image/>
      </div>
      <div className='Footer'>
        <Footer/>
      </div>
      
    </div>
  );
}
export default App;