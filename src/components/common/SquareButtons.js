import React from 'react'

import {
    useHistory,
} from 'react-router-dom';

import { Button } from '@mui/material';

import {
    Add as AddIcon,
    Replay as ReplayIcon,
    ArrowForwardIosRounded,
} from '@mui/icons-material';

import {
    useSetCustomContext,
} from '../../context/UserContext'

const style = {
    height: 120,
    width: 120,
}

export function AddButton({ children }) {



    return (


        <Button
            color='success'
            sx={{...style}}
            endIcon={
                <AddIcon />
            }
            variant='contained'
        >
            {children}
        </Button>


    );
}

export function ReloadButton({ children }) {

    return (
        <>

            <Button
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
            payload: {
                currentProject: {
                    id: data.id,
                    name: data.name
                },
                listSelected: 'secondary'
            }
        })
        history.push(pathProp)
    }

    return (
        <>
            <Button
                sx={{...style}}
                onClick={handleClick}
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