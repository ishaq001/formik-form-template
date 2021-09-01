/** @format */

import React from 'react';
import { Formik, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';

import { FormikControl } from './FormikControl';

export const LoginForm = () => {
  const validationSchema = Yup.object({
    password: Yup.string().required('Password field should not be empty!'),
    email: Yup.string()
      .email('Invalid Email Format')
      .required('Email is required'),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log('values', values)}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              name="email"
              type="email"
              label="Email"
            />
            <FormikControl
              control="input"
              name="password"
              type="password"
              label="Password"
            />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
