import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const RECEIVE_ANSWERED_QUESTIONS = 'RECEIVE_ANSWERED_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function handleAddQuestion (question) {
  return (dispatch, getState) => {
    const {authedUser} = getState()

    dispatch(showLoading())

    return saveQuestion({
      ...question,
      author: authedUser
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions: questions,
  }
}

function answerQuestion ({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  }
}

export function handleAnswerQuestion (info) {
  return (dispatch) => {
    dispatch(answerQuestion(info))

    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in handleAnswerQuestion: ', e)
        dispatch(answerQuestion(info))
        alert('The was an error answering the question. Try again.')
      })
  }
}
