import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.component";
import ExerciseList from './components/ExerciseList/ExerciseList.component';
import EditExercise from './components/EditExercise/EditExercise.component';
import CreateExercise from './components/CreateExercise/CreateExercise.component';
import CreateUser from './components/CreateUser/CreateUser.component';

import './App.scss';

function App() {
  return (
   <Router className="app">
     <Navbar/>
     <div className="routes-container">
       <Switch>
         <Route exact path="/" component={ExerciseList}/>
         <Route path="/edit/:id" component={EditExercise}/>
         <Route path="/create" component={CreateExercise}/>
         <Route path="/user" component={CreateUser}/>
       </Switch>
     </div>
   </Router>
  );
}

export default App;
