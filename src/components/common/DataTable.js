import React, {
    useState,
    useEffect,
} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    // Button,
    IconButton,
} from '@material-ui/core'

import {
    Create as CreateIcon,
    Visibility as VisibilityIcon,
    Delete as DeleteIcon,
} from '@material-ui/icons';

import { ProjectGroupRequest as DTRequest } from '../utilities/DataRequest';
// import { DataTableLoader } from "./DataTableLoader";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export function ProjectGroupDataTable() {
    const classes = useStyles();

    const [isLoading, setisLoading] = useState(true);
    const [projectName, setprojectName] = useState('')
    const [projectGroup, setprojectGroup] = useState({});


    // *Consulta a la api
    useEffect(() => {

            setisLoading(true)

            let _ProjectGroup = {}
            DTRequest(2).then((data) => {

                _ProjectGroup = data.Group
                setprojectGroup(_ProjectGroup)
                setprojectName(_ProjectGroup[0].Project.name)
                console.log('Project group Data: ', _ProjectGroup);
                setisLoading(false)
                

            });

    }, [])

    return (<>
        <h1>{`Project ${projectName}:`}</h1>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Role</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {isLoading ? <h2>Cargando ...</h2> //<DataTableLoader/>
                    :
                        projectGroup.map((member) => 
                                <TableRow key={member.UserId}>
                                    <TableCell component="th" scope="row">
                                        {member.User.name}
                                    </TableCell>
                                    <TableCell align="right">{member.User.email}</TableCell>
                                    <TableCell align="right">{member.Role.name}</TableCell>

                                    <TableCell align="right">
                                        {/* {row.protein} */}
                                        <IconButton>
                                            <VisibilityIcon />
                                        </IconButton>
                                        <IconButton>
                                            <CreateIcon />
                                        </IconButton>
                                        <IconButton>
                                            <DeleteIcon />
                                        </IconButton>

                                    </TableCell>
                                </TableRow>   )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </>);

}