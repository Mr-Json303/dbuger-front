import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

import { MainLayout } from "../components/common/Layout";
import { UserMainPage } from "../components/pages/UserMain.Page";
import ProjectSwitch from "./project.Switch";
import UserSwitch from "./user.Switch";

// *Para prueba de componentes
import TestSwitch from "../components/test/Test.Switch";

export default function IndexSwitch(props) {

  let { path, url } = useRouteMatch();

  return (
    <>
      <MainLayout {...props}>

      {url === '/app' ? (
        <div></div>
      ) : (
        <>
          <Link to='/app' >{'<- Back To Home'}</Link>
          <br />
          <br />
          <br />
        </>)}

        <Switch>

          {/* Projecct switch pages */}
          <Route path={`${path}/project`}>
            <ProjectSwitch />
          </Route>

          {/* user switch pages */}
          <Route path={`${path}/user`}>
            <UserSwitch />
          </Route>

          {/* Test area */}
          <Route path={`${path}/test`}>
            <TestSwitch />
          </Route>

          {/* app main pages */}
          <Route exact path={path}>
            <UserMainPage />
          </Route>


        </Switch>

      


      </MainLayout>

    </>
  )
}