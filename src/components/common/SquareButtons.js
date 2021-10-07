import React from 'react'

import {
    useHistory,
} from 'react-router-dom';

import {
    Button,
    makeStyles,
    withStyles,
} from '@material-ui/core';

import {
    Add as AddIcon,
    Replay as ReplayIcon,
    ArrowForwardIosRounded,
} from '@material-ui/icons';


import { green } from '@material-ui/core/colors';
import clsx from 'clsx';

import { 
    useSetCustomContext, 
} from '../../context/UserContext'

const useStyles = makeStyles((theme) => ({
    squareButton: {
        height: 120,
        width: 120,
        
    },
    addButton: {
        color: theme.palette.getContrastText(green[500]),
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600]
        }
    }
}));

export function AddButton({ children }) {

    const classes = useStyles();

    return (
        <>
            
            <Button
                className={clsx(classes.squareButton, classes.addButton)}
                endIcon={
                    <AddIcon />
                }
                variant='contained'
            >
                {children}
            </Button>
        </>
    )
}

export function ReloadButton({ children }) {

    const classes = useStyles();

    return (
        <>

            <Button
                className={classes.squareButton}
                variant='contained'
                endIcon={
                    <ReplayIcon />
                }
            >
                {children}
            </Button>

        </>
    )
}



export function SquareLinkButton({ data, pathProp, children }) {

    const dispatch = useSetCustomContext();
    const history = useHistory();

    function handleClick() {
        dispatch({
            type: 'CPxSecondary',
            payload:{
                currentProject: {
                    id: data.id,
                    name: data.name
                },
                listSelected: 'secondary'
            }
            
        })
        history.push(pathProp)
    }

    const classes = useStyles();


    return (
        <>
            <Button
                onClick={handleClick}
                className={classes.squareButton}
                variant='contained'
                endIcon={
                    <ArrowForwardIosRounded />
                }
            >
                {children}
            </Button>
        </>
    )
}