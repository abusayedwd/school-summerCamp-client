import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
        return (
                <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
  <Outlet></Outlet>
       
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button md:hidden">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full  bg-green-600 text-base-content">
      {/* Sidebar content here */}
      <li><Link className='text-white font-bold' to ="/dashboard/home">Home</Link></li>
      <li><Link className='text-white font-bold' to ="/dashboard/myclass">My Selected Class</Link></li>
      <li><Link className='text-white font-bold' to ="/dashboard/enrollclass">Enrolled Class</Link></li>
      <li><Link className='text-white font-bold' to ="/dashboard/history">Payment History</Link></li>
       
    </ul>
  
  </div>
</div>
        );
};

export default Dashboard;