/** @format */

import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import { TextError } from './TextError';

const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  social: {
    facebook: '',
    twitter: '',
  },
  phoneNumbers: ['', ''],
  phNumbers: [''],
};
const onSubmit = (values) => console.log('values', values);

const validationSchema = Yup.object({
  name: Yup.string().required('Name field is required.'),
  email: Yup.string()
    .email('Invalid email format.')
    .required('Email field is required.'),
  channel: Yup.string().required('Channel field is required.'),
});

export const GoogleForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <h1>Dummy Google Form</h1>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field name="name" id="name" type="text" />
          {/* implementation 1 of error message */}
          <ErrorMessage name="name" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field name="email" id="email" type="email" />
          {/* implementation 2 of error message */}
          <ErrorMessage name="email">
            {(errorMessage) => <div className="error">{errorMessage}</div>}
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor="name">Channel</label>
          <Field name="channel" id="channel" type="text" />
          <ErrorMessage name="channel" />
        </div>

        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" id="comments" name="comments" />
        </div>
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {/* implementation using render props to understand how the Field componenet handles all by itself*/}
            {(props) => {
              const { field, meta } = props;
              return (
                <>
                  <input id="address" type="text" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </>
              );
            }}
          </Field>
        </div>

        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <Field name="social.facebook" id="facebook" type="text" />
          <ErrorMessage name="social.facebook" />
        </div>
        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <Field name="social.twitter" id="twitter" type="text" />
          <ErrorMessage name="social.twitter" />
        </div>

        <div className="form-control">
          <label htmlFor="primaryPh">Primary Phone No</label>
          <Field name="phoneNumbers[0]" id="primaryPh" type="text" />
          <ErrorMessage name="phoneNumbers[0]" />
        </div>
        <div className="form-control">
          <label htmlFor="secondaryPh">Secondary Phone No</label>
          <Field name="phoneNumbers[1]" id="secondaryPh" type="text" />
          <ErrorMessage name="phoneNumbers[1]" />
        </div>

        <div className="form-control">
          {/* dynamically add input values along with two buttons. One for removing the input field and other is for adding */}
          <label>List Of Phone Numbers</label>
          <FieldArray name="phNumbers">
            {(fieldArrayProps) => {
              console.log('fieldArrayProps', fieldArrayProps);
              const { push, remove, form } = fieldArrayProps;
              const { values } = form;
              const { phNumbers } = values;
              return (
                <div>
                  {phNumbers.map((phNumner, index) => (
                    <div key={index}>
                      <Field name={`phNumbers[${index}]`} />
                      <button
                        type="button"
                        onClick={() => phNumbers.length > 1 && remove(index)}
                      >
                        -
                      </button>
                      <button type="button" onClick={() => push('')}>
                        +
                      </button>
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
