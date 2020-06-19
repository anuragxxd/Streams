import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  renderError(meta) {
    if (meta.touched && meta.error) {
      return (
        <div className="ui error message">
          <div className="header">{meta.error}</div>
        </div>
      );
    }
  }
  renderInput = (formProps) => {
    const className = `field ${
      formProps.meta.error && formProps.meta.touched ? "error" : ""
    }`;
    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off" />
        <div>{this.renderError(formProps.meta)}</div>
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter Title"
        ></Field>
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        ></Field>
        <button className="ui primary button">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "Title required";
  }
  if (!formValues.description) {
    errors.description = "Description required";
  }

  return errors;
};

export default reduxForm({
  form: "streamForm ",
  validate,
})(StreamForm);
