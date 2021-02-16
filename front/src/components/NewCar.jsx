import React from "react";

export default ({ handleChange, handleSubmit, users }) => (
  <div>
    <h2>Asignar automóvil</h2>
    <form onSubmit={handleSubmit}>
      
      <label>Marca: </label>
      <input name="marca" onChange={handleChange}></input>
      <br />
      <label>Modelo: </label>
      <input name="modelo" onChange={handleChange}></input>
      <br />
      <label>año: </label>
      <input name="año" onChange={handleChange}></input>
      <br />
      <label>Precio: </label>
      <input name="precio" onChange={handleChange}></input>
      <br />
      <label>Dueño: </label>

      <select >
        {users.map(user => {
          return <option name="userId" onChange={handleChange} key={user.id} value={user.id}>{user.name} {user.lastname}</option>
        })}
      </select>

      {/* <input name="userId" onChange={handleChange} type="number" placeholder="Introduzca su ID"></input> */}
      <br />

      <button type="submit">Submit</button>
    </form>
    <br />
  </div>
);