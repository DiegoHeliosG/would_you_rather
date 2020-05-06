import React, {Component} from 'react'
import UserCard from "../UserCard";
import {connect} from "react-redux";

class LeaderBoardPage extends Component {
  getOrderedUsers = (users) => {
    return Object.values(users)
      .map((user) => {
        user['answeredQuestions'] = Object.keys(user.answers).length;
        user['createdQuestions'] = user.questions.length;
        user['score'] = Object.keys(user.answers).length + user.questions.length;
        return user;
      })
      .sort((a, b) => {
        return b.score - a.score;
      });
  }

  render() {
    let {users} = this.props;
    let orderedUsers = this.getOrderedUsers(users);

    return (
      <div className="row m-0 pt-4">
        <div className="col-md-6 offset-md-3">
          {orderedUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(LeaderBoardPage)
