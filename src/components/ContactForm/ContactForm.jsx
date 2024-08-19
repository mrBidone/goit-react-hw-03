import { Formik, Form, Field } from "formik";

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

  return (
    <>
      <Formik initialValues={{ INITIAL_VALUES }} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor="">
            Name
            <Field type="text" name="contactName" required />
          </label>
          <label htmlFor="">
            Number
            <Field type="text" name="contactNumber" required />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
