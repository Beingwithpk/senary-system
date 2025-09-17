import React, { useState, useRef } from 'react';

function Camera() {
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
}

const popupStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const popupContentStyle = {
  backgroundColor: 'skyblue',
  padding: 20,
  borderRadius: 8,
  textAlign: 'center',
};

export default Camera;