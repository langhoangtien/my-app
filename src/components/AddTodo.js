import React, { Component } from "react";
import { connect } from "react-redux";
import { actionAddTodo } from "../actions";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
  onAddTodo = () => this.props.addTodo({ text: this.state.input });
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <p>
              <input
                className="form-control"
                value={this.state.input}
                name="input"
                type="text"
                onChange={this.handleChange}
              />
              <button className="btn btn-primary" onClick={this.onAddTodo}>
                Add Todo
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    addTodo: input => dispatch(actionAddTodo(input))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(AddTodo);

// export default Counter;
