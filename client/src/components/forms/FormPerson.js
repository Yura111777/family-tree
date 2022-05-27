import React from "react";
import axios from "axios";
import {Modal} from "react-bootstrap";
import {setsData} from "../../fetchData/setsData";


const FormPerson = (props)=> {


    const createPerson = (e)=> {
        e.preventDefault()
        const form1 = {
            name: document.getElementById('nameParents').value,
            age: document.getElementById('ageParents').value,
            photo: document.getElementById('photoParents').files[0],
        }
        const form2 = {
            name: document.getElementById('namePerson').value,
            age: document.getElementById('agePerson').value,
            photo: document.getElementById('photoPerson').files[0],
        }
        if(form1.name){
            setsData(form1,'parents', form2,'kids');
        } else {

        }
    }
    return (
        <div>
            <form className='form-person' >
                <div className="parents-optional">
                    <span className="optional">Create parens (optional)</span>
                    <div className="form-group">
                        <label htmlFor="nameParents">Name parents:</label>
                        <input name='name' type="text" id='nameParents' className='form-control'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ageParents">Age parents:</label>
                        <input name='age' type="text" id='ageParents' className='form-control'/>
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
                <div className="person-block">
                    <div className="form-group">
                        <label htmlFor="namePerson">Name person:</label>
                        <input  name='name' type="text" id='namePerson' required className='form-control'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="agePerson">Age person:</label>
                        <input name='age' type="text"  required id='agePerson' className='form-control'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="photoPerson">Photo parents:</label>
                        <input  name='photo' type="file" id='photoPerson' className='form-control'/>
                    </div>
                </div>
                <div className="row">
                    <Modal.Footer>
                        <button className='btn' >
                            Close
                        </button>
                        <button className='btn' type='submit' onClick={createPerson}>
                            Save Changes
                        </button>
                    </Modal.Footer>
                </div>
            </form>

        </div>

    )
}

export default FormPerson;