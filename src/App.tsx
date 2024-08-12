import './App.css'
import AudioPlayer from 'react-h5-audio-player';
import Modal from 'react-modal';
import './assets/newstyle.css';
import React, { useEffect } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    border: "none"
  },
};

Modal.setAppElement('#root');

function App() {

  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    setIsOpen(true)
  }, [])
 

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
      <div className='content'>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
          <div className='modal'>
            <div className='modal-title'>I WILL ALWAYS LOVE YOU...</div> 
            <button className='modal-button' onClick={closeModal}>I LOVE YOU TOO ❤</button>
          </div>
        </Modal>
        <div className='images'>
          <img className='img img1' src={require('./assets/images/1.jpg')} alt=""/>
          <img className='img img2' src={require('./assets/images/2.jpg')} alt=""/>
          <img className='img img3' src={require('./assets/images/3.jpg')} alt=""/>
          <img className='img img1' src={require('./assets/images/4.jpg')} alt=""/>
          <img className='img img2' src={require('./assets/images/5.jpg')} alt=""/>
        </div>
        <div className='player'>
          <img className='song-cover' src={require('./assets/images/cover.jpg')} alt=""/>
          <div className='song-info'>
            <span className='song-name'>EYLÜL AYIN'DA</span>
            <span className='song-writer'>Yusuf Lök</span>
          </div>
          <AudioPlayer
            autoPlay
            src={require("./assets/music/music.wav")}
          />
        </div>
        <div className='images img-reverse'>
          <img className='img img4' src={require('./assets/images/6.jpg')} alt=""/>
          <img className='img img5' src={require('./assets/images/7.jpg')} alt=""/>
          <img className='img img6' src={require('./assets/images/8.jpg')} alt=""/>
          <img className='img img4' src={require('./assets/images/9.jpg')} alt=""/>
          <img className='img img5' src={require('./assets/images/10.jpg')} alt=""/>
        </div>
        <div className='responsive-images'>
          <div className='res-images'>
            <img className='img img1' src={require('./assets/images/1.jpg')} alt=""/>
            <img className='img img2' src={require('./assets/images/2.jpg')} alt=""/>
            <img className='img img3' src={require('./assets/images/3.jpg')} alt=""/>
            <img className='img img1' src={require('./assets/images/4.jpg')} alt=""/>
            <img className='img img2' src={require('./assets/images/5.jpg')} alt=""/>
          </div>
          <div className='res-images'>
            <img className='img img4' src={require('./assets/images/6.jpg')} alt=""/>
            <img className='img img5' src={require('./assets/images/7.jpg')} alt=""/>
            <img className='img img6' src={require('./assets/images/8.jpg')} alt=""/>
            <img className='img img4' src={require('./assets/images/9.jpg')} alt=""/>
            <img className='img img5' src={require('./assets/images/10.jpg')} alt=""/>
          </div>
        </div>
      </div>
  )
}

export default App;
