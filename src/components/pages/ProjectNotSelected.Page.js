import React from 'react';

import { Link } from 'react-router-dom';

import { 
    Button,
    Typography,
} from '@material-ui/core';

import { 
    ArrowBackRounded as ArrowBackRoundedIcon,
} from '@material-ui/icons'

export function ProjectNotSelectedPage() {


    return (
        <>
            <h1>Project not yet selected</h1>

            <Button
                component={Link}
                to= '/app'
                startIcon={
                    <ArrowBackRoundedIcon/>
                }
            >
                Go to Project Selection
            </Button>
        </>
    )
}