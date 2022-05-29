import bgVideo1 from './assets/video/video.mp4'
import bgVideo2 from './assets/video/video.ogv'
import bgVideo3 from './assets/video/video.webm'
import './App.css';
import './assets/scss/style.scss'
import React, {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";
import FormPerson from "./components/forms/FormPerson";
import {connect, useDispatch, useSelector} from "react-redux";
import TreeList from "./components/list/treeList";
import {asyncFetchAll, fetchAll} from "./reducers/actions";



function App(props) {
    const [show, setShow] = useState(false);
    const parents = useSelector( state => state.parents)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(asyncFetchAll())
    }, [dispatch])
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
                        <div className="row justify-content-md-end justify-content-center">
                            <div className="col-auto mb-3">
                                <button className="btn add-person align-items-center d-flex" onClick={handleShow}>
                                    Add person
                                    <ion-icon name="person-add-outline"></ion-icon>
                                </button>
                            </div>
                            <div className="col-12">
                                <h1 className='h1 text-center'>
                                    Family Tree
                                </h1>
                            </div>
                            <div className="col-12">
                                <div className="row justify-content-center">
                                    <div className="col-xl-8">
                                        <TreeList  data={parents}/>
                                    </div>
                                </div>
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
const mapStateToProps = state => {
    return {
        all: state
    }
}
export default connect(mapStateToProps, null)(App);
