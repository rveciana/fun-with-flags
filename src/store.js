import { createStore, applyMiddleware } from "redux";
import { ofType, createEpicMiddleware } from "redux-observable";
import { delay, mapTo } from "rxjs/operators";
import reducer from "./reducer";
 
const startEpic = action$ => action$.pipe(
  ofType('START_GAME'),
  delay(1000),
  mapTo({ type: 'START_TEST' })
);

const epicMiddleware = createEpicMiddleware();
  
const store = createStore(reducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(startEpic);
export default store;