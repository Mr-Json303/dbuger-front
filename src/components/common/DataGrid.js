import React, {
  useState,
  useEffect,
} from 'react';

import {
  DataGrid,
} from '@mui/x-data-grid';

import {
  IconButton,
} from '@mui/material';

import {
  Replay as ReplayIcon,
} from '@mui/icons-material';

import { ProjectGroupRequest as DTRequest } from '../utilities/DataRequest';

import { DataGridError } from './DataTableLoader'

import { RowActionButtons } from './DataGridButton'

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


export function ProjectGroupDatagrid({ ProjectId }) {

  const [isReLoading, setisReLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [projectName, setprojectName] = useState('');
  const [dataRows, setdataRows] = useState([]);

  useEffect(() => {

    setisError(false)


    DTRequest(ProjectId).then((data) => {

      setdataRows(FormatData(data.Group))
      setprojectName(data.Group[0].Project.name)

    }).catch(error => {
      console.log('error: ', error);
      setisError(true)
    })

  }, [isReLoading, ProjectId])

  return <>
    <h1>{`Project ${projectName}:`}</h1>
    {isError && <h3>An error has ocurred</h3>}

    <div style={{ width: '100%', height: 400 }}>

      <IconButton size="large"
        onClick={() => setisReLoading(!isReLoading)}
      >
        <ReplayIcon
          // style={{ marginBottom: '50px' }}
          // style={{ color: btnColor }}

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
  </>;
}