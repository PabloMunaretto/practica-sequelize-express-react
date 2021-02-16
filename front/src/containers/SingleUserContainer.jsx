import React, { Component } from "react";
import axios from "axios";
import SingleUser from "../components/SingleUser";

export default class SingleUserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      cars: []
    };
  }

  componentDidMount() {
    const userPromise = axios.get(`/api/users/${this.props.userId}`).then((res) => res.data)
    const carPromise = axios.get(`/api/cars`).then(res => res.data)

    Promise.all([userPromise, carPromise])
    .then(([serverUser, cars]) => {
      const autos = cars.filter(car => car.userId == this.props.userId)
      this.setState({
        user: serverUser,
        cars: autos
      })
    })
  }

  render() {
    return <SingleUser user={this.state.user} cars={this.state.cars}/>;
  }
}
