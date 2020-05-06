export function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText.trim(),
    },
    optionTwo: {
      votes: [],
      text: optionTwoText.trim(),
    }
  }
}

export function getAnsweredQuestions(questions, authedUser) {
  let answeredQuestions = {};

  Object
    .values(questions)
    .filter((question) => {
      let answeredOptionOne = question
        .optionOne
        .votes
        .some((vote) => vote === authedUser);

      let answeredOptionTwo = question
        .optionTwo
        .votes
        .some((vote) => vote === authedUser);

      return answeredOptionOne || answeredOptionTwo;
    })
    .forEach((question) => answeredQuestions[[question.id]] = question);

  return answeredQuestions;
}

export function getUnansweredQuestions(questions, authedUser) {
  let unansweredQuestions = {};

  Object
    .values(questions)
    .filter((question) => {
      let unansweredOptionOne = question
        .optionOne
        .votes
        .every((vote) => vote !== authedUser);

      let unansweredOptionTwo = question
        .optionTwo
        .votes
        .every((vote) => vote !== authedUser);

      return unansweredOptionOne && unansweredOptionTwo;
    })
    .filter((question) => unansweredQuestions[[question.id]] = question);

  return unansweredQuestions;
}

export function getVoteCount(question) {
  return question.optionOne.votes.length + question.optionTwo.votes.length;
}
