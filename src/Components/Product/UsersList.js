import React from 'react'
import {useSelector} from 'react-redux'

function UsersList() {
const users= JSON.parse(localStorage.getItem('usersList'));
console.log(users);
debugger;
  return (
    <div className="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Email Name</th>
          <th scope="col">Phone</th>
          <th scope="col">City</th>
          <th scope="col"> Product Details</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr class="table-info" key={index}>
            <td>{user.email}</td>
            <td>{user.number}</td>
            <td>{user.city}</td>
            <td>{
              user.products.map((item, index) => (
            <tr key={index}>               
              <ul>
              <li>{item.name}{' |  '}{item.price}{'  | '}{item.quantity}{' | '} <img src={item.image} alt={'image'} style={{width: '50px', height: '50px'}}/></li>
              </ul>
              </tr>
               ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default UsersList