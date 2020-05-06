import React, {Component} from 'react';
import {connect} from "react-redux";
import Question from "./Question";
import CardHeader from "./common/CardHeader";
import Card from "./common/Card";
import CardImage from "./common/CardImage";
import {Redirect} from "react-router-dom";

class QuestionCard extends Component {
  render() {
    let {question, users, readOnly, answered} = this.props;

    if (question === undefined) {
      return <Redirect to='/home' />;
    }

    let author = users[[question.author]];
    let title = `${author.name} asks:`;
    let avatarUrl = window.location.origin + author.avatarURL;

    return (
      <Card className="mb-4">
        <CardHeader title={title} />
        <div className="p-3 text-center text-md-left text-dark">
          <div className="row">
            <div className="col-md-4">
              <CardImage url={avatarUrl} alt="avatar" />
            </div>
            <div className="col-md-8">
              <Question question={question} readOnly={readOnly} answered={answered} />
            </div>
          </div>
        </div>
      </Card>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(QuestionCard)
