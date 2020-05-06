import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Homepage from './pages/HomePage'
import LoadingBar from 'react-redux-loading-bar'
import Header from './Header'
import QuestionPage from "./pages/QuestionPage";
import ResultsPage from "./pages/ResultsPage";
import LeaderBoardPage from "./pages/LeaderBoardPage";
import NewQuestionPage from "./pages/NewQuestionPage";
import LoginPage from "./pages/LoginPage";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-12 p-0">
              <Header />
            </div>
          </div>
          <div className="row m-0">
            <LoadingBar style={{backgroundColor: '#007bff'}} />
          </div>
          {this.props.loading === true
            ? null
            : <Fragment>
                <Route path='/' exact component={Homepage} />
                <Route path='/home' exact component={Homepage} />
                <Route path='/login' exact component={LoginPage} />
                <Route path='/question/:id' exact component={QuestionPage} />
                <Route path='/question' exact component={NewQuestionPage} />
                <Route path='/results/:id' exact component={ResultsPage} />
                <Route path='/board' exact component={LeaderBoardPage} />
              </Fragment>
          }
        </div>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser,
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
