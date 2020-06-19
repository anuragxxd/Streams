import { createStream } from "../../actions";
import { connect } from "react-redux";
import React, { Component } from "react";
import StreamForm from "./StreamForm";

class StreamCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create Stream</h3>
        <StreamForm onSubmit={this.onSubmit}></StreamForm>
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
