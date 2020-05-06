import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class QuestionReadOnly extends Component {
  state = {
    answer: null,
    canSubmit: false,
  }

  handleClick = (e) => {
    this.setState({
      answer: e.target.id === 'customRadio1' ? 'optionOne' : 'optionTwo',
      canSubmit: true,
    })
  }

  render() {
    let {question, answered} = this.props;
    let urlResult = `/results/${question.id}`;
    let urlQuestion = `/question/${question.id}`;
    let urlReadOnly = answered ? urlResult : urlQuestion;

    return (
      <Fragment>
        <div className="row">
          <div className="col-md-12">
            <ul className="d-inline-block">
              <li><h6>{question.optionOne.text}</h6></li>
              <li><h6>{question.optionTwo.text}</h6></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Link to={urlReadOnly}>
              <button className="btn btn-outline-success w-100">View Poll</button>
            </Link>
          </div>
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(QuestionReadOnly)
