 
import useInstructor from '../../Hooks/useInstructor';

const PopularInstructors = () => {
        const [instructors] = useInstructor();
        return (
                <div className='my-10'>
                    <h1 className="mt-16 mb-8 underline text-3xl text-orange-200 text-center font-bold">Popular Instructors : {instructors.slice(0,6).length}</h1> 

                    <div className='grid md:grid-cols-3 '>
   
      { 
        instructors.slice(0, 6).map(inst  => 
                <div className='p-8 ml-12 border-4 m-4' key={inst._id}>
                        <img className='h-36 w-40 rounded-3xl' src={inst.image} alt="" />
                        <h1>Name: {inst.name}</h1>
                        <p>Class :{inst.class}</p>
                </div>
                )
      } 
  
</div>   
                </div>
        );
};

export default PopularInstructors;