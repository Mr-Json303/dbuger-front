// *React Import
import React, {
    useState,
    useEffect,
} from 'react';
import {
    Link,
    // useRouteMatch,
} from 'react-router-dom';

// *MUI Imports
import {
    Button,
    Grid,
} from '@material-ui/core'


// *Local Imports
import { useUserState } from '../../context/UserContext';
import { ProjectCreatorRequest } from '../utilities/DataRequest';
import { SquareLinkButton } from '../common/SquareButtons';
import FormatUrl from '../utilities/formatUrl'

import {
    RFDialog
} from '../test/ForwardRef'

import { AddButton, ReloadButton } from '../common/SquareButtons';



export function UserMainPage() {

    const buttonRef = React.useRef(null);

    const {
        id: UserId,
        // email: UserEmail, 
        token,
    } = useUserState();

    // const { path } = useRouteMatch();

    const [projectList, setprojectList] = useState([]);
    const [isError, setisError] = useState(false);
    const [isReloading, setisReloading] = useState(false)

    useEffect(() => {

        ProjectCreatorRequest(UserId, token).then((data) => {
            console.log(data);
            if (data.error || data[0] === undefined) {
                throw new Error('error', data)
            }
            setprojectList(data)
            setisReloading(false)
            setisError(false)

        }).catch(error => {
            setisError(true)
            console.log('error: ', error);

        })

    }, [isReloading])



    return (
        <>
            <h2
                style={{
                    marginBottom: 40
                }}
            >My Projects</h2>

            <Grid container alignItems='center' justifyContent='center' spacing={5}>

                {isError === true ? (
                    <Grid item>
                        an error has ocurred
                        <Button
                            onClick={() => setisReloading(true)}
                            variant='contained'
                        >
                            Recargar
                        </Button>
                    </Grid>
                ) : (
                    projectList.map((project) =>

                        <Grid item
                            key={project.ProjectId}
                        >
                            <SquareLinkButton

                                key={project.ProjectId}
                                pathProp={FormatUrl(`app/project/${project.ProjectName}`)}
                                data={{ id: project.ProjectId, name: project.ProjectName }}
                            >
                                {project.ProjectName}
                            </SquareLinkButton>
                        </Grid>

                    )
                )
                }

                <Grid item >
                    <AddButton>
                        New Project
                    </AddButton>

                </Grid>

            </Grid>

            <Button component={Link} to='app/test/2' >Ir a testeo 2</Button>

            <h2>Projects you are a part of</h2>

            <div>
                <Button
                    variant='contained'
                    onClick={() => {
                        buttonRef.current.handleClickOpen(UserId);
                    }}
                >
                    Button From Parent
                </Button>
                <RFDialog ref={buttonRef} />
            </div>

        </>
    )
}