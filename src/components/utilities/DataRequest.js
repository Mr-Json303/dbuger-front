import AxiosMng from '../config/axios';

// import { useUserState, } from "../../context/UserContext";


// *User list from prject ID
export async function ProjectGroupRequest(groupId) {

    const token = localStorage.getItem('token')

    let data = {};
    if (!groupId) {
        const custom_error = new Error('Request Data', 'Missing parameters',);

        return custom_error;
    } else {
        await AxiosMng.get('/project-group/find/' + groupId,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        ).then((res) => {
            if (res.data.Group === undefined) throw new Error('Bad request', 'Missing params')
            data = res.data
        }).catch((error) => {
            data = {
                msg: 'An error has ocurred',
                error: error
            }
        });
    }
    return data;
}

export async function ProjectCreatorRequest(id, token) {

    let data = {};

    await AxiosMng.get('/project/find-creator/' + id, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((res) => {
        if (res.data === undefined) throw new Error('Bad request', 'Missing params')
        data = res.data
    }).catch((error) => {
        data = {
            msg: 'An error has ocurred',
            error: error
        }
    });

    return data;

}

export function ProjectListRequest() {

    // const { token, id: UserId } = useUserState();

    // await AxiosMng.get()

}

export function SelectGetData(tableName, token, addtionalData) {

}

//TODO implement request

export function GenericReq(method, url, data, token) {

    // let response = {};

    return {}

}

export function UserListReq(actualUserId) {

    AxiosMng.get('/user/').then(res => {

    })

}