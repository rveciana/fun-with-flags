export const startGame = () => ({
    type: 'START_GAME'
  })

export const nextQuestion = (values) => ({
  type: 'NEXT_QUESTION',
  values: values
})

export const answerQuestion = (correct) => ({
  type: 'ANSWER_QUESTION',
  correct: correct
})

