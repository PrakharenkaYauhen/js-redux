// ComponentTaskSearch

import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
// import { Button } from 'react-bootstrap'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

let ComponentReduxForm = props => {
  // const { handleSubmit } = props;

  // let submit = (values, e) => {
  let submit = values => {
    // console.log(e)
    // e.preventDefault();
    console.log(values)
    // return false;
  }

  return (
    <form onSubmit={submit}>
      <div>
        <label htmlFor="FirstName">FirstName</label>
        <Field name='firstName' component='input' type='text' />
      </div>
      <div>
        <label htmlFor="LastName">LastName</label>
        <Field name='LastName' component='input' type='text' />
      </div>
      {/* <Button variant='secondary' type="submit">Submit</Button> */}
      <Button variant="contained" size="small" color="default" type="submit">
        SubmitUI <Icon>send</Icon>
      </Button>
    </form>
  )
}

ComponentReduxForm.propTypes = {
  handleSubmit: PropTypes.func,
}

ComponentReduxForm = reduxForm({ form: 'TrainingReduxForm' })(ComponentReduxForm);

export { ComponentReduxForm };