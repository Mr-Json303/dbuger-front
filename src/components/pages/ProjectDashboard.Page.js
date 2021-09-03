import React, { useEffect} from 'react';

import { useCustomContext } from '../../context/UserContext'

import { ProjectGroupDatagrid } from '../common/DataGrid';


export default function ProjectDashBoardPage() {

    const state = useCustomContext();

    useEffect(() => {
    
        // console.log('project dashboard: ', state);
    }, [state])

    return (
        <>
            {state.currentProject.id === undefined && <h2>Project not selected</h2>}
            <br />
            {state.currentProject.id !== undefined && <ProjectGroupDatagrid ProjectId={state.currentProject.id} />}
        </>
    )
}