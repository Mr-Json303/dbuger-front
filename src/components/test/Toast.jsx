import React, {
    useState,
    useEffect
} from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert'

export default function CustomToast(props){
    

    const [openToast, setOpenToast] = useState(false);
    const [Msg, setMsg] = useState('Mensaje de exito');
    const [boolCargando, setBoolCargando] = useState(false);

    useEffect(() => {
        if(!boolCargando){

            console.log('Dentro del UseEffect del snackbar');
            console.log('OpenToast: ', props.open, '\nPropsOpen: ', props.open);
            

            setOpenToast(props.open)

            setMsg(props.text)

            setBoolCargando(true);
        }
    }, [boolCargando, openToast])


    //METODO ALERT
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenToast(false);
    };

    if (boolCargando) {

        return (
            <>
                <Snackbar open={openToast} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        {Msg}
                    </Alert>
                </Snackbar>
            </>
        )
    } else {
        return (
            <>
                CARGANDO...
            </>
        )
    }

}
