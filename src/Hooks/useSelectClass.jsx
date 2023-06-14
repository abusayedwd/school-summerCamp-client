import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

 

const useSelectClass = () => {
        const {user}  = useContext(AuthContext)

         const { refetch,  data: selectClass = []} = useQuery({
                queryKey: ['addClass', user?.email],
                queryFn: async () => {
                        const res = await fetch(`http://localhost:5000/addClass?email=${user?.email}`)

                        return res.json();
                },
              })
             
          return [selectClass,refetch]  
};

export default useSelectClass;