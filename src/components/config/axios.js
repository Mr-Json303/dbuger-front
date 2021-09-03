import axios from 'axios';

let AxiosManager;

if (process.env.NODE_ENV !== 'production'){
    AxiosManager = axios.create({
        baseURL: 'http://localhost:4000'
    });
}else{
    AxiosManager = axios.create({
        baseURL: 'http://localhost:4000'
    });
}

export default AxiosManager;