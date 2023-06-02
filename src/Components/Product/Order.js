
import React, { useState } from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { addToCart } from '../../Redux/Actions';
import {useSelector } from 'react-redux';
import './Order.css'


const validation = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
     number: Yup.string().required("Phone Number is required"),
      city: Yup.string().required("Name is required"),
  });

function Order() {
    const [data, setData] = useState([]);
    const cartItems = useSelector((state) => state.cartItems.cartItems);
   // const cartItems= cart.cartItems;
    debugger;

    console.log(cartItems);
  const formik = useFormik({
    initialValues: {
      email: "",
      number: "",
      city: "",
    },
    validationSchema: validation, 
    onSubmit: (values, { resetForm }) => {
     // alert(JSON.stringify(values, null, 2));
      console.log(values);
      const newData = [...data, values];
     
    setData(newData);
    resetForm();
    },
  });
 

  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <fieldset>
            <div class="form-group row"></div>
            <div class="form-group">
              <label className="col-sm-2 col-form-label" style={{color: 'white'}} >Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email" style={{backgroundColor: 'white'}}
                class="form-control"
                aria-describedby="emailHelp"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email && <div>{formik.errors.email}</div>}
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label className="col-sm-2 col-form-label" style={{color: 'white'}}>Phone:</label>
              <input
                type="number"
                name="number"
                placeholder="Enter Phone Number" style={{backgroundColor: 'white'}}
                class="form-control"
                onChange={formik.handleChange}
                value={formik.values.number}
              />
              {formik.errors.number && formik.touched.number && <div>{formik.errors.number}</div>}
            </div>
            <div className="form-group">
              <label className="col-sm-2 col-form-label" style={{color: 'white'}}>City:</label>
              <input
                type="text"
                name="city"
                placeholder="City" style={{backgroundColor: 'white'}}
                class="form-control"
                onChange={formik.handleChange}
                value={formik.values.city}
              />
              {formik.errors.city && formik.touched.city && <div>{formik.errors.city}</div>}
            </div>
            <div className="btn">
              <button type="submit" className="btn btn-primary">
                Submit  
              </button>
            </div>
          </fieldset>
        </form>
      </div>
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
            {data.map((user, index) => (
              <tr class="table-info" key={index}>
                <td>{user.email}</td>
                <td>{user.number}</td>
                <td>{user.city}</td>
                <td>{
                   cartItems.map((item, index) => (
                <tr key={index}>               
                  <ul>
                  <li>{item.name}{' |  '}{item.price}{'  | '}{item.quantity}{' | '} <img src={item.image} style={{width: '50px', height: '50px'}}/></li>
                  </ul>
                  </tr>
                   ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Order