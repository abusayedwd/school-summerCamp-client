import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddClasses = ({clas}) => {
        const {name,image, instructor,available_seats, number_of_students,price,_id} = clas;
         
        const {user} = useContext(AuthContext)
        const navigate = useNavigate();
        const location = useLocation()


        const handleSelectClass = clas => {
                console.log(clas)
                if(user&&user.email ){
                        const addClass = {
                         name,
                         price,
                         image,
                         email:user.email,
                         itemId:_id,
                         instructor,available_seats, 
                         number_of_students
                        };
                       fetch('http://localhost:5000/addClass' , {
                         method:'post',
                         headers:{
                           'content-type': 'application/json'
                         },
                         body: JSON.stringify(addClass)
                       }
                       )
                       .then(res => res.json())
                       .then(data => {
                          if(data.insertedId){
                                Swal.fire({
                                        title: 'Are you sure?',
                                        text: "You won't be able to select class",
                                        icon: 'warning',
                                        showCancelButton: true,
                                        confirmButtonColor: '#3085d6',
                                        cancelButtonColor: '#d33',
                                        confirmButtonText: 'Yes, Selected'
                                      }).then((result) => {
                                        if (result.isConfirmed) {
                                          Swal.fire(
                                            'Deleted!',
                                            'Your file has been deleted.',
                                            'success'
                                          )
                                        }
                                      })
                        //    Swal.fire({
                        //      position: 'top-end',
                        //      icon: 'success',
                        //      title: 'Your Class is Selected',
                        //      showConfirmButton: false,
                        //      timer: 1500
                        //    })
                          }
                       })
                     }
                     else{
                       Swal.fire({
                         title: 'Please Login to Select the Class',
                         icon: 'warning',
                         showCancelButton: true,
                         confirmButtonColor: '#3085d6',
                         cancelButtonColor: '#d33',
                         confirmButtonText: 'Login now'
                       }).then((result) => {
                         if (result.isConfirmed) {
                            navigate('/login',{state: {from:location}})
                         }
                       })
                     } 
        }
        



        return (
                <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={image} alt="Shoes" className="rounded-xl w-72 h-60" />
                </figure>
                <div className="card-body  ">
                  <h2 className="card-title">Game : {name}</h2>
                  <p>Instructor Name : {instructor}</p>
          <small> Available seats : {available_seats}</small>
          <small>Students : {number_of_students}</small>

                  <small>Price: ${price}</small>
                  <div className="card-actions">
                    <button onClick={ () => handleSelectClass (clas)} className="btn btn-success">Select Class</button>
                  </div>
                </div>
              </div>
        );
};

export default AddClasses;