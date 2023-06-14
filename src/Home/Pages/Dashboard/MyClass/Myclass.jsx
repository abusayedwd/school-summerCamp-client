import React from 'react';
import useSelectClass from '../../../../Hooks/useSelectClass';

const Myclass = () => {
        const [selectClass] = useSelectClass()
        console.log(selectClass)
        return (
                <div>
                        <h1 className='text-2xl font-serif font-bold '>My Selected Classes : {selectClass.length}</h1>
                </div>
        );
};

export default Myclass;