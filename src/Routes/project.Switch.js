import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { ProjectForm } from '../components/forms/ProjectForm'
import ProjectDashBoardPage from '../components/pages/ProjectDashboard.Page'
import { ProjectSettings } from '../components/pages/ProjectSettings.Page'


export default function ProjectSwitch(props) {

    let { path, url } = useRouteMatch();
    console.log('path dentro del project switch: ', path);
    console.log('url dentro del project switch: ', url);

    return (
        <>
            <Switch>

                <Route path={`${path}/new`}>
                    <ProjectForm />
                </Route>

                <Route path={`${path}/:projectName/issues`}>
                    <h1>Project issues page</h1>
                </Route>

                <Route path={`${path}/:projectName/changelog`}>
                    <h1>Project changelog page</h1>
                </Route>

                <Route path={`${path}/:projectName/roadmap`}>
                    <h1>Project roadmap page</h1>
                </Route>

                <Route path={`${path}/:projectName/settings`}>
                    <ProjectSettings />
                </Route>

                <Route exact path={`${path}/:projectName`}>
                    {/* <h1>Project dashboard page</h1> */}
                    <ProjectDashBoardPage />
                </Route>

            </Switch>
        </>
    )
}