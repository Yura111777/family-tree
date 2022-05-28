import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {asyncEditParents} from "../../reducers/actions";
import {saga} from "../../saga/actionSaga";

const TreeList = (props)=> {
    const dispatch = useDispatch()
    const [activeClass, setActive] = useState(false)
    setTimeout( () => {
        setActive(true)
    }, 1000)

    const editParents = (val) => {
        saga(val)
        dispatch(asyncEditParents())

    }
    return (
        <ul className='list'>

            {props.data.length ?
                props.data.map(el => {
                    return <li  key={el._id} className={ activeClass ? 'family active' : 'family'}>
                        <div className='d-flex align-items-center'>
                            <img src={`http://127.0.0.1:8080/images/${el.photo}`} alt=""/>
                            <span className="name">{el.name}</span>
                            <span className="name mx-5"><b>{el.age}</b> years old</span>
                        </div>
                                <ul className='list px-5 py-3'>
                                    {el.kids.length ? el.kids.map( kid => {
                                            return(
                                                <li key={kid._id}  className={ activeClass ? 'd-flex align-items-center active' : 'd-flex align-items-center'} onClick={() => editParents(kid._id)}>
                                                    <img src={`http://127.0.0.1:8080/images/${kid.photo}`} alt=""/>
                                                    <span className="name">{kid.name}</span>
                                                    <span className="name mx-5"><b>{kid.age}</b> years old</span>
                                                </li>
                                            )
                                        }

                                    ):''}

                                </ul>

                            </li>
                }) : ''
            }
        </ul>
    )
}

export default TreeList;