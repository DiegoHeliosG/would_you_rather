import { RECEIVE_USERS } from '../actions/users'
import {ADD_QUESTION, ANSWER_QUESTION} from "../actions/questions";

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ANSWER_QUESTION :
      const { qid, answer } = action

      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [qid]: answer
          }
        }
      }
    case ADD_QUESTION :
      console.log(action, 'action');
      const { question } = action

      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat(question.id),
        }
      }
    default :
      return state
  }
}
