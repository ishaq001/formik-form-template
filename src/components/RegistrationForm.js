/** @format */

import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormikControl } from './FormikControl';

export const RegistrationForm = () => {
  const options = [
    { key: 'Email', value: 'email' },
    { key: 'Telephone', value: 'telephone' },
  ];

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format').required(),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Password must match')
      .required('ConfirmPassword is required'),
    modeOfContact: Yup.string().required('Required'),
    phone: Yup.string().when('modeOfContact', {
      is: 'telephone',
      then: Yup.string().required('Phone No is required'),
    }),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContact: '',
        phone: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log('values', values)}
    >
      {(formik) => {
        console.log('formik', formik);
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="input"
              type="password"
              label="Password"
              name="password"
            />
            <FormikControl
              control="input"
              type="password"
              label="Confirm Password"
              name="confirmPassword"
            />
            <FormikControl
              control="radio"
              label="Mode Of Contact"
              name="modeOfContact"
              options={options}
            />
            <FormikControl
              control="input"
              type="text"
              label="Phone"
              name="phone"
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
