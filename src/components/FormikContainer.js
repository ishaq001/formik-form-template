/** @format */

import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import '../App.css';
import { FormikControl } from './FormikControl';

export const FormikContainer = () => {
  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' },
  ];
  const genderValues = [
    { key: 'Male', value: 'male' },
    { key: 'Female', value: 'female' },
  ];

  const checkboxOptions = [
    { key: 'option 1', value: 'option1' },
    { key: 'option 2', value: 'option2' },
    { key: 'option 3', value: 'option3' },
  ];
  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    gender: '',
    checkOption: [],
    date: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required('Email is required'),
    description: Yup.string().required('Description is required'),
    selectOption: Yup.string().required('Select a value please.'),
    gender: Yup.string().required('Please choose a gender'),
    checkOption: Yup.array().required('Please check a value'),
    date: Yup.date().required('Please choose date').nullable(),
  });
  const onSubmit = (values) => console.log('values', values);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl
            control="textarea"
            label="Description"
            name="description"
          />
          <FormikControl
            control="select"
            label="Select A Topic"
            as="select"
            name="selectOption"
            options={dropdownOptions}
          />

          <FormikControl
            control="radio"
            label="Select Gender"
            name="gender"
            options={genderValues}
          />
          <FormikControl
            control="checkbox"
            label="Select Option"
            name="checkOption"
            options={checkboxOptions}
          />

          <FormikControl control="date" label="Select Date" name="date" />
          <button type="submit">Button</button>
        </Form>
      )}
    </Formik>
  );
};
