import React from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';

import './CreateExercise.styles.scss';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(res => {
        // res.data will be an array of the users in DB
        if (res.data.length > 0) {
          this.setState({
            users: res.data.map((user) => user.username),
            username: res.data[0].username,
          });
        }
      });
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // serialize exercise data
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    console.log(exercise);

    // send serialized data to backend
    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));

    // return to homepage after submission
    window.location = '/'
  };

  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              className="form-control"
              ref="userInput"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            >
              {
                this.state.users.map((user) => {
                  return (
                    <option
                      key={user}
                      value={user}
                    >
                      {user}
                    </option>
                  );
                })
              }
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              required
              className="form-control"
              type="text"
              name="description"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
              className="form-control"
              type="number"
              name="duration"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <input type="date" onChange={this.handleChange} name="date" value={this.state.date} />
            {/*<DatePicker*/}
            {/*  name="date"*/}
            {/*  selected={this.state.date}*/}
            {/*  onChange={this.handleChange}*/}
            {/*/>*/}
          </div>

          <div className="form-group">
            <input className="form-submit" type="submit" value="Create Exercise Log"/>
          </div>
        </form>
      </div>
    );
  }
}