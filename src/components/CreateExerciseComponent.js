import React, {Component} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

class CreateExercise extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeSet = this.onChangeSet.bind(this);
        this.onChangeRep = this.onChangeRep.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDistance = this.onChangeDistance.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            set: 0,
            repetitions: 0,
            description: '',
            weight: 0,
            duration: 0,
            distance: 0,
            date: new Date(),
            users: []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:5000/users/")
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username),
                        username: response.data[0].username
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeSet(e) {
        this.setState({
            set: e.target.value
        })
    }

    onChangeRep(e) {
        this.setState({
            repetitions: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeWeight(e) {
        this.setState({
            weight: e.target.value
        })
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        })
    }

    onChangeDistance(e) {
        this.setState({
            distance: e.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            set: this.state.set,
            repetitions: this.state.repetitions,
            description: this.state.description,
            weight: this.state.weight,
            duration: this.state.duration,
            distance: this.state.distance,
            date: this.state.date

        }
        console.log(exercise)

        axios.post("http://localhost:5000/exercises/add", exercise)
            .then(response => console.log(response.data))

        window.location = "/";
    }

    render() {
        return (
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput" required className="form-control" value={this.state.username}
                                onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function (user) {
                                    return <option key={user} value={user}>{user}</option>
                                })
                            }
                        </select>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label>Set: </label>
                        <input type="text" className="form-control" value={this.state.set}
                               onChange={this.onChangeSet}/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label>Reps: </label>
                        <input type="text" className="form-control" value={this.state.repetitions}
                               onChange={this.onChangeRep}/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label>Exercise: </label>
                        <input type="text" required className="form-control" value={this.state.description}
                               onChange={this.onChangeDescription}/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label>Weight: </label>
                        <input type="text" className="form-control" value={this.state.weight}
                               onChange={this.onChangeWeight}/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input type="text" className="form-control" value={this.state.duration}
                               onChange={this.onChangeDuration}/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label>Distance (in miles): </label>
                        <input type="text" className="form-control" value={this.state.distance}
                               onChange={this.onChangeDistance}/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker selected={this.state.date} onChange={this.onChangeDate}/>
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Save" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateExercise;