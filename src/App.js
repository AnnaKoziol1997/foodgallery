//import './App.css';
import React from 'react';
import Title from './components/Title'
import Footer from './components/Footer';
import Gallery from './components/Gallery';
//import Image from './components/Image'
import AddImage from './components/AddImage';
function App() {
  

  return (
    <div className="App">
      <div className='Title'>
        <Title />
      </div>
      <div>
        <AddImage/>
      </div>
      <div className='UploadAndImg'>
          <Gallery/>
      </div>
      <div className='Footer'>
        <Footer/>
      </div>
      
    </div>
  );
}
export default App;