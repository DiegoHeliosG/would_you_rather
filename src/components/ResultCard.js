import React, {Component} from 'react';
import {connect} from "react-redux";

class ResultCard extends Component {
  render() {
    let {questions, questionId, questionAnswer, answered} = this.props;
    let question = questions[questionId];
    let answer = question[questionAnswer];

    let questionText = `Would you rather ${answer.text}?`;
    let answeredClass = answered ? 'bg-success-light border border-success' : 'bg-light';
    let answerVoteCount = answer.votes.length;
    let voteCount = question.optionOne.votes.length + question.optionTwo.votes.length;
    let percentText = `${Math.round(answerVoteCount / voteCount * 100)}%`

    return (
      <div className={`border mr-2 mt-4 mt-2 ${answeredClass}`}>
        <div className="row my-2">
          <div className="col-md-12">
            <h5 className="text-center mx-2">{questionText}</h5>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-12">
            <div className="progress mx-3" style={{height: '2rem'}}>
              <div className="progress-bar bg-success" role="progressbar" style={{width: percentText}} aria-valuenow={percentText} aria-valuemin="0" aria-valuemax="100">
                {percentText}
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-12">
            <div className="text-center">{`${answerVoteCount} out of ${voteCount} votes`}</div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ questions }) {
  return {
    questions,
  }
}

export default connect(mapStateToProps)(ResultCard)
