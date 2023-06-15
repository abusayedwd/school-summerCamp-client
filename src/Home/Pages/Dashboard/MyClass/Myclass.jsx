 
import Swal from 'sweetalert2';
import useSelectClass from '../../../../Hooks/useSelectClass';
import { FaTrashAlt, } from 'react-icons/fa';

const Myclass = () => {
        const [selectClass,refetch] = useSelectClass()


        const handleDeleteClass = item => {
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
               fetch(`http://localhost:5000/addClass/${item._id}`,{
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
                        <h1 className='text-2xl font-serif font-bold '>My Selected Classes : {selectClass.length}</h1>
              <div className="overflow-x-auto">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Class</th>
        <th>Instructor</th>
        <th>Price</th>
        <th>Seats</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      { 
        selectClass.map((select, index) => 
                <tr  key={select._id}>
        <th>
           {index + 1}
        </th>
        <td>
        
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src= {select.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
                <p>{select.name}</p>
             
        </td>
        <td>
           <p>{select.instructor}</p>
        </td>
        <td>
           <p>${select.price}</p>
        </td>
        <td>
           <p>{select.available_seats}</p>
        </td>
        <td>
           <p>Unpaid</p>
        </td>
        <td >
        <button onClick={() => handleDeleteClass(select)} className="btn btn-sm btn-error mr-4">
          <FaTrashAlt></FaTrashAlt>
        </button>
        <button className="btn btn-info btn-sm">Pay</button>
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

export default Myclass;