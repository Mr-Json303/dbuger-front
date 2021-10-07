import { useState } from 'react';

import {
    Create as CreateIcon,
    Visibility as VisibilityIcon,
    Delete as DeleteIcon,
} from '@material-ui/icons';

import {
    Button,
    IconButton,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

import propTypes from 'prop-types';


export function RowActionButtons({ cellValues }) {

    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState();

    function handleOpen() {
        setSelectedValue(cellValues.row)
        setOpen(true);
    }

    function handleClose() {
        setOpen(false)
    }

    return (
        <>

            <GeneralDialog open={open} onClose={handleClose} selectedValue={selectedValue}/>

            <IconButton
                onClick={handleOpen}
            >
                <VisibilityIcon />
            </IconButton>
            <IconButton>
                <CreateIcon />
            </IconButton>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </>
    )

}

GeneralDialog.propTypes = {
    onClose: propTypes.func.isRequired,
    open: propTypes.bool.isRequired,
    // selectedValue: propTypes.string.isRequired,
};

function GeneralDialog(props) {

    const { onClose, open } = props;

    return(
        <>
            {/* <Dialog onClose={onClose} aria-labelledby='dialog-title' open={open}>
                <DialogTitle id='dialog-title'>
                    Dialog Test
                </DialogTitle>
                Y algo mas supongo
                <Button
                    variant='contained'
                    onClick={onClose}
                >
                    Close
                </Button>


            </Dialog> */}
            <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
        </>
    )
}