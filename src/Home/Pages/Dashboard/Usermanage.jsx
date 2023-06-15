import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Usermanage = () => {
        const {data: users = [], refetch} = useQuery(['users'], async() => {
                const res = await fetch('http://localhost:5000/users')
                return res.json();
        })

        const handMakeAdmin = user => {
                fetch(`http://localhost:5000/users/admin/${user._id}`, {
                        method:'PATCH',
                })
                .then(res => res.json())
                .then(data => {
                        console.log(data)
                        if(data.modifiedCount){
                                refetch();
                                Swal.fire('made admin')
                        }
                })
        }

        const handleDeleteUser = user => {
                console.log(user)
                Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to delete this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                  if (result.isConfirmed) {
                     fetch(`http://localhost:5000/users/${user._id}`,{
                          method:'DELETE'
                     })
                     .then(res => res.json())
                     .then(data => {
                          if(data.deletedCount > 0){
                                  refetch();
                                  Swal.fire(
                                          'Deleted!',
                                          'Your file has been deleted.',
                                          'success'
                                        )
                          }
                     })
                  }
                })
              }


        return (
                <div>
                 <Helmet>
                        <title> Sports camp | Users manage </title>
                </Helmet>
                        <h1 className='text-2xl font-bold text-gray-400'>All Users : {users.length}</h1>
                        <div className="overflow-x-auto">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>User</th>
        <th>Email</th>
        <th>Role</th>
         
      </tr>
    </thead>
    <tbody>
      { 
        users.map((user, index) => 
                <tr  key={user._id}>
        <th>
           {index + 1}
        </th>
        <td>
        
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src= {user.photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
                <p>{user.name}</p>
             
        </td>
        <td>
           <p>{user.email}</p>
        </td>
        
        <td>
        {
                            user.role === 'admin' ? 'Admin':
                            <button onClick={() => handMakeAdmin(user)} className="btn btn-sm btn-ghost bg-green-400">Makeadmin</button>    
                        }
        </td>
        <td >
        <button onClick={() => handleDeleteUser(user)} className="btn btn-sm btn-error mr-4">
          <FaTrashAlt></FaTrashAlt>
        </button>
        </td>
         
      </tr>
                )
      } 
    </tbody> 
  </table>
</div>     
                </div>
        );
};

export default Usermanage;