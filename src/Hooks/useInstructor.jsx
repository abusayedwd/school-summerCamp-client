import { useQuery } from '@tanstack/react-query';
 

const useInstructor = () => {
        const { refetch,  data: instructor = []} = useQuery({
                queryKey: ['instructors'],
                queryFn: async () => {
                        const res = await fetch('http://localhost:5000/instructors')

                        return res.json();
                },
              })
              console.log(instructor)
          return [instructor,refetch]
};

export default useInstructor;