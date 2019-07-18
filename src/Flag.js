import React from 'react';
import './Flag.css';

export const  Flag = ({currentQuestion}) => {
    return (<div className="Flag">
        <img alt="guess the flag" src={currentQuestion.image}/>
        <div className="Buttons">
        {currentQuestion.options.map((option, i) => {
            return <button key={i}>{option}</button>
        })}
        </div>

    </div>);
}