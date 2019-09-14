import React from 'react';

import './CreateUser.styles.scss';

export default class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: this.state.username,
    };
    console.log(user);

    this.setState({username: ''});
  };

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              required
              className="form-control"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <input className="form-submit" type="submit" value="Create User"/>
          </div>
        </form>
      </div>
    );
  }
}