import { Formik, Field, Form } from 'formik';

const SearchForm = ({ onSearch }) => {
  return (
    <Formik
      initialValues={{
        query: '',
      }}
      onSubmit={({ query }) => {
        onSearch(query);
      }}
    >
      <Form>
        <label>
          <Field type="text" name="query" />
        </label>
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
