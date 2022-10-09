import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { StyledForm, StyledField } from './SearchForm.styled';

const SearchForm = ({ onSearch }) => {
  return (
    <Formik
      initialValues={{
        query: '',
      }}
      onSubmit={({ query }, { resetForm }) => {
        onSearch(query);
        resetForm();
      }}
    >
      <StyledForm>
        <label>
          <StyledField type="text" name="query" />
        </label>
        <button type="submit">Search</button>
      </StyledForm>
    </Formik>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
