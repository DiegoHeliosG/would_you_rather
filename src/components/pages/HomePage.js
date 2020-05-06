import React, {Component} from 'react'
import { connect } from 'react-redux'
import {getAnsweredQuestions, getUnansweredQuestions} from "../../utils/helpers";
import QuestionCard from "../QuestionCard";
import RadioGroupToggle from "../common/RadioGroupToggle";

class HomePage extends Component {
  state = {
    showUnanswered: true,
  }

  handleChange = (e) => {
    let unanswered = e.target.id === 'unanswered';

    return this.setState({
      showUnanswered: unanswered,
    })
  };

  render() {
    let {questions, questionUnansweredIds, questionAnsweredIds} = this.props;
    let {showUnanswered} = this.state;
    let radios = [
      {
        id: 'unanswered',
        label: 'Unanswered',
        active: showUnanswered,
      },
      {
        id: 'answered',
        label: 'Answered',
        active: !showUnanswered,
      },
    ];

    return (
      <div className="row m-0 pt-4">
        <div className="col-md-6 offset-md-3">
          <RadioGroupToggle className="mb-3 w-100" radios={radios} handleChange={this.handleChange} bootstrapColor="secondary" />

          {showUnanswered &&
          <div title="Unanswered Questions">
            {questionUnansweredIds.length === 0 && (<h6 className="mt-4 f-centered">No more questions to answer.</h6>)}
            {questionUnansweredIds.map((questionId) => (
              <QuestionCard key={questionId} question={questions[questionId]} readOnly={true} answered={false} />
            ))}
          </div>}

          {!showUnanswered &&
          <div title="Answered Questions">
            {questionAnsweredIds.length === 0 && (<h4 className="mt-4 f-centered">No answered questions yet.</h4>)}
            {questionAnsweredIds.map((questionId) => (
              <QuestionCard key={questionId} question={questions[questionId]} readOnly={true} answered={true} />
            ))}
          </div>}
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser }) {
  return {
    questions,
    questionAnsweredIds: Object.keys(
        getAnsweredQuestions(questions, authedUser)
      )
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    questionUnansweredIds: Object.keys(
        getUnansweredQuestions(questions, authedUser)
      )
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
  }
}

export default connect(mapStateToProps)(HomePage)
