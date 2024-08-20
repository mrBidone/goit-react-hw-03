import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const ContactValidationSchema = Yup.object().shape({
  contactName: Yup.string()
    .required("Required!")
    .min(3, "Too short")
    .max(50, "Too long"),

  contactNumber: Yup.number().required("Required!").min(7, "Too Short!"),
});

const INITIAL_VALUES = {
  contactName: "",
  contactNumber: "",
};

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    const contactObject = {
      name: values.contactName,
      number: values.contactNumber,
    };

    onAddContact(contactObject);

    actions.resetForm();
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={ContactValidationSchema}
      >
        {({ values, errors }) => {
          return (
            <Form>
              <label htmlFor={nameFieldId}>
                Name
                <Field type="text" name="contactName" id={nameFieldId} />
                <ErrorMessage name="contactName" component="span" />
              </label>
              <label htmlFor={numberFieldId}>
                Number
                <Field type="text" name="contactNumber" id={numberFieldId} />
                <ErrorMessage name="contactNumber" component="span" />
              </label>
              <button type="submit">Add contact</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default ContactForm;
