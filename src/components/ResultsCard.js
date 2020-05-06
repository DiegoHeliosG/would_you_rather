import React, {Component} from 'react';
import {connect} from "react-redux";
import CardHeader from "./common/CardHeader";
import Card from "./common/Card";
import CardImage from "./common/CardImage";
import ResultCard from "./ResultCard";
import {Redirect} from "react-router-dom";

class ResultsCard extends Component {
  render() {
    let {question, authedUser, users} = this.props;

    if (question === undefined) {
      return <Redirect to='/home' />;
    }

    let author = users[[question.author]]
    let title = `Asked by ${author.name}`
    let optionOneAnswered = question.optionOne.votes.some((vote) => vote === authedUser);
    let avatarUrl = window.location.origin + author.avatarURL;

    return (
      <Card>
        <CardHeader title={title} />
        <div className="mx-3 mt-3 text-center text-md-left text-dark">
          <div className="row">
            <div className="col-md-4">
              <CardImage url={avatarUrl} alt="avatar" />
            </div>
            <div className="col-md-8 mb-4">
              <h4>Results:</h4>
              <ResultCard questionId={question.id} questionAnswer="optionOne" answered={optionOneAnswered} />
              <ResultCard questionId={question.id} questionAnswer="optionTwo" answered={!optionOneAnswered} />
            </div>
          </div>
        </div>
      </Card>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    users,
  }
}

export default connect(mapStateToProps)(ResultsCard)
