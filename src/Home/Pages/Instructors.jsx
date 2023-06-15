 
import { Helmet } from 'react-helmet-async';
import useInstructor from '../../Hooks/useInstructor';
import Cover from '../../cover/Cover';

const Instructors = () => {
        const [instructors] = useInstructor()
        return (



                <div className=' mb-8'>
                  <Helmet>
                        <title> Sports camp | Instructor </title>
                </Helmet>
                        <Cover></Cover>
                      <h1 className="mb-8 border-b-2 text-3xl text-orange-200 text-center mt-6 font-bold">All Instructor : {instructors.length}</h1>  
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
        instructors.map((inst, index) => 
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
 
     
    
  </table>
</div>     
                </div>
        );
};

export default Instructors;