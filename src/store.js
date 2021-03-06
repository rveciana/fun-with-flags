import { createStore, applyMiddleware } from 'redux';
import { ofType, createEpicMiddleware, combineEpics } from 'redux-observable';
import { map } from 'rxjs/operators';
import reducer from './reducer';
import {nextQuestion} from './actions';
import {selectFlag} from './questions';
 
const startEpic = (action$, state$) => action$.pipe(
  ofType('START_GAME'),
  map(() => {
    return nextQuestion(selectFlag(state$.value.previousCodes));
  })
);

const answerEpic = (action$, state$) => action$.pipe(
  ofType('ANSWER_QUESTION'),
  map(() => {
    return nextQuestion(selectFlag(state$.value.previousCodes));
  })
);

const rootEpic = combineEpics(
  startEpic, answerEpic
);

const epicMiddleware = createEpicMiddleware();
  
const store = createStore(reducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);
export default store;