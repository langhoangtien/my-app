import React, { Component } from 'react';


class TaskItem extends Component {
    deleteItem = () => {
        this.props.deleteItem(this.props.task.id)
    }
    render() {
        return  (
            <tr>
            <th scope="row">{this.props.task.id}</th>
            <td>{this.props.task.name}</td>
            <td>{this.props.task.status ? "Active" : "Hide"}</td>
            <td><button className="btn btn-primary">Edit</button><button onClick= {this.deleteItem} className="btn btn-danger">Delete</button></td>
          </tr>
        )
    }
}

export default TaskItem