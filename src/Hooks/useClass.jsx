import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

 
 
 const useClass = () => {
         
        const { refetch,  data: classes = []} = useQuery({
                queryKey: ['classes'],
                queryFn: async () => {
                        const res = await fetch('https://sports-summercmp-server-abusayedwd.vercel.app/classes')

                        return res.json();
                },
              })
              console.log(classes)
          return [classes,refetch]
 
 };
 
 export default useClass;