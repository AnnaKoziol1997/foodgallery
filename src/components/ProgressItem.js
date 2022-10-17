import { ImageListItem } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
//import CircularProgressWithLabel from './CircularProgressWithLabel';
import { v4 as uuidv4 } from 'uuid';
import uploadFileWithProgress from '../files/uploadWithProgress';
//import addDocument from '../database/addDocument';

const ProgressItem = ({ file, setURL, setImageID}) => {
    const [imageURL, setImageURL] = useState(null);
    //const currentUser = { uid: 'userId' };
    useEffect(() => {
        const uploadImage = async () => {
            const uID = uuidv4();
            const imageName = uID + '.' + file.name.split('.').pop();
            try {
                const url = await uploadFileWithProgress(
                    file,
                    //`gallery/${currentUser.uid}`,
                    `images`,
                    imageName
                );
                setURL(url);
                setImageID(uID);
                /*const galleryDoc = {
                    imageURL: url,
                    uid: '',
                    uEmail: '',
                    uName: 'Anonymous',
                    uPhoto: '',
                    Title: '',
                    Desc: '',
                };
                await addDocument('gallery', galleryDoc, imageName);
                //setImageURL(null);
                */
            } catch (error) {
                alert(error.message);
                console.log(error);
            }
        };
        setImageURL(URL.createObjectURL(file));
        uploadImage();
    }, [file,setURL,setImageID]);
    return (
        imageURL && (
            <ImageListItem cols={1} rows={1}>
                <img src={imageURL} alt="images gallery" loading="lazy" />
            </ImageListItem>
        )
    );
};

export default ProgressItem;

