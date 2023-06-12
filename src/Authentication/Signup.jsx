import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import signup1 from '../../public/signup.avif'
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";



const Signup = () => {
        
        const { register, handleSubmit,reset, formState: { errors } } = useForm();
        const {createUser, updateUserProfile} = useContext(AuthContext)
         const navigate = useNavigate()

const onSubmit = data => {
         createUser(data.email, data.password)
         
         .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)
                    reset('')
                        Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your work has been saved',
                                showConfirmButton: false,
                                timer: 1500
                              })
                              reset()
                              navigate('/');
               
                        
                })
                .catch(error => {
                        console.log(error)
                })
        console.log(data)
};
 

        return (
                <div>
                <Helmet>
                        <title> Sports camp | SignUp </title>
                </Helmet>
                 <div className="hero min-h-screen bg-base-200">
                        <div className="md:flex gap-4">
                                <div className="text-center w-[60%]">
                                        <img src={signup1} alt="" />
         </div>
        <div className="card w-[40%] shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <h1 className="text-3xl font-bold">Sign Up</h1>
                        <div className="form-control">
                                <label className="label">
                                        <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name"
                                {...register("name", { required: true })}
                                  className="input input-bordered" />
                                 {errors.name && <span className="text-red-600 font-bold">Name is required</span>}
                        </div>
                        
                        <div className="form-control">
                                <label className="label">
                                        <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email"
                                {...register("email",  { required: true })}
                                name="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600 font-bold">Email is required</span>}
                        </div>
                        <div className="form-control">
                                <label className="label">
                                        <span className="label-text">Password</span>
                                </label>
                                <input type="password" 
                                name="password"{...register("password",  { required: true ,
                                maxLength: 20,
                                minLength: 6 ,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ 
                                
                                })} placeholder="password" className="input input-bordered" />
                                 {errors.password?.type === 'required' && <span className="text-red-600 font-bold">Password is required</span>}
                                 {errors.password?.type === 'minLength' && <span className="text-red-600 font-bold">Password must be 6 character</span>}
                                 {errors.password?.type === 'pattern' && <span className="text-red-600 font-bold"> one uppercase & one spacial case </span>}
                        </div>
                        <div className="form-control">
                                <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" 
                                name="confirm"{...register("confirm",  { required: true ,
                                 
                                
                                })} placeholder="Confirm password" className="input input-bordered" />
                                 {errors.confirm?.type === 'required' && <span className="text-red-600 font-bold">Confirm Password is required</span>}
                                  
                        </div>
                        <div className="form-control">
                                <label className="label">
                                        <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" placeholder="Photo url"  
                                {...register("photoURL", { required: true })}
                                  className="input input-bordered" />
                                 {errors.photoURL && <span className="text-red-600 font-bold">Photo Url is required</span>}
                        </div>
                         
                        <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="SignUp" />

                        </div>
                </form>
                <p className="text-center mb-4">
                        Already have an account? <Link  className="text-blue-600" to = '/login'>Login</Link>
                </p>
         </div>
         </div>
                </div>
               </div>
        );
};

export default Signup;