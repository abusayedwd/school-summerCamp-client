 import accesories from '../../../public/accesories/acce1.jpg'
 import accesories1 from '../../../public/accesories/goods3.jpg'
 import './Accessories.css'
const Accessories = () => {
        return (
                <div className='accessories-bg text-white my-20 bg-fixed'>
                              <h1 className='text-2xl font-serif font-bold text text-center mt-4'>Sports Accessories Features</h1>
                         <div className='md:flex items-center mt-28 px-24 py-16 gap-8 bg-slate-800 bg-opacity-20'>
                               <div className='relative'>
                                     <img src={accesories} alt="" />
                                     <img className='h-48 rounded-3xl md:-left-14 md:-bottom-16 -top-12 absolute    ' src={accesories1} alt="" />
                               </div>
                               <div className='px-4'>
                                     <p className='text-3xl font-bold uppercase'>which choses you </p>
                                     <p>consectetur adipisicing elit. A ipsa at sit amet consectetur adipisicing elit. A ipsa at nesciunt quaerat nesciunt quaerat!</p>
                                      
                                     <button className="btn btn-outline btn-success border-0  mt-8">Buy Now</button>
                               </div>
                                
                        </div>
                </div>
             );
};

export default Accessories;