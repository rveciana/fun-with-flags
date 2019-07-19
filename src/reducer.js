const initialState = {
'currentQuestion': null,
'gameStarted': false,
'gameEnded': false,
'numQuestions': 10,
'currQuestionNum': 0,
'correctAnswers': 0,
'previousCodes': []
};


export default function(state = initialState, action) {
    switch (action.type) {
      case 'START_GAME':
        return {...state, 'gameStarted': true,
                        'gameEnded': false,
                        'currQuestionNum': 0,
                        'correctAnswers': 0,
                        'previousCodes': []};
      case 'NEXT_QUESTION':
          return {...state, 'currQuestionNum': state.currQuestionNum + 1, 'currentQuestion': action.values,
                 'previousCodes': [...state.previousCodes, action.values.answerId]};
      case 'ANSWER_QUESTION':
        return {...state, 'correctAnswers': action.correct?state.correctAnswers+1:state.correctAnswers,
                'gameEnded': state.currQuestionNum>=state.numQuestions};
    default:
      return state;
    }
  }