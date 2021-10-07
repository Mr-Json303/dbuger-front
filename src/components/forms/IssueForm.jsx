import {
  useState,
} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  TextField,
  Box,
  Paper,
  MenuItem,
  Typography,
  Button,
  Input,
  makeStyles,
} from "@material-ui/core";

import { useUserState, useCustomContext } from "../../context/UserContext";

const FormValues = {

  // *textfield
  name: 'string',

  // *Multiline textfield
  description: 'string',
  repeatability: 'number',

  // *Allready on context X
  ProjectId: 'number',

  // *Select Field
  StateId: 'number',

  // *Select Field
  PriorityLevelId: 'number',

  // *Data already available on context (user logged in)
  // *Its not necesary
  ReporterId: 'number',

  // *Select Field
  Assignee: 'number',

  // *Since this is the "create" part of the C.R.U.D
  //    *The "LastupdatedBy" value comes from the "ReporterId" field
  LastUpdatedBy: 'number',

  // *Also, tags. Complex select field with search built into it
  // *and the posibility for creating new ones
  // *It applies to Categories too
  // *Select Field
  TagId: 'number',
  CategoryId: 'number',
};

const selectOptions = [
  {
    value: 'op0',
    label: 'option #0',
  },
  {
    value: 'op1',
    label: 'option #1',
  },
  {
    value: 'op2',
    label: 'option #2',
  },
  {
    value: 'op3',
    label: 'option #3',
  },
  {
    value: 'op4',
    label: 'option #4',
  },
]

const useStyles = makeStyles((theme) => ({
  flexGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    rowGap: theme.spacing(3),
    '& > *': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-evenly',
    }
  },
  tittle: {
    width: '100%',
    padding: 20,
  },
  typography: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
    width: '50ch',
    display: 'flex',
    alignItems: 'center',
  },
  underlineContainer: {
    '&::before': {
      // todo draw a grey line at the bottom of the typography
      left: 0,
      right: 0,
      bottom: 0,
      content: '"\\00a0"',
      position: 'absolute',
      borderBottom: `10px solid rgba(${245}, ${40}, ${145}, ${1})`,
      // borderBottomWidth: 1,
      // borderBottomStyle: 'solid',
      // borderBottomColor: 'rgba(0, 0, 0, 0.42)',
    },
  },
  textField: {
    margin: theme.spacing(2),
    width: '50ch',
  },
  textArea: {
    margin: theme.spacing(2),
    width: '50ch',
  },
  select: {
    margin: theme.spacing(2),
    width: '25ch',
  },
  box: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    // width: '50px',
    margin: theme.spacing(1),
    // padding: 20,

  }
}));

export default function IssueForm() {

  const classes = useStyles();

  const { email: loggedUser, id: loggedUserId } = useUserState();

  // *Custom Context State = ccState
  const { state: ccState } = useCustomContext();

  // console.log(`Custom Context: ${ccState}`);

  const [formData, setFormData] = useState({
    name: undefined,
    description: undefined,
    repeatability: undefined,
    ProjectId: undefined,
    StateId: undefined,
    PriorityLevelId: undefined,
    ReporterId: loggedUserId,
    AssigneeId: undefined,
    LastUpdatedBy: loggedUserId,
    TagId: [],
    CategoryId: [],
  })

  function handleChange(event) {
    console.log('[event.target.name]: ', event.target, 'event.target.value: ', event.target.value);
    setFormData(event.target.value);
  }

  // TODO Solve the mess below

  return (

    <>

      <Typography
        variant="h4"
        component="div"
        gutterBottom
        className={classes.tittle}
      >
        {"{Project Name}"}
        {/* <TextField
          className={classes.select}
          value={formData}
          label='State'
          select
          onChange={handleChange}
        >
          {Array.from({ length: 5 }, (_, i) => (
            <MenuItem
              key={i}
              value={`op${i}`}
            >
              {`Project #${i}`}
            </MenuItem>
          ))}
        </TextField> */}
      </Typography>





      <Box
        component='form'
        noValidate
      // className={classes.box}
      >

        <div
          className={classes.flexGrid}
        >

          <Paper

          >
            <TextField
              className={classes.textField}
              label='Name'
              value={formData.name}
            />

            <Typography
              className={classes.typography}
            >
              {`SubmitedBy: ${loggedUser}`}
            </Typography>

          </Paper>


          <Paper
          >

            <TextField
              className={classes.textArea}
              label='Description'
              value={formData.description}
              multiline
            />
            <TextField
              className={classes.textArea}
              label='Repeatability'
              value={formData.repeatability}
              multiline
            />
          </Paper>

          <Paper>
            <TextField
              className={classes.select}
              value={formData.state}
              label='State'
              select
              onChange={handleChange}
            >
              {selectOptions.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
              <MenuItem></MenuItem>
            </TextField>

            <TextField
              className={classes.select}
              value={formData.PriorityLevelId}
              label='Priority'
              select
              onChange={handleChange}
            >
              {selectOptions.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              className={classes.select}
              value={formData.AssigneeId}
              label='Assigned User'
              select
              onChange={handleChange}
            >
              {selectOptions.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Paper>


          
          {/*
            //todo solve for multiple select field
          */}
          <Paper>
            <TextField
              className={classes.select}
              value={formData.TagId}
              label='Tags'
              select
              onChange={handleChange}
            >
              {selectOptions.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              className={classes.select}
              value={formData}
              label='Category'
              select
              onChange={handleChange}
            >
              {selectOptions.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Paper>

          <Box
            className={classes.box}
          >

            {/*
            //*Cancel Button
          */}
            <Button
              color='secondary'
              className={classes.button}
              variant='contained'
              children='Cancel'
            />
            {/*
            //*Save Button
          */}
            <Button
              color='primary'
              className={classes.button}
              variant='contained'
              children='Save'
            />

          </Box>

        </div>

      </Box>


    </>
  );
}
