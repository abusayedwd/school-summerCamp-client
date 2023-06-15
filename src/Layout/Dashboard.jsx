import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { FaBook, FaBookDead, FaHistory, FaHome, FaUser } from 'react-icons/fa';
import logo from '../../public/logo.png'

const Dashboard = () => {
     
        return (
                <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
  <Outlet></Outlet>
       
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button md:hidden">Open drawer</label>
  </div> 
  <div className="drawer-side  bg-sky-500">
     <div className='ml-4'>
     <Link to = '/'>
          <img className='md:h-10 h-10 rounded-full mt-4' src={logo} alt="" />
          </Link>  
     <h1 className='mt-8 text-2xl font-bold text-orange-500'> SPORTS</h1>
     <span className=' font-bold font-serif '>s u m m e r   c a m p</span>
     </div>
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-96 h-full  text-base-content">
      {/* Sidebar content here */}
      <li><Link className='text-white font-bold ' to ="/"><FaHome></FaHome> Home</Link></li>
      <li><Link className='text-white font-bold ' to ="/dashboard/myclass"><FaBook></FaBook> My Selected Class</Link></li>
      <li><Link className='text-white font-bold ' to ="/dashboard/history"><FaHistory></FaHistory> Payment History</Link></li>
      <li><Link className='text-white font-bold ' to ="/dashboard/enrollclass"><FaBookDead></FaBookDead> Enrolled Class</Link></li>
      <li><Link className='text-white font-bold ' to ="/dashboard/users"><FaUser></FaUser> User manage</Link></li>
       
    </ul>
  
  </div>
</div>
        );
};

export default Dashboard;