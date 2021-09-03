import React, {
  useState,
  useEffect,
} from 'react';

import {
  DataGrid,
} from '@material-ui/data-grid';

import {
  Button,
  IconButton,
  Grid,
} from '@material-ui/core';

import {
  Replay as ReplayIcon,
} from '@material-ui/icons';

import { grey } from '@material-ui/core/colors'

import { ProjectGroupRequest as DTRequest } from '../utilities/DataRequest';
import {useUserState} from '../../context/UserContext'

import { DataGridError } from './DataTableLoader'

import { RowActionButtons } from './DataGridButton'

const btnColor = grey[800];

// *Inner Function definition
function FormatData(_data) {

  const _new_data = _data.map((item) => {
    return {
      id: item.User.id,
      username: item.User.name,
      email: item.User.email,
      role: item.Role.name,
    }
  })

  return _new_data
}


export function ProjectGroupDatagrid({ProjectId}) {

  console.log('ProjectId: ', ProjectId);

  const {token} = useUserState();

  const [isReLoading, setisReLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [projectName, setprojectName] = useState('');
  const [dataRows, setdataRows] = useState([]);

  useEffect(() => {

    setisError(false)
    // setisLoading(true);


    DTRequest(ProjectId).then((data) => {

      // console.log('Data on datagrid request', data);
      setdataRows(FormatData(data.Group))
      setprojectName(data.Group[0].Project.name)

    }).catch(error => {
      console.log('error: ', error);
      setisError(true)
    })

  }, [isReLoading, ProjectId])

  return (
    <>
      <h1>{`Project ${projectName}:`}</h1>
      {isError && <h3>An error has ocurred</h3>}

      <div style={{ width: '100%', height: 400 }}>

        <IconButton>
          <ReplayIcon
            // style={{ marginBottom: '50px' }}
            style={{ color: btnColor }}
            onClick={() => setisReLoading(!isReLoading)}
          />
        </IconButton>

        <DataGrid
          components={{
            NoRowsOverlay: DataGridError
          }}
          columns={[
            {
              field: 'username',
              headerName: 'Name',
              minWidth: 212,
              flex: 1,
            },
            {
              field: 'email',
              headerName: 'Email',
              minWidth: 212,
              flex: 1,
            },
            {
              field: 'role',
              headerName: 'Role',
              minWidth: 212,
              flex: 1,
            },
            {
              field: 'actions',
              headerName: 'Actions',
              minWidth: 212,
              flex: 0.9,
              renderCell: (cellValues) => {
                return (<>

                  <RowActionButtons cellValues={cellValues} />
                </>)
              },
            },
          ]}

          rows={dataRows}
        />
      </div>
    </>
  )
}