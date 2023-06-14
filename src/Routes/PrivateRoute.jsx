import { useContext } from 'react';
 
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
 

const PrivateRoute = ({chidren}) => {
        const {user,loading} = useContext(AuthContext)
        const location = useLocation();

        if(loading){
                return <progress className="progress w-56 mx-auto"></progress>
        }
        if(user){
                return chidren
        }

        return <Navigate to = '/login'  state={{from:location}} replace></Navigate>
};

export default PrivateRoute;