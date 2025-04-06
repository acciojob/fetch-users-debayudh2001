
import React, { useState } from "react";
import './../styles/App.css';
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([])

  function handleClick() {
    axios.get("https://reqres.in/api/users")
      .then(res => setUsers(res.data.data))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <button className="btn" onClick={handleClick}>Get User List</button>
      <br />
      <br />
      <table style={{ width: "800px", marginLeft: "15px" }}>
        <thead>
          <tr style={{ width: "100%" }}>
            <th style={{ width: "25%" }}>First Name</th>
            <th style={{ width: "25%" }}>Last Name</th>
            <th style={{ width: "25%" }}>Email</th>
            <th style={{ width: "25%" }}>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {
            users.length == 0 ?
              (
                <tr style={{ width: "100%" }}>
                  <td colSpan="4" style={{ border: "none", textAlign: "center" }}>No data found to display.</td>
                </tr>
              )
              :
              users.map((user) => {
                return (
                  <tr style={{ width: "100%" }} key={user.id}>
                    <td style={{ width: "25%", paddingLeft: "5px" }}>{user.first_name}</td>
                    <td style={{ width: "25%", paddingLeft: "5px" }}>{user.last_name}</td>
                    <td style={{ width: "25%", paddingLeft: "5px" }}>{user.email}</td>
                    <td style={{ width: "25%", textAlign: "center" }}><img src={user.avatar} style={{ width: "50px", height: "50px", objectFit: "cover" }} /></td>
                  </tr>
                )
              })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
