import React from "react";
import { Link } from "react-router-dom";

export default ({ cars, users }) => (
  <div>
    <h2>Automóviles</h2>
    <table>
      <thead>
        <tr>
          <td>
            <h4>MARCA</h4>
          </td>
          <td>
            <h4>MODELO</h4>
          </td>
          <td>
            <h4>AÑO</h4>
          </td>
          <td>
            <h4>PRECIO</h4>
          </td>
        </tr>
      </thead>
      <tbody>
        {cars.map(car => {
          return (
            <tr key={car.id}>
              <td>
                <h4>
                  <Link to={`/cars/${car.id}`}>{car.marca}</Link>
                </h4>
              </td>
              <td>
                <h4>
                  {car.modelo}
                </h4>
              </td>
              <td>
                <h4>
                  {car.año}
                </h4>
              </td>
              <td>
                <h4>
                  US${car.precio}
                </h4>
              </td>
              <td>
                {users.map(user => {
                  return user.id == car.userId ? <h4 key={user.id}><Link to={`/cars/${car.id}`}>{user.name} {user.lastname}</Link></h4> : null })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
