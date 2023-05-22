import { executionAsyncResource } from 'async_hooks';
import axios from 'axios';
import satreloUsersAPI from '../../api/satreloUsersAPI';

export const setAuthToken = (token:any) => {
    if (token){
        satreloUsersAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    else    
        delete satreloUsersAPI.defaults.headers.common["Authorization"];
}