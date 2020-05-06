import React, {Component} from 'react'
import {connect} from 'react-redux'
import ResultsCard from "../ResultsCard";

class ResultsPage extends Component {
  render() {
    let questionId = this.props.match.params.id;
    let {questions} = this.props;
    let question = questions[[questionId]];

    return (
      <div className="row m-0 py-4">
        <div className="col-12 col-md-6 offset-md-3">
          <ResultsCard question={question} />
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ questions }) {
  return {
    questions
  }
}

export default connect(mapStateToProps)(ResultsPage)
