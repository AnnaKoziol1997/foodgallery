import { ImageList } from '@mui/material';
import React from 'react';
import ProgressItem from './ProgressItem';

const ProgressList = ({ files, setURL, setImageID}) => {
  return (
    <ImageList rowHeight={300} cols={1}>
      {files.map((file, index) => (
        <ProgressItem file={file} key={index} setURL={setURL}  setImageID={setImageID}/>
      ))}
    </ImageList>
  );
};

export default ProgressList;