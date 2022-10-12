//import './App.css';
import React from 'react';
import Title from './components/Title'
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Image from './components/Image'

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