import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import ProjectDashBoardPage from '../components/pages/ProjectDashboard.Page'

export default function ProjectSwitch(props) {

    let { path } = useRouteMatch();
    // console.log('path dentro del user switch: ', path);

    return (
        <>
            <Switch>

                

                <Route exact path={path}>
                    {/* <h1>Project dashboard page</h1> */}
                    <ProjectDashBoardPage />
                </Route>

                <Route path={`${path}/issues`}>
                    <h1>Project issues page</h1>
                </Route>

                <Route path={`${path}/changelog`}>
                    <h1>Project changelog page</h1>
                </Route>

                <Route path={`${path}/roadmap`}>
                    <h1>Project roadmap page</h1>
                </Route>

                <Route path={`${path}/settings`}>
                    <h1>Project settings page</h1>
                </Route>

            </Switch>
        </>
    )
}