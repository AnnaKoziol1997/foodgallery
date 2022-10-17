import { useState } from 'react';
import React from 'react';
import UploadForm from './UploadForm';
import ProgressList from './ProgressList';
import { Box, Fab, Dialog, DialogActions, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import addDocument from '../database/addDocument';

const AddImage = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => { setOpen(true); }
    const handleCancel = () => { setOpen(false); setFiles([]); }
    const [files, setFiles] = useState([]);
    const [imageURL, setImageURL] = useState(null);

    const handleSave = () => {
        const addToDatabase = async () => {
            try {
                const galleryDoc = {
                    imageURL: imageURL,
                    uid: '',
                    uEmail: '',
                    uName: 'Anonymous',
                    uPhoto: '',
                    Title: '',
                    Desc: '',
                };
                await addDocument('gallery', galleryDoc, 'none');
                //setImageURL(null);
            } catch (error) {
                alert(error.message);
                console.log(error);
            }
        };
        //setImageURL(URL.createObjectURL(file));
        addToDatabase();
        setOpen(false); setFiles([]);
    }

    const setURL = (url) => {
        setImageURL(url);
    }


    return (
        <div>
            <Fab color="primary" aria-label="add" onClick={handleOpen}>
                <Add fontSize="large" />
            </Fab>
            <Dialog
                open={open}
                onClose={handleCancel}
            >
                <Box>
                    {files[0] ? <ProgressList files={files} setURL={setURL} /> : <UploadForm setFiles={setFiles} />}



                </Box>
                <DialogActions>
                    <Button onClick={handleCancel}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>

            </Dialog>
        </div>
    );
};

export default AddImage;