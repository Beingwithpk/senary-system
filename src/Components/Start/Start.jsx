import React from 'react'
import './Start.css'

const Start = ({useStart,useLogin}) => {
  return (
    <div className='parent2'>
    <div className='container'>
      <div className="student portal" onClick={()=>{useStart(false); useLogin(true)}}>
        <h1>Students</h1>
        <img className='student-img' src="src\Components\Start\students.png" alt="" />
      </div>
      <div className="teachers portal">
        <h1>Teachers</h1>
        <img className='teachers-img' src="src\Components\Start\teachers.png" alt="" />
      </div>
    </div>
    </div>
  )
}

export default Start;
