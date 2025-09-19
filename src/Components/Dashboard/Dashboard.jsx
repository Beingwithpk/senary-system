import React from 'react'
import './Dashboard.css'

const Dashboard = ({ useLogin, useDashboard, useCamera }) => {
  const handleClick = (e) => {
    e.preventDefault();
    useDashboard(false);
    useCamera(true);
  }
  const handleClick2 = (e) => {
    e.preventDefault();
    useDashboard(false);
    useLogin(true);
  }
  
  return (
    <div className='parent3'>
      <header className="header">
        <a href="" className="logo"><img src="IIIT logo3.png" alt="" /></a>
        <nav className="navbar">
          <a href="/" onClick={handleClick2} >Home</a>
          <a href="/" className='attendance' onClick={handleClick}>Mark Attendence</a>
          <a href="/">View Report</a>
          <a href="/">Apply L.A</a>
          <a href="/">Assignment</a>
        </nav>
      </header>
    </div>
  )
}
export default Dashboard