import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

const Form = props => {
  const { handleSubmit } = props;
  return (
    <form name="userForm" onSubmit={handleSubmit}>
      <div className="form-check form-check-inline">
        <Field
          name="type"
          component="input"
          type="radio"
          className="form-check-input"
          value="1"
        />
        <label className="form-check-label" htmlFor="type">
          Text
        </label>
      </div>
      <div className="form-check form-check-inline">
        <Field
          name="type"
          component="input"
          type="radio"
          className="form-check-input"
          value="2"
        />
        <label className="form-check-label" htmlFor="type">
          Markdown
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="front">Front</label>
        <Field
          name="front"
          component="input"
          type="text"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="back">Back</label>
        <Field
          name="back"
          component="input"
          type="text"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        <i className="glyphicon glyphicon-pencil"> </i>Save
      </button>
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

const CardForm = reduxForm({
  form: 'card',
  initialValues: { type: '1' }
})(Form);

export default CardForm;
