import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from 'react-router-dom';
 
import login from '../../public/login.avif'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import GoogleLogin from "./GoogleLogin";

 


 

const Login = () => {
        
        const { register, handleSubmit,reset,  formState: { errors }  } = useForm();
        const [error, setError] = useState('')
         const {signIn} =  useContext(AuthContext)
         const location = useLocation()
         const navigate = useNavigate();
   
         const from = location.state?.from?.pathname || '/';
          
          
    const onSubmit = data => {
         signIn(data.email, data.password)
         
         .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                reset();
                setError(' ')
                Swal.fire({
                        title: 'User login Success!!',
                        showClass: {
                          popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                          popup: 'animate__animated animate__fadeOutUp'
                        }
                      })
                      navigate(from, {replace: true})
                    

                })
                
                .catch(error => {
                 console.log(error)
                 setError('email or password not match')
        })
    
};
 

        return (
                <div className="bg-blue-500 h-60">
                <Helmet>
                        <title> Sports camp | Login </title>
                </Helmet>
                 <div className="hero bg-base-200">
                        <div className="md:flex gap-4">
                                <div className="text-center w-[60%]">
                                        <img src={login} alt="" />
         </div>
        <div className="card w-[40%] shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <h1 className="text-3xl font-bold">Login</h1>
                        <div className="form-control">
                                <label className="Email">
                                        <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email"
                                {...register("email", { required: true })}
                                className="input input-bordered" />
                                {errors.email && <span className="text-red-600 font-bold">Email is required</span>}
                        </div>
                        
                        <div className="form-control">
                                <label className="password">
                                        <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"
                                {...register("password",  { required: true })}
                                name="password" className="input input-bordered" />
                                 {errors.password && <span className="text-red-600 font-bold">Password is required</span>}
                        </div> 
                        <p>{error}</p> 
                        <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />

                        </div>
                </form>
                        <GoogleLogin></GoogleLogin>
                <p className="text-center mb-4">
                         New to sports camp? <Link  className="text-blue-600" to = '/signup'>SignUp</Link>
                </p>
         </div>
         </div>
                </div>
               </div>
        );
};

export default Login;


 