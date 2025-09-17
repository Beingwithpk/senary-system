import React from 'react'
import './Dashboard.css'

const Dashboard = ({useDashboard,useCamera}) => {
  const [showPopup, setShowPopup] = useState(false);
  const openCamera = ()=>{
    setShowPopup(true);
  }
  return (
    {showPopup?
      <OpenPopup ></OpenPopup>
      :
      <>
      <div className='parent3'>
      <header className="header">
        <a href="" className="logo"><img src="IIIT logo3.png" alt="" /></a>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/" className='attendance' onClick={openCamera}>Marsk Attendence</a>
          <a href="/">View Report</a>
          <a href="/">Apply L.A</a>
          <a href="/">Assignment</a>
        </nav>
      </header>
    </div>
    </>
      
    }
    
  )
}

const openPopup = ({showPopup,setShowPopup}) => {
  
  const videoRef = useRef(null);
  
  const openPopup = () => {
    setShowPopup(true);
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(stream => {
            if (videoRef.current) {
              videoRef.current.srcObject = stream;
              videoRef.current.play();
            }
          })
          .catch(err => {
            alert('Camera access denied or not available');
            setShowPopup(false);
          });
      } else {
        alert('getUserMedia not supported in this browser');
        setShowPopup(false);
      }
    };
  
    const closePopup = () => {
      setShowPopup(false);
      if(videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  
    return (
      <div>
        <button onClick={openPopup}>Open Camera</button>
        {showPopup && (
          <div style={popupStyle}>
            <div style={popupContentStyle}>
              <video ref={videoRef} width="700" height="500" style={{ transform: 'scaleX(-1)' }} autoPlay />
              <br />
              <button onClick={closePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    );
};
  
export default Dashboard
