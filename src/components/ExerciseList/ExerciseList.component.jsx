import React from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

import './ExerciseList.styles.scss';

export default class ExerciseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [],
    };
  }

  componentDidMount() {
    // fetch exercises on mount and add to state
    axios.get('http://localhost:5000/exercises/')
      .then(res => {
        console.log(res);
        this.setState({exercises: res.data});
      })
      .catch(err => console.log(err));
  }

  deleteExercise = (id) => {
    if (window.confirm('Are you sure you want to delete this exercise?')) {
      // send delete by id request to API and remove from server
      axios.delete(`http://localhost:5000/exercises/${id}`)
        .then(res => console.log(res.data));

      // update state to not contain exercise with removed id
      this.setState({
        exercises: this.state.exercises.filter((exercise) => {
          return exercise._id !== id;
        })
      });
    }
  };

  render() {
    return (
      <div className="exercise-container">
        {
          this.state.exercises.map((exercise) => {
            return (
              <div className="exercise" key={exercise._id}>
                <h4>{exercise.username}</h4>
                <p>{exercise.description}</p>
                <p>{exercise.duration}</p>
                <p>{exercise.date.substring(0, 10)}</p>
                <Link to={`/edit/${exercise._id}`}>Edit</Link>
                <button onClick={() => this.deleteExercise(exercise._id)}>Delete</button>
              </div>
            );
          })
        }
      </div>
    );
  }
}
