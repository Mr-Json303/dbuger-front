import React from 'react'

import {
    Link,
    useHistory,
} from 'react-router-dom';

import {
    Button,
    IconButton,
    makeStyles,
    withStyles,
    Paper,
} from '@material-ui/core';

import {
    Add as AddIcon,
    Replay as ReplayIcon,
    ArrowForwardIosRounded as ArrowForwardRoundedIcon,
    ArrowForwardIosRounded,
} from '@material-ui/icons';


import { green } from '@material-ui/core/colors';

import { useCustomContext, useSetCustomContext } from '../../context/UserContext'

const useStyles = makeStyles((theme) => ({
    squareButton: {
        height: 120,
        width: 120,
    }
}));

const AddButtonStyled = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(green[500]),
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600]
        }
    },
}))(Button);

export function AddButton({ children }) {

    const classes = useStyles();

    return (
        <>
            <AddButtonStyled
                className={classes.squareButton}
                endIcon={
                    <AddIcon />
                }
                variant='contained'
            >
                {children}
            </AddButtonStyled>
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
        // console.log(data);
    }

    const classes = useStyles();

    // console.log(pathProp);

    return (
        <>
            <Button
                // component={Link}
                // to={pathProp}
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