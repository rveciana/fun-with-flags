const initialState = {
'currentQuestion': {'image': 'https://restcountries.eu/data/abw.svg', 'options': ['a', 'b', 'c']},
'gameStarted': false,
'numQuestions': 10,
'currQuestionNum': 0,
'correctAnswers': 0,
'previousQuestions': []
};


export default function(state = initialState, action) {
    switch (action.type) {
      case 'START_GAME':
      return {...state, 'gameStarted': true};
      case 'START_TEST':
      return {...state, 'currQuestionNum': 5};
    default:
      return state;
    }
  }