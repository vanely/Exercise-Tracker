import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import ExerciseList from './components/ExerciseList/ExerciseList.component';
import EditExercise from './components/EditExercise/EditExercise.component';
import CreateExercise from './components/CreateExercise/CreateExercise.component';
import CreateUser from './components/CreateUser/CreateUser.component';

import './App.css';

function App() {
  return (
   <Router>
     <Navbar/>
     <Switch>
       <Route exact path="/" component={ExerciseList}/>
       <Route path="/edit/:id" component={EditExercise}/>
       <Route path="/create" component={CreateExercise}/>
       <Route path="/user" component={CreateUser}/>
     </Switch>
   </Router>
  );
}

export default App;
