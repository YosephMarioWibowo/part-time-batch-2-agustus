import React from 'react';
import '../../containers/pages/Register/Register.scss';

const Button = ({title, onClick, loading}) => {
    if (loading){
        return <button className="btn-disable">loading...</button>    
    }
    return (
        <button className="btn" onClick={onClick}>{title}</button>
    )
}

export default Button;