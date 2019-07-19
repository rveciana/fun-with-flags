import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import './Game.css';

import { startGame } from './actions';
import {
    faPlay
  } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {Flag} from './Flag';


export const  Game = () => {
    const { gameStarted, gameEnded, currentQuestion, currQuestionNum, numQuestions, correctAnswers } = useSelector(state => state);
    const dispatch = useDispatch();
    if(gameStarted && !gameEnded){
    return (<div>
        <div>Question {currQuestionNum}/{numQuestions} Score: {correctAnswers}</div>
    <Flag currentQuestion={currentQuestion}/>
    </div>
    );
    } else if(gameEnded){
        let classes;
        if(numQuestions===correctAnswers){
            classes = "Game max";
        } else if(correctAnswers >= numQuestions*0.6) {
            classes = "Game regular";
        } else {
            classes = "Game rookie";
        }
        return (<div className={classes}>
            <div className="result">You scored {correctAnswers} of {numQuestions}</div>
            <div onClick={()=> {dispatch(startGame());}}>Play again <FontAwesomeIcon icon={faPlay} style={{ color: 'green'}}/></div>
            <div><a href="https://github.com/rveciana/fun-with-flags">Check the code <FontAwesomeIcon icon={faGithub}/></a></div>
            </div>);
    } else {
    return (
        <div onClick={()=> {dispatch(startGame());}}>
        <div>Fun with Flags</div>
        <FontAwesomeIcon icon={faPlay} style={{ color: 'green'}} size="6x"/>
    </div>
    );
    }
}