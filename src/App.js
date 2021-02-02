import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css"

import Header from "./components/HeaderComponent"
import ExercisesList from "./components/ExerciseListComponent";
import EditExercise from "./components/EditExerciseComponent";
import CreateExercise from "./components/CreateExerciseComponent";
import CreateUser from "./components/CreateUserComponent";


function App() {
    return (
        <Router>
            <div>
                <Header/>
                <br/>
                <Route path="/" exact component={ExercisesList}/>
                <Route path="/edit/:id" exact component={EditExercise}/>
                <Route path="/create" exact component={CreateExercise}/>
                <Route path="/user" exact component={CreateUser}/>
            </div>
        </Router>
    )
}

export default App;
