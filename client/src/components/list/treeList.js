import React, { useState} from "react";
import {useDispatch} from "react-redux";
import {asyncFetchAll, asyncUpdateAll} from "../../reducers/actions";
import {saga} from "../../saga/actionSaga";
import {Modal} from "react-bootstrap";


const TreeList = (props)=> {
    const dispatch = useDispatch()
    const [activeClass, setActive] = useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (el, type) => {
        setShow(true);
        setTimeout(() => {
            document.getElementById('namePerson').defaultValue = el.name
            document.getElementById('agePerson').defaultValue = el.age
            document.querySelector('.submit-button').dataset.id = el._id
            document.querySelector('.submit-button').dataset.type = type
            document.querySelector('#photoPerson').dataset.photo = el.photo
        }, 100)

    }



    setTimeout( () => {
        setActive(true)
    }, 1000)

    const updatePerson = (e) => {
        const id = e.target.dataset.id
        const type = e.target.dataset.type
        const form = document.getElementById('form')
        const data = new FormData(form)
        const val1 = document.getElementById('namePerson').value
        const val2 = document.getElementById('agePerson').value
        const val3 = document.getElementById('photoPerson')
        if(!val1){
            data.delete('name')
        }
        if(!val2){
            data.delete('age')
        }
        if(val3.files[0] === undefined){
            data.append('photo', val3.dataset.photo )
        }
        saga(id, data, type)
        dispatch(asyncUpdateAll())
        handleClose()
    }
    const closeModal = () => handleClose()

    return (
        <ul className='list'>

            {props.data.length ?
                props.data.map(el => {
                    return <li  key={el._id} className={ activeClass ? 'family active' : 'family'}>
                        <div className='d-flex flex-column flex-md-row align-items-center pt-md-0 pt-2' title={`Update parents ${el.name}`}  onClick={() => handleShow(el, 'parents')}>
                            <div className="d-flex align-items-center">
                                <img src={`http://127.0.0.1:8080/images/${el.photo}`} alt=""/>
                                <span className="name">{el.name}</span>
                            </div>
                            <span className="name mx-md-5"><b>{el.age}</b> years old</span>
                        </div>
                                <ul className='list px-xl-5 py-3'>
                                    {el.kids.length ? el.kids.map( kid => {
                                            return(
                                                <li key={kid._id}  className={ activeClass ? 'active' : ''} title={`Update kid ${kid.name}`} onClick={() => handleShow(kid, 'kids')}>
                                                    <div className='d-flex justify-content-between flex-column flex-md-row align-items-center py-md-0 py-2'>
                                                        <div className="d-flex align-items-center">
                                                            <img src={`http://127.0.0.1:8080/images/${kid.photo}`} alt=""/>
                                                            <span className="name">{kid.name}</span>
                                                        </div>
                                                        <span className="name mx-md-5"><b>{kid.age}</b> years old</span>
                                                    </div>
                                                </li>
                                            )
                                        }

                                    ):''}

                                </ul>

                            </li>
                }) : ''
            }
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Family Tree</Modal.Title>
                </Modal.Header>
                <form id='form' name='form'>
                    <div className="person-block">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="form-group">
                                    <label htmlFor="namePerson">Name person:</label>
                                    <input   name='name' type="text" id='namePerson'  className='form-control'/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label htmlFor="agePerson">age:</label>
                                    <input name='age' type="text"   id='agePerson' className='form-control'/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="photoPerson">Photo parents:</label>
                            <input  name='photo' type="file" data-foto='' id='photoPerson' className='form-control'/>
                        </div>
                    </div>
                </form>
                <Modal.Footer>
                    <button className='btn' onClick={closeModal}>
                        Close
                    </button>
                    <button className='btn submit-button' data-id='' data-type='' type='submit' onClick={updatePerson}>
                        Save Changes
                    </button>
                </Modal.Footer>

            </Modal>
        </ul>
    )
}

export default TreeList;