import { Formik, Form, Field } from "formik";

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formElements = e.currentTarget.elements;

    const name = formElements.contactName.value;
    const number = formElements.contactNumber.value;

    const contactObject = {
      name,
      number,
    };

    onAddContact(contactObject);

    e.currentTarget.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="">
          Name
          <input type="text" name="contactName" required />
        </label>
        <label htmlFor="">
          Number
          <input type="text" name="contactNumber" required />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

// const INITIAL_VALUES = {
//   contactName: "",
//   contactNumber: "",
// };

// const ContactForm = ({ onAddContact }) => {
//   return (
//     <Formik initialValues={INITIAL_VALUES} onSubmit={(e) => {

//     }}>
//       <Form>
//         <label>
//           <span>Name</span>
//           <Field type="text" name="contactName" />
//         </label>
//         <label>
//           <span>Number</span>
//           <Field type="text" name="contactNumber" />
//         </label>
//         <button type="submit">Add contact</button>
//       </Form>
//     </Formik>
//   );
// };

export default ContactForm;
