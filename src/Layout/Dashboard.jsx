import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Dashboard = () => {
        const {user} = useContext(AuthContext)
        return (
                <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
  <Outlet></Outlet>
       
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button md:hidden">Open drawer</label>
  </div> 
  <div className="drawer-side  bg-green-600">
     <h1 className='mt-8'>Welcome <span className='text-2xl text-blue-400 font-bold'>{user.displayName}</span></h1>
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-96 h-full  text-base-content">
      {/* Sidebar content here */}
      <li><Link className='text-white font-bold ' to ="/">Home</Link></li>
      <li><Link className='text-white font-bold text-xl' to ="/dashboard/myclass">My Selected Class</Link></li>
      <li><Link className='text-white font-bold text-xl' to ="/dashboard/enrollclass">Enrolled Class</Link></li>
      <li><Link className='text-white font-bold text-xl' to ="/dashboard/history">Payment History</Link></li>
       
    </ul>
  
  </div>
</div>
        );
};

export default Dashboard;