import React, { Component } from "react";
import axios from "axios";
import NewCar from "../components/NewCar";
import Cars from "../components/Cars"

export default class CarsContainer extends Component {
  constructor() {
    super();
    this.state = {
      newCar: {
        marca: "",
        modelo: "",
        año: null,
        precio: null,
        userId: null
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleChange(e) {
    // e.target.name y el e.target.value
    // PISTA: observen los inputs del newCar
    const key = e.target.name;
    const value = e.target.value;

    this.setState({
      newCar: {
        ...this.state.newCar,
        [key]: value,
      },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { marca, modelo, año, precio, userId } = this.state.newCar;
    axios
      .post("/api/cars", { marca, modelo, año, precio, userId })
      .then(res => res.data)
      .then(car => this.setState({ cars: [...this.state.cars, car] }));
  }

  render() {
    return (
      <div>
        <NewCar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          users={this.props.users}
        />
        <Cars cars={this.props.cars} users={this.props.users} />
      </div>
    );
  }
}
