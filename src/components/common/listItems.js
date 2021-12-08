// * React Imports
import React, {
  useState,
  useEffect,
} from 'react';
import {
  Link,
  useLocation,
} from 'react-router-dom';

// *MUI Imports
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
} from '@mui/material'

// *MUI Icons
import {
  Settings as SettingsIcon,
  Home as HomeIcon,
  Dashboard as DashboardIcon,
  Star as StarIcon,
  TableChart as TableChartIcon,
  Repeat as RepeatIcon,
  Assignment as AssignmentIcon,
  Mail as MailIcon,
  Timeline as TimelineIcon,
} from '@mui/icons-material';

import {
  useSetCustomContext,
  useCustomContext,
} from '../../context/UserContext';
import FormatUrl from '../utilities/formatUrl'


//******************
//* Main List *
//******************


export function MainListItems(props) {

  var Dispatch = useSetCustomContext();
  const state = useCustomContext();

  const url = useLocation();
  const [selectedIndex, setselectedIndex] = useState();

  const [isLoading, setisLoading] = useState(true)

  function handleListItemClick(e) {

    Dispatch({
      type: 'main',
      payload: 'main'
    })

  }

  useEffect(() => {

    setisLoading(true);

    if (state.listSelected === 'main') {
      setselectedIndex(url.pathname);
    } else {
      setselectedIndex(undefined);
    }

    setisLoading(false);

  }, [state, url.pathname]);

  if (isLoading) {

    return (<h1>Cargando ...</h1>)
  } else {
    return (
      <List>

        <ListItem
          selected={selectedIndex === '/app'}
          onClick={(e) => handleListItemClick(e)}
          button
          component={Link}
          to="/app"
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem
          selected={selectedIndex === "/app/user/issues"}
          onClick={(e) => handleListItemClick(e)}
          button
          component={Link}
          to="/app/user/issues"
        >
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="My Issues" />
        </ListItem>

        <ListItem
          selected={selectedIndex === "/app/user/inbox"}
          onClick={(e) => handleListItemClick(e)}
          button
          component={Link}
          to="/app/user/inbox"
        >
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>

        <ListItem
          selected={selectedIndex === "/app/user/favorites"}
          onClick={(e) => handleListItemClick(e)}
          button
          component={Link}
          to="/app/user/favorites"
        >
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Favorites Panel" />
        </ListItem>
      </List>
    )
  }
}

// let name = 'dbuger'


//******************
//* Secondary List *
//******************


export function SecondaryListItems(props) {

  var dispatch = useSetCustomContext();
  const state = useCustomContext();
  const url = useLocation();

  let url_paths = {
    project_dashboard: `/app/project/${FormatUrl(state.currentProject.name)}`,
    issues_list: `/app/project/${FormatUrl(state.currentProject.name)}/issues`,
    changelog: `/app/project/${FormatUrl(state.currentProject.name)}/changelog`,
    roadmap: `/app/project/${FormatUrl(state.currentProject.name)}/roadmap`,
    settings: `/app/project/${FormatUrl(state.currentProject.name)}/settings`,
  }

  const [selectedIndex, setselectedIndex] = useState();
  const [isLoading, setisLoading] = useState(true)
  const [pathList, setPathList] = useState(url_paths)

  function handleListItemClick(e) {

    dispatch({
      type: 'secondary',
      payload: 'secondary',
    })

  }

  useEffect(() => {

    setisLoading(true);

    setPathList({
      project_dashboard: `/app/project/${FormatUrl(state.currentProject.name)}`,
      issues_list: `/app/project/${FormatUrl(state.currentProject.name)}/issues`,
      changelog: `/app/project/${FormatUrl(state.currentProject.name)}/changelog`,
      roadmap: `/app/project/${FormatUrl(state.currentProject.name)}/roadmap`,
      settings: `/app/project/${FormatUrl(state.currentProject.name)}/settings`,
    })

    if (state.listSelected === 'secondary') {
      setselectedIndex(url.pathname);

    } else {
      setselectedIndex(undefined);
    }

    setisLoading(false);

  }, [state, url.pathname]);

  if (isLoading) {
    return (
      <h1>Cargando ...</h1>
    )
  } else {
    return (
      <List>

        <ListSubheader inset>{`Project: ${state.currentProject.name === undefined ? 'unselected' : state.currentProject.name}`}</ListSubheader>

        {/*
          //*selectfield
        */}

        {state.currentProject.id ?

          <>
            <ListItem
              selected={selectedIndex === pathList.project_dashboard}
              onClick={(e) => handleListItemClick(e)}
              button
              component={Link}
              to={pathList.project_dashboard}
            >
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>

            <ListItem selected={selectedIndex === pathList.issues_list}
              onClick={(e) => handleListItemClick(e)}
              button
              component={Link}
              to={pathList.issues_list}
            >
              <ListItemIcon>
                <TableChartIcon />
              </ListItemIcon>
              <ListItemText primary="Issues List" />
            </ListItem>

            <ListItem selected={selectedIndex === pathList.changelog}
              onClick={(e) => handleListItemClick(e)}
              button
              component={Link}
              to={pathList.changelog}
            >
              <ListItemIcon>
                <RepeatIcon />
              </ListItemIcon>
              <ListItemText primary="ChangeLog" />
            </ListItem>

            <ListItem selected={selectedIndex === pathList.roadmap}
              onClick={(e) => handleListItemClick(e)}
              button
              component={Link}
              to={pathList.roadmap}
            >
              <ListItemIcon>
                <TimelineIcon />
              </ListItemIcon>
              <ListItemText primary="RoadMap" />
            </ListItem>

            <ListItem selected={selectedIndex === pathList.settings}
              onClick={(e) => handleListItemClick(e)}
              button
              component={Link}
              to={pathList.settings}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="{Projectname} Settings" />
            </ListItem>
          </>

          : <ListItem><ListItemText>Project Unselected</ListItemText></ListItem>

        }

      </List>
    )
  }
}