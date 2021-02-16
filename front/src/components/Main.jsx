import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import axios from "axios";
import UsersContainer from "../containers/UsersContainer";
import SingleUserContainer from "../containers/SingleUserContainer";
import CarsContainer from "../containers/CarsContainer";
import SingleCarContainer from "../containers/SingleCarContainer";

export default class Main extends Component {

  constructor() {
    super();
    this.state = {
      cars: [],
      users: [],
    }
  }

  componentDidMount() {
    const carPromise = axios.get("/api/cars").then((res) => res.data)
    const userPromise = axios.get("/api/users").then((res) => res.data)

    Promise.all([carPromise, userPromise])
      .then(([serverCars, serverUsers]) => {
        this.setState({
          cars: serverCars,
          users: serverUsers
        })
      })
}

  render (){
    return (
      <div>
        <Switch>
          <Route exact path="/users" component={UsersContainer} />
          <Route
            path="/users/:id"
            render={({ match }) => <SingleUserContainer userId={match.params.id} />}
          />
          <Route exact path="/cars"
          render={() => <CarsContainer cars={this.state.cars} users={this.state.users}/>}
          />
          <Route
          path="/cars/:id" 
          render={({ match }) => <SingleCarContainer carId={match.params.id} users={this.state.users} />}/>
          
          <Redirect from="/" to="/users" />
        </Switch>
      </div>
    )
  }
}
