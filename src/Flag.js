import React from 'react';
import { useDispatch } from "react-redux";
import {answerQuestion} from "./actions";
import './Flag.css';

export const  Flag = ({currentQuestion}) => {
    const dispatch = useDispatch();
    return (<div className="Flag">
        <img alt="guess the flag" src={currentQuestion.image}/>
        <div className="Buttons">
        {currentQuestion.options.map((option, i) => {
            return <button key={i} onClick={() => {dispatch(answerQuestion(option === currentQuestion.correctAnswer))}}>{option}</button>
        })}
        </div>

    </div>);
}
