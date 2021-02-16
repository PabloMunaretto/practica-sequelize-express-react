import React from "react";
import { Link } from "react-router-dom";

export default ({ car, users }) => (
  <div>
        <Link to="/cars">
        <h4>Volver a sección automóviles</h4>
        </Link>
        <h2>
        MARCA: {car.marca} MODELO: {car.modelo} AÑO: {car.año} PRECIO: US${car.precio}
        </h2>
        <h4>DUEÑO: {users.map(user => {
            return user.id === car.userId ? <Link key={user.id} to={`/users/${user.id}`}>{user.name} {user.lastname}</Link> : null
        })} </h4>
        <br />
  </div>
);