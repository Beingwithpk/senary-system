import { useState } from 'react'
import './index.css'
import Start from './Components/Start/Start'
import LoginForm from './Components/LoginForm/LoginForm'
import Dashboard from './Components/Dashboard/Dashboard'
import Camera from './Components/CameraModal/CameraModal'

function App() {
  const [start,useStart] = useState(true);
  const [login,useLogin] = useState(false);
  const [dashboard,useDashboard] = useState(false);
  const [camera,useCamera] = useState(false); 
  return (
    <>
    {start?<Start useStart={useStart} useLogin={useLogin}/>:``}
    {login?<LoginForm useStart={useStart} useLogin={useLogin} useDashboard={useDashboard} />:``}
    {dashboard?<Dashboard useLogin={useLogin} useDashboard={useDashboard} useCamera={useCamera}/>:``}
    {camera?<Camera useDashboard={useDashboard} useCamera={useCamera}  />:``}
    {/* <Camera/> */}
    </>
  )
}

export default App
