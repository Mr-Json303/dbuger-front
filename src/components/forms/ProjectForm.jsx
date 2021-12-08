import React, {
} from 'react'
import axiosMng from '../config/axios';
import { useForm } from 'react-hook-form'
import { InputField } from './fields/MyField'
import { Grid, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useUserState } from "../../context/UserContext";
import { useHistory } from 'react-router-dom'

export function ProjectForm() {

    const { control, handleSubmit, watch, formState: { errors } } = useForm();
    const [submitting, setSubmitting] = React.useState(false)
    let history = useHistory()
    const { id: id_creator, token } = useUserState();

    function onSubmit(data) {
        console.log(data);
        setSubmitting(true)

    }

    React.useEffect(() => {
        if (submitting) {
            const data = watch();
            axiosMng.post('/project/new', {
                name: data.name,
                description: data.description,
                id_project_creator: id_creator
            }, { headers: { Authorization: `Basic ${token}` } })
                .then(res => {
                    console.log('res data: ', res.data.data);
                    history.push("/app");

                }).catch(err => {
                    console.log('algo salio mal: ', err);
                })
        }
    }, [submitting])

    return (
        <>
            <Typography variant='h4'>Create a new project</Typography>
            <form
                // form
                noValidate
                onSubmit={handleSubmit(onSubmit)}
            >
                <Grid
                    container
                    direction='column'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Grid
                        item
                        sx={{ width: 300 }}
                    >
                        <InputField
                            control={control}
                            name="name"
                            label="Nombre"
                            error={errors}
                            rules={{
                                required: 'This field is required',
                                maxLength: {
                                    value: 50, message: 'Nombre es demasiado largo, debe contener como maximo 50 caracteres'
                                }
                            }}
                        />
                    </Grid>
                    <Grid
                        item
                        sx={{ width: 300 }}
                    >
                        <InputField
                            control={control}
                            name="description"
                            label="Descripccion"
                            error={errors}
                            rules={{
                                required: 'This field is required',
                                maxLength: {
                                    value: 200, message: 'Descripcion es demasiado larga, debe contener como maximo 200 caracteres'
                                }
                            }}
                            rows={4}
                        />
                    </Grid>
                    <Grid
                        item
                        sx={{ width: 300 }}
                    >
                        <LoadingButton
                            loading={submitting}
                            sx={{ mt: 3 }}
                            type='submit'
                            variant='contained'
                            fullWidth
                        >
                            Crear
                        </LoadingButton>
                    </Grid>
                </Grid>
            </form>



        </>
    )
}