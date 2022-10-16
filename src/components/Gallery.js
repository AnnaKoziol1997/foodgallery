import React from 'react';
import { useState, useEffect } from 'react';
import { storage } from '../firebase'
import { ref, getDownloadURL, uploadBytes, listAll } from 'firebase/storage';
import { v4 } from 'uuid'
//import uploadFile from '../files/uploadFile';

const Gallery = ()=>{
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
    return(
        
        <div className='ImageAndText'>
        <div>
        {imageUrls.map((url) => {
            return <img alt="" src={url} />;
          })}
          </div>
        </div>
    )

}

export default Gallery;