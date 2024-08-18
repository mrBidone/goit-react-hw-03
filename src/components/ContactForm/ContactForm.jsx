import { Formik, Form, Field } from "formik";

const INITIAL_VALUES = {
  contactName: "",
  contactNumber: "",
};

const ContactForm = () => {
  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={() => {}}>
      <Form>
        <label>
          <span>Name</span>
          <Field type="text" name="contactName" />
        </label>
        <label>
          <span>Number</span>
          <Field type="text" name="contactNumber" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
