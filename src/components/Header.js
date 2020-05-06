import React, {Component, Fragment} from 'react'
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import "bootstrap/js/dist/collapse";

class Header extends Component {
  render() {
    let {users, authedUserId} = this.props;
    let authUser = users[[authedUserId]];
    let avatarUrl = authUser && (window.location.origin + authUser.avatarURL);

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink to="/home" className="p-0 p-lg-2 text-white font-weight-bold nav-link">Would you rather</NavLink>
        <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarToggler"
                aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto">
            {authUser &&
              <Fragment>
                <li className="py-2 py-lg-1 nav-item d-flex d-lg-none" data-toggle="collapse" data-target=".navbar-collapse.show">
                      <img className="mx-2 rounded-circle header-avatar" src={authUser && avatarUrl} alt="avatar" />
                      <span className="header-item f-va-c p-2 d-flex d-lg-none">{`Hello, ${authUser.name}`}</span>
                </li>
              </Fragment>
            }
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <NavLink to="/home" className="p-2 nav-link">Home</NavLink>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <NavLink to="/question" exact className="p-2 nav-link">New Question</NavLink>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <NavLink to="/board" className="p-2 nav-link">Leader Board</NavLink>
            </li>
          </ul>
          {authUser &&
            <ul className="navbar-nav">
              <li className="header-item f-va-c p-2 d-none d-lg-flex">
                {`Hello, ${authUser.name}`}
              </li>
              <li className="nav-item d-none d-lg-flex">
                <img className="mx-2 rounded-circle header-avatar" src={authUser && avatarUrl} alt="avatar" />
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <NavLink to="/login" className="p-2 nav-link">Logout</NavLink>
              </li>
            </ul>
          }
        </div>
      </nav>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  return {
    users,
    authedUserId: authedUser,
  }
}

export default connect(mapStateToProps)(Header)
