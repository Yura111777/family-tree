import React from "react";
import {Modal} from "react-bootstrap";
import {setsData} from "../../fetchData/setsData";


const FormPerson = (props)=> {


    const createPerson = (e)=> {
        e.preventDefault()
        const parents = document.getElementById('nameParents').value;
        let form1 = document.getElementById('form1');
        let formDat1 = new FormData(form1);

        let form2 = document.getElementById('form2');
        let formDat2 = new FormData(form2);

        if(parents){
            setsData(formDat1,'parents', formDat2,'kids').then(r => props.closeModal(r))
        } else {
            setsData(formDat2,'parents').then(r => props.closeModal(r))
        }
    }
    const closeModal = ()=> {
        props.closeModal('close-modal')
    }

    return (
        <div>
            <form className='form-person'  id='form1' name='form1'>
                <div className="parents-optional">
                    <span className="optional">Create parens (optional)</span>
                    <div className="row">
                        <div className="col-md-9">
                            <div className="form-group">
                                <label htmlFor="nameParents">Name parents:</label>
                                <input name='name' type="text" id='nameParents' className='form-control'/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label htmlFor="ageParents">age:</label>
                                <input name='age' type="text" id='ageParents' className='form-control'/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="photoParents">Photo parents:</label>
                        <input name='photo' type="file" id='photoParents' className='form-control'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="existName">Or Choose from existing:</label>
                        <select id="existName"  className='form-control'></select>
                    </div>
                </div>
            </form>
            <form id='form2' name='form2'>
                <div className="person-block">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="form-group">
                                <label htmlFor="namePerson">Name person:</label>
                                <input   name='name' type="text" id='namePerson' required className='form-control'/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label htmlFor="agePerson">age:</label>
                                <input name='age' type="text"  required id='agePerson' className='form-control'/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="photoPerson">Photo parents:</label>
                        <input  name='photo' type="file" id='photoPerson' className='form-control'/>
                    </div>
                </div>
            </form>
            <Modal.Footer>
                <button className='btn' onClick={closeModal}>
                    Close
                </button>
                <button className='btn' type='submit' onClick={createPerson}>
                    Save Changes
                </button>
            </Modal.Footer>
        </div>

    )
}

export default FormPerson;