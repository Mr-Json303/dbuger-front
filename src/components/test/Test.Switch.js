import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

import {
    RFDialog
} from './ForwardRef'

import Form2 from './Form2'
import Form5 from './Form5';


export default function TestSwitch(props) {

    let { path, url } = useRouteMatch();

    return (
        <>
            <Switch>

                {/* Projecct switch pages */}
                <Route path={`${path}/1`}>
                    <h4>Test 1</h4>
                </Route>
                <Route path={`${path}/form2`}>
                    <Form2 />
                </Route>
                <Route path={`${path}/form5`}>
                    <Form5 />
                </Route>

                {/* user switch pages */}
                <Route path={`${path}/2`}>
                    <h2>Test 2</h2>
                    <br />
                    <Link to={`${url}/form2`}>Al Form 2</Link>
                    <br />
                    <Link to={`${url}/form5`}>Al Form 5</Link>
                </Route>

                {/* app main pages */}
                <Route exact path={path}>
                    <p>test home</p>
                </Route>

            </Switch>
        </>
    )
}