import Link from "next/link";
import Image from "next/image";
import { Formik, Form, useField } from "formik";

import * as Yup from "yup";

import Header from "../components/header";

import styles from "../styles/About.module.css";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error text-red-600">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

function Play() {
  return (
    <>
      <div className=" bg-blue-800  flex  flex-col h-screen text-green-300 font-semibold place-items-center  ">
        <h1>Subscribe!</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            acceptedTerms: false, // added for our checkbox
            jobType: "", // added for our select
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            lastName: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            acceptedTerms: Yup.boolean()
              .required("Required")
              .oneOf([true], "You must accept the terms and conditions."),
            jobType: Yup.string()
              .oneOf(
                ["designer", "development", "product", "other"],
                "Invalid Job Type"
              )
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className="mt-7 flex flex-col space-y-3">
            <div className="text-red-400 flex flex-col bg-yellow-400 p-3 rounded-3xl">
              <MyTextInput
                label="First Name"
                name="firstName"
                type="text"
                placeholder="Jane"
              />
            </div>

            <div className="bg-yellow-400 p-3 rounded-3xl">
              <MyTextInput
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Doe"
              />
            </div>

            <div>
              <MyTextInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="jane@formik.com"
              />
            </div>

            <div>
              <MySelect label="Job Type" name="jobType">
                <option value="">Select a job type</option>
                <option value="designer">Designer</option>
                <option value="development">Developer</option>
                <option value="product">Product Manager</option>
                <option value="other">Other</option>
              </MySelect>
            </div>

            <div>
              <MyCheckbox name="acceptedTerms">
                I accept the terms and conditions
              </MyCheckbox>
            </div>
            <button
              className="bg-pink-300 text-red-900 font-extrabold rounded"
              type="submit"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default Play;
