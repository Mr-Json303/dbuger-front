import React from "react";
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
import { Button } from '@mui/material'

import IssueForm from '../components/forms/IssueForm';


export default function UserSwitch(props) {

    let { path, url } = useRouteMatch();
    // console.log('path dentro del user switch: ', path);

    return (
        <>
            <Switch>

                <Route path={`${path}/issues/new`}>
                    <IssueForm/>
                </Route>

                <Route path={`${path}/issues`}>
                    <h1>User issues page</h1>
                    <Button component={Link} to={`${url}/issues/new`} variant='contained'>Crear reporte</Button>
                </Route>

                <Route path={`${path}/inbox`}>
                    <h1>User inbox page</h1>
                </Route>
                <Route path={`${path}/inbox`}>
                    <h1>User inbox page</h1>
                </Route>

                <Route path={`${path}/favorites`}>
                    <h1>User favorites page</h1>
                </Route>

                <Route path={`${path}/settings`}>
                    <h1>User profile settings page</h1>
                </Route>

            </Switch>
        </>
    )
}