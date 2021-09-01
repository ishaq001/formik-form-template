/** @format */

import React from 'react';
import { useFormik } from 'formik';

const initialValues = {
  name: '',
  email: '',
  channel: '',
  address: '',
};
const onSubmit = (values) => console.log('values', values);
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = 'Name is required';
  }
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (
    // eslint-disable-next-line no-useless-escape
    !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      values.email
    )
  ) {
    errors.email = 'Invalid Email Format';
  }
  if (!values.channel) {
    errors.channel = 'Channel is required';
  }
  return errors;
};

export const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit, //it also gets the form state values object as a parameter
    validate, // validate function gets the formState values object as its parameter and this function must return object
  });

  // Note:
  //  onBlur: to check the if the field is visited by the user or not
  // formik.touched: It is an object having the same properties as initialValues but the values of the keys is a    //boolean that contains the info whether this input field is touched or visisted by the user or not. Thus it can help to show only the error related to specific field not all the fields
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <h1>Dummy Youtube Form</h1>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {/* check the note above for onBlur and formik.touched explanation */}
          {formik.errors.name && formik.touched.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="name">Channel</label>
          <input
            name="channel"
            id="channel"
            type="text"
            value={formik.values.channel}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.channel && formik.touched.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
