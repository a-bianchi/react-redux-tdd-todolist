import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, makeStyles } from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';

const propTypes = {
  handleAction: PropTypes.func,
};

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error: {
    color: theme.palette.error.dark,
  },
}));

const formValidationSchema = Yup.object().shape({
  key: Yup.number(),
  name: Yup.string()
    .max(40, 'Please enter no more than 40 characters')
    .min(2, 'Please enter no less than 2 characters')
    .required('Please enter a task'),
});

const ListOfElementsForm = ({ handleAction }) => {
  const classes = useStyles();
  return (
    <div>
      <Formik
        initialValues={{ key: '', name: '' }}
        onSubmit={(values, { resetForm }) => {
          handleAction({ key: Date.now(), name: values.name });
          resetForm();
        }}
        enableReinitialize
        validationSchema={formValidationSchema}
        render={({
          handleSubmit, handleChange, handleBlur, values, errors, touched,
        }) => (
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              data-test="newElementName"
              name="name"
              type="text"
              label="Task"
              margin="normal"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <Button
              data-test="addNewElementButton"
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Add
            </Button>
            {errors.name && touched.name ? (
              <div className={classes.error} data-test="errorMessage">
                {errors.name}
              </div>
            ) : null}
          </form>
        )}
      />
    </div>
  );
};

ListOfElementsForm.defaultProps = {
  handleAction: () => {},
};

ListOfElementsForm.propTypes = propTypes;

export default ListOfElementsForm;
