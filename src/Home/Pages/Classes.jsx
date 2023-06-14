 
import { useState } from 'react';
import useClass from '../../Hooks/useClass';
import Cover from '../../cover/Cover';
import AddClasses from './AddClasses';

const Classes = () => {
        const [classes] = useClass()
        
        return (
                <div>
                        <Cover></Cover>
                        <h1 className=" mt-12 mb-8 border-b-2 text-3xl text-orange-200 text-center font-bold"> All Classes: {classes.length}</h1>
                <div className="grid md:grid-cols-3 gap-4 mb-10">
                      {
                        classes.map(clas => 
                                <AddClasses key={clas._id}
                                clas = {clas}
                                ></AddClasses>
                       )
                      } 
                </div>
                </div>
        );
};

export default Classes;