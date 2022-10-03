//import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { storage } from './firebase';
import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import { v4 } from 'uuid'
import Title from './Title';
import Footer from './Footer';
import Image from './Image'

function App() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };
  
  useEffect(() => {
    const imagesListRef = ref(storage, "images/");
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="App">
      <div className='Title'>
        <Title />
      </div>
      <div className='UploadAndImg'>
        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        <button onClick={uploadFile}> Upload Image</button>
        <div>
        {imageUrls.map((url) => {
            return <img alt="" src={url} />;
          })}
          <Image/>
        </div>
      </div>
      <div className='Footer'>
        <Footer/>
      </div>
      
    </div>
  );
}
export default App;