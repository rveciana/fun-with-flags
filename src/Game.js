import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { startGame } from './actions';
import {
    faPaperPlane, faCircle
  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {Flag} from './Flag';


export const  Game = () => {
    const { gameStarted, currentQuestion, currQuestionNum, numQuestions } = useSelector(state => state);
    const dispatch = useDispatch();
    if(gameStarted){
    return (<div>
        <div>{currQuestionNum}/{numQuestions}</div>
    <Flag currentQuestion={currentQuestion}/>
    </div>
    );
    } else {
    return (
        <div onClick={()=> {dispatch(startGame());}}>
        <FontAwesomeIcon icon={faPaperPlane} style={{ color: 'green'}} size="6x" mask={faCircle} fixedWidth/>
        <div>Start</div>
    </div>
    );
    }
}