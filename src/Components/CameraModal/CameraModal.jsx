import React, { useState, useRef } from 'react';



const Camera=({useDashboard,useCamera})=> {
  const [showPopup, setShowPopup] = useState(false);
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
    <div style={{backgroundImage: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`, height:'100%', width:'100%', position:'fixed',backgroundSize: 'cover',backgroundPosition: 'center'}} >
    <div >
      <button style={cameraBtn} onClick={openPopup}>Scan Face</button>
      <button style={backBtn} onClick={()=>{useCamera(false);useDashboard(true)} }>Go back</button>
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
    </div>
  );
}

const popupStyle = {
  position: 'fixed',
  top:0,
  left:0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};


const cameraBtn= {
  padding: '16px 32px',
  background:  '#3a86ff',
  color: '#fff',
  border: 'none',
  position: 'fixed',
  top: '40%',
  width:'30%',
  left:'35%',
  borderRadius: '8px',
  fontSize: '1.25rem',
  cursor: 'pointer',
  boxShadow: '0 4px 16px rgba(58,134,255,0.2)',
  transition: 'background 0.2s, transform 0.2s',
};
const backBtn={
  width:'30%',
  padding: '16px 32px',
  background:  '#3a86ff',
  color: '#fff',
  border: 'none',
  position: 'fixed',
  top: '60%',
  left:'35%',
  borderRadius: '8px',
  fontSize: '1.25rem',
  cursor: 'pointer',
  boxShadow: '0 4px 16px rgba(58,134,255,0.2)',
  transition: 'background 0.2s, transform 0.2s',
}
const popupContentStyle = {
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 8,
  textAlign: 'center',
};

export default Camera;