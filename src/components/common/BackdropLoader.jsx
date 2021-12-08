import * as React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
// import PropTypes from 'prop-types';

export function SpinnerLoader(props) {
  const { open } = props;

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff',zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={handleClose}
      >
        <CircularProgress 
        size={100} 
        color="inherit"
        />
      </Backdrop>
    </div>
  );
}

