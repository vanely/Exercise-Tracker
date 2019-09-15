import React from 'react';
import axios from 'axios';

import './EditExercise.styles.scss';
import DatePicker from "react-datepicker"; // doesn't allow for name attribute make personal custom component

export default class EditExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '', // user name not needed for edit. Clean up!
      description: '',
      duration: '',
      date: new Date(),
      users: []
    };
  }

  componentDidMount() {
    // fetch exercises
    console.log(this.props.match);
    axios.get(`http://localhost:5000/exercises/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          username: res.data.username,
          description: res.data.description,
          duration: res.data.duration,
          date: new Date(res.data.date)
        });
      })
      .catch(err => console.log(err));

    // fetch users
    axios.get('http://localhost:5000/users/')
      .then((res) => {
        if (res.length > 0) {
          this.setState({users: res.data.map(user => user.username)});
        }
      })
      .catch(err => console.log(err));
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

    axios.post(`http://localhost:5000/exercises/update/${this.props.match.params.id}`, exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  };

  render() {
    return (
      <div>
        <h3>Edit Exercise</h3>
        <form onSubmit={this.handleSubmit}>
          {/*<div className="form-group">*/}
          {/*  <label>Username: </label>*/}
          {/*  <select*/}
          {/*    className="form-control"*/}
          {/*    ref="userInput"*/}
          {/*    name="username"*/}
          {/*    value={this.state.username}*/}
          {/*    onChange={this.handleChange}*/}
          {/*  >*/}
          {/*    {*/}
          {/*      this.state.users.map((user) => {*/}
          {/*        return (*/}
          {/*          <option*/}
          {/*            key={user}*/}
          {/*            value={user}*/}
          {/*          >*/}
          {/*            {user}*/}
          {/*          </option>*/}
          {/*        );*/}
          {/*      })*/}
          {/*    }*/}
          {/*  </select>*/}
          {/*</div>*/}
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
            <input className="form-submit" type="submit" value="Edit Exercise"/>
          </div>
        </form>
      </div>
    );
  }
}