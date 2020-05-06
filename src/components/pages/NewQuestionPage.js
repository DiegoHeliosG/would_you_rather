import React, {Component} from 'react'
import {connect} from 'react-redux'
import Card from "../common/Card";
import CardHeader from "../common/CardHeader";
import {Link, Redirect} from "react-router-dom";
import {handleAddQuestion} from "../../actions/questions";

class NewQuestionPage extends Component {
  state = {
    canSubmit: false,
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
  }

  handleChangeOptionOne = (e) => {
    let optionOneText = e.target.value.trimStart();
    let {optionTwoText} = this.state;
    let canSubmit = false;

    if (optionOneText !== '' && optionTwoText !== '') {
      canSubmit = true;
    }

    this.setState({
      optionOneText,
      canSubmit,
    })
  }

  handleChangeOptionTwo = (e) => {
    let optionTwoText = e.target.value.trimStart();
    let {optionOneText} = this.state;
    let canSubmit = false;

    if (optionOneText !== '' && optionTwoText !== '') {
      canSubmit = true;
    }

    this.setState({
      optionTwoText,
      canSubmit,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let {optionOneText, optionTwoText} = this.state;

    return this.props.dispatch(handleAddQuestion({optionOneText, optionTwoText}))
      .then(() => {
        this.setState({
          toHome: true,
        })
      });
  }

  render() {
    let title = 'Create New Question';
    let {canSubmit, optionOneText, optionTwoText} = this.state;

    if (this.state.toHome === true) {
      return <Redirect to='/home' />
    }

    return (
      <div className="row m-0 py-4">
        <div className="col-12 col-md-6 offset-md-3">
          <Card className="mb-4">
            <CardHeader title={title} titleCentered={true} />
            <div className="mx-3 mt-3 text-dark">
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-4">Complete this question:</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h5 className="mb-3">Would you rather...</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control mb-3"
                    ref={this.optionOneRef}
                    value={optionOneText}
                    placeholder="Enter Option One Text Here"
                    onChange={this.handleChangeOptionOne}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h5 className="d-flex align-items-center justify-content-center mb-3 separator">OR</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control mb-3"
                    ref={this.optionTwoRef}
                    value={optionTwoText}
                    placeholder="Enter Option Two Text Here"
                    onChange={this.handleChangeOptionTwo}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <Link to={`/home`}>
                    <button className="btn btn-outline-success w-100 mb-3" onClick={this.handleSubmit} disabled={!canSubmit}>Submit</button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
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

export default connect(mapStateToProps)(NewQuestionPage)
