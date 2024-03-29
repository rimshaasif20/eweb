
import { useFormik } from "formik";
import * as Yup from "yup";
import './Order.css'
import {  useSelector, useDispatch } from "react-redux";
import { addUsers } from "../../Redux/Actions";
import { useNavigate } from "react-router";

const validation = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
     number: Yup.string().required("Phone Number is required"),
      city: Yup.string().required("Name is required"),
  });

function Order() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems=useSelector((state)=>state.cartItems.cartItems);
    var order={};
  const formik = useFormik({
    initialValues: {
      email: "",
      number: "",
      city: "",
    },
    validationSchema: validation, 
    onSubmit: (values, { resetForm }) => {
      console.log('form valusesssss', values)
     // alert(JSON.stringify(values, null, 2));
     order=values;
     order.products = cartItems;
     console.log("Form ORDER = ", order)
     if (cartItems.length > 0) {
      dispatch(addUsers(order));
      navigate('/products');
    } else {
      console.log("Cart items are not present in the table");
      alert('cartItems is not present')
    }
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
        <div className="container" >
    <table class="table table-hover">
      <thead >
        <tr >
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Image</th>
        </tr>
      </thead>
      <tbody  >
        {cartItems.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td> <img src={item.image} alt={'image'}  style={{width: '50px', height: '50px'}}/></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
      </div>
    </>
  );
}

export default Order