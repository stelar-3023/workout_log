import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {
    Navbar,
    Nav,
    NavItem,
    Jumbotron
} from "reactstrap";

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Workout Log</h1>
                                <h2>Track your workouts</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/">Exercises
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/create">Create Exercise Log
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/user">Create User
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
            </React.Fragment>

        )
    }
}

export default Header;