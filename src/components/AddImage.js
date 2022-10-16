import { useState } from 'react';
import React from 'react';
import UploadForm from './UploadForm';
import ProgressList from './ProgressList';
import { Box, Modal, Fab, Input, Dialog, DialogActions, Button } from '@mui/material';
import { Add } from '@mui/icons-material';

const AddImage = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => { setOpen(true); }
    const handleCancel = () => { setOpen(false); setFiles([]); }
    const handleSave = () => { setOpen(false); setFiles([]); }
    const [files, setFiles] = useState([]);
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
                    <UploadForm setFiles={setFiles} />
                    <ProgressList files={files} />

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