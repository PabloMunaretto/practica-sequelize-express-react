import React, { Component } from "react";
import axios from "axios";
import SingleCar from "../components/SingleCar";

export default class SingleCarContainer extends Component {
  constructor() {
    super();
    this.state = {
      car: {},
    }
  }

  componentDidMount() {
    axios
      .get(`/api/cars/${this.props.carId}`)
      .then((res) => res.data)
      .then(serverCar => this.setState({ car: serverCar }));
  }

  render() {
    return <SingleCar car={this.state.car} users={this.props.users} />;
  }
}