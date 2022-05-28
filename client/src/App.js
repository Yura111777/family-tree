import bgVideo1 from './assets/video/video.mp4'
import bgVideo2 from './assets/video/video.ogv'
import bgVideo3 from './assets/video/video.webm'
import './App.css';
import './assets/scss/style.scss'
import React, {useState} from "react";
import {Modal} from "react-bootstrap";
import FormPerson from "./components/forms/FormPerson";


function App() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const closeModal = (val) => {
        if(val === 'close-modal') {
            setShow(false)
        }
    }

      return (
        <div className="App">
          <header className="App-header">
              <video width='100%' autoPlay muted  loop className='video-bg' >
                  <source src={bgVideo1} type="video/mp4" />
                  <source src={bgVideo2} type="video/ogv" />
                  <source src={bgVideo3} type="video/webm" />
              </video>
              <div className="dark-bg">
                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="col-auto">
                                <button className="btn add-person" onClick={handleShow}>
                                    <ion-icon name="person-add-outline"></ion-icon>
                                </button>
                            </div>
                        </div>
                    </div>
                  <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                          <Modal.Title>Family Tree</Modal.Title>
                      </Modal.Header>
                      <FormPerson closeModal={closeModal} />

                  </Modal>
              </div>
          </header>
        </div>
      );
}

export default App;
