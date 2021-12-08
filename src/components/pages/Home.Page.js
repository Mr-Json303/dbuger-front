import React from 'react';
import { Link } from "react-router-dom";
import { DbugerLogo } from '../common/Logo';
import { Box, Button, Stack, Typography } from '@mui/material'

function HomePage() {
    return (<>
        <Stack
            direction='row'
            justifyContent='space-between'
        >
            <Button
                component={Link}
                to='/'
                color='inherit'
            >

                <div
                    style={{ height: 100, width: 100 }}
                >
                    <DbugerLogo />
                </div>
                <Stack>
                    <Typography variant='h3'>DBuger</Typography>
                    <Typography variant='h4'>Bug Tracker</Typography>
                </Stack>

            </Button>

            <Stack
                direction='row'
                alignItems='center'
                spacing={4}
                sx={{ height: 60 }}
            >
                <Button
                    component={Link}
                    to='/'

                >
                    Home
                </Button>
                <Button
                    component={Link}
                    to='/Features'

                >
                    Features
                </Button>
                <Button
                    component={Link}
                    to='/solutions'

                >
                    Solutions
                </Button>
                <Button
                    component={Link}
                    to='/prices'

                >
                    Prices
                </Button>
                <Button
                    component={Link}
                    to='/register'

                >
                    Register
                </Button>
                <Button
                    component={Link}
                    to='/login'
                    variant='contained'
                >
                    Login
                </Button>
            </Stack>
        </Stack>
        <h4>DBuger hace la colaboracion con compañeros y clientes, sencilla, rapida y profesional</h4>
        <p>DBuger es un sistema de seguimiento de errores de codigo abierto que provee un delicado balance entre simplicidad y poder. Los usuarios son capaces, en tan solo minutos, de empezar sus proyectos mientras colaboran con sus colegas y sus clientes de una manera efectiva. una vez empieces a utilizarlo no querras dejarlo!</p>

        <ul>
            <li>Notificaciones de Email</li>
            <li>Control de acceso</li>
            <li>Personalizable</li>
        </ul>
    </>)
}

export default HomePage;