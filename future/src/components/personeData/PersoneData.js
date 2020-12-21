import React from 'react'
import './personeData.css'


const PersoneData = (props) => {
    return (
        <div className='persone'>
            <p>Выбран пользователь <b>{props.persone.firstName} {props.persone.lastName}</b></p>
            <p>Описание:</p>
            <textarea defaultValue={props.persone.description}/>
            <p>Адрес проживания: <b>{props.persone.address.streetAddress}</b></p>
            <p>Город: <b>{props.persone.address.city}</b></p>
            <p>Провинция/штат: <b>{props.persone.address.state}</b></p>
            <p>Индекс: <b>{props.persone.address.zip}</b></p>
        </div>
    )
}

export default PersoneData