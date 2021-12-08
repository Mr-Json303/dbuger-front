import React, {
    useState,
    useEffect,
} from 'react';

import { styled } from '@mui/material/styles';

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
} from '@mui/material'

import {
    Create as CreateIcon,
    Visibility as VisibilityIcon,
    Delete as DeleteIcon,
} from '@mui/icons-material';

import { ProjectGroupRequest as DTRequest } from '../utilities/DataRequest';
const PREFIX = 'DataTable';

const classes = {
    table: `${PREFIX}-table`
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')({
    [`& .${classes.table}`]: {
        minWidth: 650,
    },
});


export function ProjectGroupDataTable() {


    const [isLoading, setisLoading] = useState(true);
    const [projectName, setprojectName] = useState('')
    const [projectGroup, setprojectGroup] = useState({});


    // *Consulta a la api
    useEffect(() => {

        setisLoading(true)

        let _ProjectGroup = {}
        DTRequest(2).then((data) => {
            console.log('data: ', data);
            _ProjectGroup = data.Group
            setprojectGroup(_ProjectGroup)
            setprojectName(_ProjectGroup[0].Project.name)
            setisLoading(false)
        });

    }, [])

    return (
        <Root>
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
                                        <IconButton size="large">
                                            <VisibilityIcon />
                                        </IconButton>
                                        <IconButton size="large">
                                            <CreateIcon />
                                        </IconButton>
                                        <IconButton size="large">
                                            <DeleteIcon />
                                        </IconButton>

                                    </TableCell>
                                </TableRow>)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Root>
    );

}