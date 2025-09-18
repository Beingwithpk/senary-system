import React from 'react'
import './Dashboard.css'

const Dashboard = ({ useDashboard, useCamera }) => {
  const handleClick = (e) => {
    e.preventDefault();
    useDashboard(false);
    useCamera(true);
  }
  return (
    <div className='parent3'>
      <header className="header">
        <a href="" className="logo"><img src="IIIT logo3.png" alt="" /></a>
        <nav className="navbar">
          <a href="/">Home</a>
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