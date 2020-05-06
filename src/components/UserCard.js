import React, {Component} from 'react';
import {connect} from "react-redux";
import Card from "./common/Card";

class UserCard extends Component {
  render() {
    let {user} = this.props;
    let avatarUrl = window.location.origin + user.avatarURL;

    return (
      <Card className="p-3 mb-4">
        <div className="row">
          <div className="col-md-3 pb-4 pb-md-0 text-center text-md-left">
            <img className="user-image w-100 rounded-circle shadow-sm" src={avatarUrl} alt="avatar" />
          </div>
          <div className="col-md-6 pb-4 pb-md-0 text-center text-md-left">
            <div className="row">
              <div className="col-md-12">
                <h4 className="mb-4 text-dark">{user.name}</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <h6 className="text-dark">Answered questions</h6>
              </div>
              <div className="col-4">
                <h6 className="text-dark">{user.answeredQuestions}</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <h6 className="text-dark">Created questions</h6>
              </div>
              <div className="col-4">
                <h6 className="text-dark">{user.createdQuestions}</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="row">
              <div className="col-md-12">
                <h4 className="mb-4 text-dark">Score</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 px-5 py-0 p-md-0">
                <div className="score mx-auto w-50 rounded-circle bg-primary text-white">
                  <h4 className="score-text mb-0 f-centered">{user.score}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(UserCard)
