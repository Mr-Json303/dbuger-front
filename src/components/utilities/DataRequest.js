import React from 'react';
import AxiosMng from '../config/axios';

import { useUserState,} from "../../context/UserContext";


// *User list from prject ID
export async function ProjectGroupRequest(groupId) {

    let storagedToken = localStorage.getItem('token')

    // console.log('StoragedToken: ', storagedToken);
    
    let data = {};
    if (!groupId) {
        console.log('groupId is no defined');
        const custom_error = new Error('Request Data','Missing parameters',);
        
        return custom_error;
    } else {

        await AxiosMng.get('/project-group/find/' + groupId, {
            headers: {
                'Authorization': `Bearer ${storagedToken}`
            }
        }).then((res) => {
            // console.log('api response: ', res);
            if(res.data.Group === undefined) throw new Error('Bad request', 'Missing params')
            data = res.data
        }).catch((error) => {
            console.log(`Api error response: ${error}`);
            data = {
                msg: 'An error has ocurred',
                error: error
            }
        });

    }


    // console.log('Api response: ', data);

    return data;

}

export async function ProjectCreatorRequest(id, token){

    // console.log('ProCreatorReq UserId: ', id);

    let data = {};
    
    await AxiosMng.get('/project/find-creator/' + id, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((res) => {
        // console.log('api response: ', res.data);
        if(res.data === undefined) throw new Error('Bad request', 'Missing params')
        data = res.data
    }).catch((error) => {
        // console.log(`Api error response: ${error}`);
        data = {
            msg: 'An error has ocurred',
            error: error
        }
    });

    return data;
    
}

export function ProjectListRequest(){

    const {token, id: UserId} = useUserState();

    // await AxiosMng.get()

}

export function SelectGetData(tableName, token, addtionalData){
    
}