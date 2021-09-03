import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

import { MainLayout } from "../components/common/Layout";
import { UserMainPage } from "../components/pages/UserMain.Page";
import ProjectSwitch from "./project.Switch";
import UserSwitch from "./user.Switch";

// *Para prueba de componentes
import TestSwitch from "../components/test/Test.Switch";
import { ProjectNotSelectedPage } from "../components/pages/ProjectNotSelected.Page";


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
          </>)}

        <Switch>

          <Route exact path={[`${path}/project/undefined/`,`${path}/project/undefined/:area`]}>
            <ProjectNotSelectedPage/>
          </Route>

          {/* Projecct switch pages */}
          <Route path={`${path}/project/:ProjectName`}>
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

/* <h2>dashboard</h2>
            <ul>
              <li>

                <Link to={`${url}`}>Home</Link>
              </li>
              <li>
                <Link to={`${url}/user/issues`}>My Issues</Link>
              </li>
              <li>
                <Link to={`${url}/user/inbox`}>inbox</Link>
              </li>
              <li>
                <Link to={`${url}/user/favorites`}>favorites panel</Link>
              </li>
            </ul>
            <br />
            <br />
            <ul>
              <li>
                <Link to={`${url}/project/${proj_name}`}>Project Dashboard</Link>
              </li>
              <li>
                <Link to={`${url}/project/${proj_name}/issues`}>Issues view</Link>
              </li>
              <li>
                <Link to={`${url}/project/${proj_name}/changelog`}>Changelog</Link>
              </li>
              <li>
                <Link to={`${url}/project/${proj_name}/roadmap`}>Roadmap</Link>
              </li>
              <li>
                <Link to={`${url}/project/${proj_name}/settings`}>Settings</Link>
              </li>
            </ul> */