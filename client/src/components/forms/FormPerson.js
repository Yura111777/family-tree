import React, {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";
import {setsData} from "../../fetchData/setsData";
import {connect, useDispatch, useSelector} from "react-redux";
import {asyncFetchAll, createAllPK} from "../../reducers/actions";


const FormPerson = (props)=> {

    const dispatch = useDispatch()
    const parents = useSelector( state => state.parents)
    const allData = [...parents]
    const [selectData, setSelectData] = useState(true)
    const[notValid, setInvalid] = useState(false)
    // console.log(allData)
    const option = ()=> {
        return  allData.length ? allData.map(el => {
            return (
                <option key={el._id} value={el._id}>{el.name}</option>
            )
        }) : false
    }
    const selectParents = () => {
        const select =  document.getElementById('existName')
        const selected = select.options[select.selectedIndex].value;
        const valSelect = selected === 'Select parents' ? {status:false, id:  null} :{status:true, id: selected };
        selected === 'Select parents' ? setSelectData(true) : setSelectData(false)
        return  valSelect;
    }
    const createPerson = ()=> {
        const parents = document.getElementById('nameParents').value;
        const kid = document.getElementById('namePerson').value;
        let form1 = document.getElementById('form1');
        let formDat1 = new FormData(form1);

        let form2 = document.getElementById('form2');
        let formDat2 = new FormData(form2);

        if(parents && kid || selectData === false && kid){
            setsData(formDat1,'parents', formDat2,'kids', selectData ? '' : selectParents()).then(r => {
                props.closeModal(r.command)
                dispatch(asyncFetchAll())
            })
        } else {
            setsData(formDat2,'parents').then(r => {
                props.closeModal(r.command)
                dispatch(asyncFetchAll())
            }).catch(e => {
                setInvalid(true)
            })
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
                    <div className='position-relative'>
                        <div className={selectData ?  'overlay-folder d-none' : 'overlay-folder d-block'}/>
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
                    </div>
                    {option() ?
                        <div className="form-group">
                            <label htmlFor="existName">Or Choose from existing:</label>
                            <select id="existName"  className='form-control' onChange={selectParents}>
                                <option value='Select parents'>Select parents</option>
                                {option()}
                            </select>
                        </div> : ''
                    }

                </div>
            </form>
            <form id='form2' name='form2'>
                <div className="person-block">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="form-group">
                                <label htmlFor="namePerson">Name person:</label>
                                <input   name='name' type="text" id='namePerson' required  className={notValid ? 'form-control not-valid': 'form-control'}/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label htmlFor="agePerson">age:</label>
                                <input name='age' type="text"  required id='agePerson' className={notValid ? 'form-control not-valid': 'form-control'} />
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


export default FormPerson ;