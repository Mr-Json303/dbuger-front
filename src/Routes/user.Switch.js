import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

export default function UserSwitch(props) {

    let { path } = useRouteMatch();
    // console.log('path dentro del user switch: ', path);

    return (
        <>
            <Switch>
                {/* <Route exact path={path}>
                    <h1>user root page</h1>
                </Route> */}

                <Route path={`${path}/issues`}>
                    <h1>User issues page</h1>
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