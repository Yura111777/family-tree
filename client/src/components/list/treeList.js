import React from "react";

const TreeList = (props)=> {
    console.log(props.data)
    return (
        <ul className='list'>
            {props.data.length ?
                props.data.map(el => {
                    return <li className='d-flex align-items-center' key={el._id}>
                        <img src={`/img/${el.photo}`} alt=""/>
                        <span className="name">{el.name}</span>
                    </li>
                }) : ''
            }
        </ul>
    )
}

export default TreeList;