import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import {handleAnswerQuestion} from "../actions/questions";
import {connect} from "react-redux";

class Question extends Component {
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

  handleSubmit = () => {
    this.props.dispatch(handleAnswerQuestion({
      authedUser: this.props.authedUser,
      qid: this.props.question.id,
      answer: this.state.answer
    }));
  }

  render() {
    let {question, readOnly, answered} = this.props;
    let {canSubmit} = this.state;
    let urlResult = `/results/${question.id}`;
    let urlQuestion = `/question/${question.id}`;
    let urlReadOnly = answered ? urlResult : urlQuestion;

    return (
      <Fragment>
        <h4>Would tou rather?</h4>
        { readOnly === true
          ? <Fragment>
              <div className="row">
                <div className="col-12">
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
          : <Fragment>
              <div className="row mb-3">
                <div className="col-md-12">
                  <div className="custom-control custom-radio">
                    <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" onClick={this.handleClick} />
                    <label className="custom-control-label" htmlFor="customRadio1">{question.optionOne.text}</label>
                  </div>
                  <div className="custom-control custom-radio mb-3">
                    <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" onClick={this.handleClick} />
                    <label className="custom-control-label" htmlFor="customRadio2">{question.optionTwo.text}</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <Link to={urlResult}>
                    <button className="btn btn-outline-success w-100" onClick={this.handleSubmit} disabled={!canSubmit}>Submit</button>
                  </Link>
                </div>
              </div>
            </Fragment>
        }
      </Fragment>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Question)
