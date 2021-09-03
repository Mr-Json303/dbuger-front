import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

import {ProjectGroupDataTable} from '../common/DataTable';
import { ProjectGroupDatagrid } from '../common/DataGrid'

export default function TestSwitch(props) {

    let { path, url } = useRouteMatch();


    return (
        <>
            <Switch>

                {/* Projecct switch pages */}
                <Route path={`${path}/1`}>
                    <ProjectGroupDataTable/>
                </Route>

                {/* user switch pages */}
                <Route path={`${path}/2`}>
                    <ProjectGroupDatagrid/>
                </Route>

                {/* app main pages */}
                <Route exact path={path}>
                    <p>test home</p>
                </Route>

            </Switch>
        </>
    )
}