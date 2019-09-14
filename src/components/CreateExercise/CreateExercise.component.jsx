import React from 'react';
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
    this.setState({
      users: ['test user'],
      username: 'test user',

    });
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    console.log(exercise);

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
            <DatePicker
              selected={this.state.date}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <input className="form-submit" type="submit" value="Create Exercise Log"/>
          </div>
        </form>
      </div>
    );
  }
}