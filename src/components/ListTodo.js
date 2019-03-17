import React from "react";
import { connect } from "react-redux";

class ListTodo extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      elements: this.props.todos
    };
  }
  toggleTodo(id) {
    const newState = this.state.elements.map((todo, index) =>
      todo.id === id
        ? todo
        : {
            id: id,
            completed: !todo.completed,
            text: todo.text
          }
    );
    this.setState({
      elements: newState
    });
  }
  showProps = () => {
    console.log(this.props);
  };
  render() {
    const elements = this.props.todos.map((todo, index) => (
      <li
        key={todo.id}
        onClick={() => this.toggleTodo(todo.id)}
        className={
          todo.completed ? "list-group-item" : "list-group-item active"
        }
      >
        {todo.text}
      </li>
    ));
    return (
      <ul className="list-group">
        <button onClick={this.showProps} className="btn">
          Show Props
        </button>
        {elements}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.list };
};
export default connect(
  mapStateToProps,
  null
)(ListTodo);
