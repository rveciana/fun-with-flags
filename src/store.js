import { createStore, applyMiddleware } from 'redux';
import { ofType, createEpicMiddleware, combineEpics } from 'redux-observable';
import { delay, mapTo, mergeMap } from 'rxjs/operators';
import reducer from './reducer';
import {nextQuestion, nextQuestionFilled} from './actions';
import {selectFlag} from './questions';
 
const startEpic = (action$, state$) => action$.pipe(
  ofType('START_GAME'),
  mapTo(nextQuestion(selectFlag(state$.previousCodes)))
);

const answerEpic = (action$, state$) => action$.pipe(
  ofType('ANSWER_QUESTION'),
  mergeMap(() => new Promise(() => selectFlag(state$.previousCodes)).then(() => {console.info("DD")}))
  
);

const rootEpic = combineEpics(
  startEpic, answerEpic
);

const epicMiddleware = createEpicMiddleware();
  
const store = createStore(reducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);
export default store;