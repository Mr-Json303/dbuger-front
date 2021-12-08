import React from 'react';

import { Link } from 'react-router-dom';

import { 
    Button,
} from '@mui/material';

import { 
    ArrowBackRounded as ArrowBackRoundedIcon,
} from '@mui/icons-material'

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