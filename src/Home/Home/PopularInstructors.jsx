 
import useInstructor from '../../Hooks/useInstructor';

const PopularInstructors = () => {
        const [instructor] = useInstructor();
        return (
                <div className='my-10'>
                    <h1 className="mt-16 mb-8 underline text-3xl text-orange-200 text-center font-bold">Popular Instructors : {instructor.slice(0,6).length}</h1> 

                    <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Picture</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      { 
        instructor.slice(0, 6).map((inst, index) => 
                <tr  key={inst._id}>
        <th>
           {index + 1}
        </th>
        <td>
        
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src= {inst.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
             
        </td>
        <td>
           {inst.name}
        </td>
        <td>{inst.email}</td>
         
      </tr>
                )
      }
      
      
    </tbody>
    {/* foot */}
     
    
  </table>
</div>   
                </div>
        );
};

export default PopularInstructors;