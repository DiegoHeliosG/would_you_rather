import React, {Component} from 'react'
import {connect} from 'react-redux'
import Card from "../common/Card";
import CardHeader from "../common/CardHeader";
import {Link, Redirect} from "react-router-dom";
import {setAuthedUser} from "../../actions/authedUser";

class LoginPage extends Component {
  state = {
    canSubmit: false,
    selectedUser: null,
    toHome: false,
  }

  handleChange = (e) => {
    return this.setState({
      selectedUser: e.target.value,
      canSubmit: true,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(this.state.selectedUser));

    return this.setState({
      toHome: true,
    })
  }

  render() {
    let {users} = this.props;
    let {canSubmit} = this.state;
    let title = 'Welcome to the Would You Rather App!';
    let subtitle = 'Please sign in to continue';

    if (this.state.toHome === true) {
      return <Redirect to='/home' />
    }

    return (
      <div className="row m-0 py-4">
        <div className="col-12 col-md-6 offset-md-3">
          <Card className="mb-4">
            <CardHeader title={title} subtitle={subtitle} titleCentered={true} />
            <div className="mx-3 mt-3 text-dark">
              <div className="row">
                <div className="col-12">
                  <select className="custom-select custom-select-md mb-3" onChange={this.handleChange}>
                    <option defaultValue hidden>Select User</option>
                    {Object.values(users).map((user) => (
                      <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                  </select>
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

function mapStateToProps ({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(LoginPage)
